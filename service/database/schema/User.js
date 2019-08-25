const mongoose = require('mongoose')
const Schema = mongoose.Schema
let ObjectId = Schema.Types.ObjectId
const bcrypt = require('bcrypt')//加盐加密
const SALT_WORK_FACTOR=10//加盐
//创建user Schema
const userSchema = new Schema({
    UserId:ObjectId,
    userName : {unique:true,type:String},//独一无二且字符串类型
    password: String,
    createAt:{type:Date,default:Date.now()},//注册日期 //默认值 现在时间
    lastLoginAt:{type:Date,default:Date.now()},//最后一次登陆
})
userSchema.pre('save',function(next){
bcrypt.genSalt(SALT_WORK_FACTOR,(err,salt)=>{
    if(err)return next(err)
    bcrypt.hash(this.password,salt,(err,hash)=>{
        if(err) return next(err)
        this.password= hash
        next()
    })
})
})
userSchema.methods={
    comparePassword:(_password,password)=>{//比对密码
        return new Promise((resolve,reject)=>{
            bcrypt.compare(_password,password,(err,isMatch)=>{
                if(!err) resolve(isMatch)
                else reject(err)   
            })
        })
    }
}
//发布模型
mongoose.model('User',userSchema)