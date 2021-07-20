/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2021-07-17 10:56:45
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-07-20 19:28:01
 */
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');

const http = require('http');
const server = http.createServer();
server.listen(5000);

var app = express();
 
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error');
// });

app.use((req, res, next) => {
  console.log(`7k7k7`)
  next()
})
app.use((req, res, next) => {
  console.log(`880004`)
  res.end('4399')
})
// const port = 8048
// app.listen(port, () => {
//   console.log(`Example app listening at http://localhost:${port}`)
// })

module.exports = app;
