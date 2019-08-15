   const mongoose = require('mongoose')
const db = 'mongodb://localhost/data-db'
const glob = require('glob')
const {resolve} = require('path')//相对路径转绝对路径
exports.initSchemas =()=>{
	glob.sync(resolve(__dirname,'./schema','**/*.js')).forEach(require)
}
exports.connect = ()=>{
	//连接数据库

	mongoose.connect(db)
	let maxConnectTimes = 0 //最大连接次数
	return new Promise((res,rej)=>{
		//增加数据库监听事件
	mongoose.connection.on('disconnected',(err) =>{
		console.log('数据库断开')
		if(maxConnectTimes<=3){
			maxConnectTimes++
		mongoose.connect(db)	
		}else{
			rej(err)
			throw new Error('数据库出现问题，程序无法搞定，请人为修理')
		}
		
	})

	mongoose.connection.on('error',(err) =>{
		console.log('数据库错误')
		if(maxConnectTimes<=3){
			maxConnectTimes++
			mongoose.connect(db)

		}else{
			rej(err)
			throw new Error('数据库错误，程序无法搞定，请人为修理')

		}

	})
//链接打开的时候
	mongoose.connection.once('open',() =>{
		console.log('MongoDB connected successfully')
		res()
	})        
	})
	
}