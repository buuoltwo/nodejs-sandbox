/*
 * @Descripttion : 
 * @Author       : zhangming
 * @Date         : 2021-07-17 10:56:45
 * @LastEditors  : zhangming
 * @LastEditTime : 2021-07-17 11:28:47
 */
var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: `buuoltwo's Express server` });
});

module.exports = router;
