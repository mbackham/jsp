const Koa = require ('koa')
const app = new Koa()
const mongoose =require('mongoose')
const { connect,initSchemas } = require('./database/init.js')
const bodyParser = require('koa-bodyparser')
const Router = require('koa-router')
const cors = require('koa2-cors')
app.use(bodyParser())

app.use(cors())

let user = require("./appApi/user.js")
//装在所有模块
let router = new Router()
router.use('/user',user.routes())
//加载路由中间件
app.use(router.routes())
app.use(router.allowedMethods())

;(async()=>{
	await connect()
	initSchemas()

		
	
	})()
// //立即执行函数
app.use(async(ctx)=>{
	ctx.body = '<h1>hello koa2</h1>'
})
app.listen(3000,()=>{
	console.log('[Server] starting at port 3000')
})