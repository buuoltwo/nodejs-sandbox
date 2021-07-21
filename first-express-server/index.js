/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2021-07-20 09:51:43
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-07-21 10:07:53
 */
var express = require('express');
var bp = require('body-parser');
const http = require('http')
const app = express()

// body-parser
// app.use(bp.json())
app.use(bp.urlencoded())
app.use((req,res,next)=>{
	console.log(req.body) 
	res.end()
})

//鉴权 -> 守卫
function auth(req,res,next) {
	console.log(req.query)
	if(req.query.username === 'buuoltwo') next()
	else res.end('runaway runaway --> -->')
}

app.use(auth)


// app.use((req,res,next) => {
// 	console.log(`got middleware no.2`)
// 	res.end(`express demo`)
// })

app.use((req,res,next) => {
	req.duang = 1
	console.log(`got middleware no.1`)
	next('someting went wrong ->>')
})

app.use((req,res,next) => {
	// console.log(`got middleware no.2`)
	console.log(req.duang)
	res.end(`express demo`)
})

//错误处理中间件
app.use((err, req, res, next)=>{
	res.end(err)
})

const server = http.createServer(app)
server.listen('8848')