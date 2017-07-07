const path = require('path')
const express = require('express')
const ejs = require('ejs')

const app = express()

// 将请求响应解析到body的中间件
const bodyParser = require('body-parser')
// 解析 Content-Type:application/x-www-form-urlencoded 的请求到 req.body
// app.use(bodyParser.urlencoded({extended: false}))
// 解析 Content-Type:json 的请求到 req.body
app.use(bodyParser.json())

// 读写cookie的中间件
const cookieParser = require('cookie-parser')
app.use(cookieParser())

// 静态文件资源，做静态文件服务器，js、css、html资源等
const projPath = process.cwd()
// js,css资源
app.use('/webdemo/h5/dist', express.static(path.join(projPath, 'dist')))
// 图片资源
app.use('/webdemo/h5/res', express.static(path.join(projPath, 'res')))

// 设置html作为渲染器
app.engine('html', ejs.__express);
app.set('view engine', 'html')

app.get('/webdemo/h5/login.html', function (req, res, next) {
    res.render(path.join(projPath, 'login'))
})

app.get('/webdemo/h5/regist.html', function (req, res, next) {
    res.render(path.join(projPath, 'regist'))
})

// 单页应用页面
app.get('/webdemo/h5/index.html', function (req, res, next) {
    res.render(path.join(projPath, 'index'))
})

app.get('/', function (req, res, next) {
    res.redirect('/webdemo/h5/index.html')
})

app.get('/webdemo/h5/demo1.html', function (req, res, next) {
    res.render(path.join(projPath, 'templates/demo1'));
})

app.get('/webdemo/h5/demo2.html', function (req, res, next) {
    res.render(path.join(projPath, 'templates/demo2'));
})

app.get('/webdemo/h5/demo3.html', function (req, res, next) {
    res.render(path.join(projPath, 'templates/demo3'));
})

app.get('/webdemo/h5/demo4.html', function (req, res, next) {
    res.render(path.join(projPath, 'templates/demo4'));
})

app.get('/webdemo/h5/demo5.html', function (req, res, next) {
    res.render(path.join(projPath, 'templates/demo5'));
})

// 修改侦听服务器端口
const port = 1314
app.listen(port)
console.info(`Listen on Port ${port}`)