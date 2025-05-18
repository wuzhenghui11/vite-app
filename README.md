# Vue 3 + Vite

This template should help get you started developing with Vue 3 in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

TypeScript
Vite 天然支持引入 .ts 文件。
请注意，Vite 仅执行 .ts 文件的转译工作，并不执行 任何类型检查。并假定类型检查已经被你的 IDE 或构建过程处理了。
Vite 之所以不把类型检查作为转换过程的一部分，是因为这两项工作在本质上是不同的。转译可以在每个文件的基础上进行，与 Vite 的按需编译模式完全吻合。相比之下，类型检查需要了解整个模块图。把类型检查塞进 Vite 的转换管道，将不可避免地损害 Vite 的速度优势。

EJS 模版引擎
服务端使用 会平凡的变更HTML语法

## 插件

vite-plugin-aliases
vite-plugin-html
vite-plugin-mock  安装 vite-plugin-mock 的依赖项 mockjs 会找src mock文件夹 找js

自定义mockPlugin 
...

## vite 于 ts 结合

vscode 没有类型声明就不会有提示
有时候需要安装@type/lodash

vite-plugin-checker

## 性能相关宏观角度不止是代码角度

- 开发时态构建性能优化
  - vite 是按需加载 不需要太care
- 首屏加载
  - 懒加载
  - http 协商缓存 强缓存
    - 协商缓存 是否缓存会和后端商量一下 打上协商缓存以后，客户端请求后端会发送一个协商请求给到服务，服务说需要变化，则会相应内容，如果没变化则会304缓存
    - 强缓存 服务端会给浏览器加一些字段（expires），失效截止时间 无论怎么刷新页面，都不会重新请求，而是从缓存取

- js逻辑方面
  - 清除定时器
  - 设计模式 设计原则 怎么去

- requestAnimationFrame 和 requestIdleCallback 对浏览器渲染原理要有一定的认识
  - 浏览器帧率 16.6毫秒一次
  - 减少重绘和重排 页面性能指标 浏览器每一帧怎么去渲染 每一帧的渲染细节

- 防抖节流
  - 尽量不要自己写用lodash 会有很多算法提高新能 如forEach

- 对作用域的控制 由近到远
  - 如变量的定义

```js
  const arr = [1, 2, 3]
  // 不从arr去找
  for (let i = 0, len = arr.length; i < len; i++) {

  }
```

- css 性能优化
  - 关注继承属性 尽量使用继承
  - 尽量避免太过于深的css嵌套

- 生产体积优化
  - 优化体积：压缩、treeshaking 图片资源压缩 cdn加速 分包策略 好处 传输包小浏览器解析越快

## 分包策略

就是将不会有变化的代码分包
编译选项等 compilerOptions lib: ['es2017', 'DOM']

多出口 多入口

## gzip压缩

体积越大传输速度越大
将所有的静态文件进行压缩，以达到减少文件的目的

服务端 -> 压缩
客户端接受 -> 解压缩
压缩js压缩后（插件 viet-plugin-compression） 放到后端 给到后端发现是 .gz 后 后端就别压缩直接用 直接读gzip文件 会设置相应头设置 content-encoding -> gzip 告诉浏览器 会赶紧解压 会得到原本js
解压也会占用一定的时间（由浏览器承担 如果体积较小就别压缩了吧）

## 动态导入

和按需加载 异曲同工
es6 新特性 一般用在路由里面
内容分发 -> dns
vite-plugin-cdn-import

vite可以配置
vite 用的的就是es6的动态导入 而webpack 在没有es规范的时候 自己现实的动态导入 实现原理自己再去看

## cdn加速

将第三方资源写成cdn的形式 自身体积小了 传输的东西少了
会找最近的服务器（cdn 可能有安全原因毕竟服务器是别人的）

## 跨域原理简单配置跨域

浏览器的策略 服务端不存在跨域
协议 域名 端口号 是否允许跨越
nginx 代理服务器 做同样的事情允许跨域 以及 配置 access-control-allow-origin 允许跨域是否配置跨域身份标识

## 浏览器缓存策略

静态资源 如果浏览器发现你的名字没有变 就不会重新请求
hash: 如果你的文件有一点变化hash就会有变化
业务代码会经常变化

文件名不一样就会重新请求

## yarn 高级不少没有缓存


## 如果包不是相对路径或者绝对路径会到 node_modules去找

## 其他

将静态资源放在assets 下面会走一些优化放在public 不会走优化
缓存文件夹等
