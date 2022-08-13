/*
 * @Author: amixu
 * @Date: 2022-06-29 16:05:44
 * @LastEditors: amixu
 * @LastEditTime: 2022-08-13 23:20:45
 * @Description: 入口文件
 */

// library
const express = require('express');

const app = express();

// 单页面配置，但只允许一个vue单页面
const history = require('connect-history-api-fallback');

app.use(history());
app.use(express.static(`${__dirname}/dist`));

// 启动node服务
const port = process.env.PORT || 3000;
app.listen(port, process.env.IP);

console.log(`listening on port ${port}`);

module.exports = app;
