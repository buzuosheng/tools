# 前端武器库

项目地址：[前端武器库](https://wuqiku-buzuosheng.now.sh/)

集合前端开发者常用的功能，如IP地址查询、正则表达式、字符串编码等。目前做了9个工具。

技术栈：`React hooks`+`React-Router`+`antd`+`Helmet`+`SEO`等

使用React hooks完成单页应用开发，使用antd为组件设置样式，使用React-Router为每个应用增加路由，使用Helmet为每个应用动态改变页面的文档头。

## crontab时间计算

cron是计划任务，是任务在约定的时间执行已经计划好的工作。cron表达式用于在指定时间执行任务，crontab用于计算之后每次任务的执行时间。

这个程序主要用到的库有`dayjs`和`cron-parser`。

[dayjs](https://www.npmjs.com/package/dayjs)是一个轻量级的处理事件和日期的JavaScript库。主要有时间格式的转换等功能，是前端开发过程中常用的一个库。

[cron-parser](https://www.npmjs.com/package/cron-parser)是一个用于解析crontab指令的Node.js库，包括对时区和DST的转换。

该程序通过对表达式的解析，得出任务在之后五次运行的时间。

## MD5编码

MD5编码主要使用了[md5](https://www.npmjs.com/package/md5)库。

传入字符串即可输出结果，MD5只有加密没有解密。

## 摩尔斯电码

摩尔斯电码使用了[morse](https://www.npmjs.com/package/morse)库。

## Base64编码

base64转码使用了[base64-js](https://www.npmjs.com/package/base64-js)库。

## 进制转换

## 时间戳转换

时间戳转换主要使用了[dayjs](https://www.npmjs.com/package/dayjs)库。

这个应用主要有获取当前时间、获取当前时间戳、时间和时间戳相互转换等功能。

## 二维码生成器

二维码生成器用到了[qrcode.react](https://www.npmjs.com/package/qrcode.react)库。

这个应用使用多个组件获取参数，将参数传递给QRCode组件，在网页中生成一个二维码。

- 暂未实现二维码下载功能

## 正则测试

在网页中添加多个常用的正则表达式。

- 后续添加正则表达式测试

## IP地址查询

使用axios对ip-api的接口进行访问，对返回的数据进行处理，然后将数据渲染到表中。

![个人微信公众号](https://img-blog.csdnimg.cn/20200407111014270.jpg?x-oss-process=image/watermark,type_ZmFuZ3poZW5naGVpdGk,shadow_10,text_aHR0cHM6Ly9ibG9nLmNzZG4ubmV0L3FxXzQxOTA3ODA2,size_16,color_FFFFFF,t_70#pic_center)