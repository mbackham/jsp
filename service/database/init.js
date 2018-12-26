const mongoose = require('mongoose')
const db = 'mongodb://localhost/data-db'
exports.connect = ()=>{
	//连接数据库

	mongoose.connect(db)
	let maxConnectTimes = 0
	return new Promise((res,rej)=>{
		//增加数据库监听事件
	mongoose.connection.on('disconnected',() =>{
		console.log('数据库断开')
		mongoose.connect(db)
	})

	mongoose.connection.on('error',() =>{
		console.log('数据库错误')
		mongoose.connect(db)
	})

	mongoose.connection.once('open',() =>{
		console.log('MongoDB connected successfully')
	})        
	})
	
}