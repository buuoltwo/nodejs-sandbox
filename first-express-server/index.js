/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2021-07-20 09:51:43
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-07-20 10:39:04
 */
var express = require('express');
const http = require('http')
const app = express()

// app.use((req,res,next) => {
// 	console.log(`got middleware no.2`)
// 	res.end(`express demo`)
// })

app.use((req,res,next) => {
	req.duang = 1
	console.log(`got middleware no.1`)
	next()
})

app.use((req,res,next) => {
	// console.log(`got middleware no.2`)
	console.log(req.duang)
	// res.end(`express demo`)
})

const server = http.createServer(app)
server.listen('8888')