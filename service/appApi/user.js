const Router = require('koa-router')
const mongoose = require('mongoose')
let router = new Router()
router.get('/',async(ctx)=>{
    ctx.body='这是用户操作首页'
})
router.post('/register',async(ctx)=>{
   const User = mongoose.model('User')
   let newUser = new User(ctx.request.body)//接手过来的账号密码
   //保存到数据库
   await newUser.save().then(()=>{
        ctx.body={
            code:200,
            message:'success'
        }
   }).catch(error=>{
       ctx.body={
           code:500,
           message:error
       }

   })

})
router.post('/login',async(stx)=>{
    let loginUser = ctx.request.body
    console.log(loginUser)
    let username = loginUser.username
    let password = loginUser.password
    const User = mongoose.model('User')
    await User.findOne({
        username:username
    }).exec().then((result)=>{
        if(result){
            let newUser = new User()
            await newUser.comparePassword(password,result.password)
        .then(isMatch=>{
            ctx.body={
                code:200,message:isMatch
            }
        }).catch(error=>{
            console.log(error)
            ctx.body={code:500,message:error}
        })
        }else{
            ctx.body = {code:200,message:'用户不存在'}
        }
        console.log(result)
    }).catch(error=>{
        ctx.body={code:500,message:error}
    })

})
module.exports = router