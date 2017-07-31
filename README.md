对Antd文档管理做了一下抽离简化Antd文档管理主题

# antd 的文档系统有什么优点
- 首先基于antd团队成员开发的博客服务 https://github.com/benjycui/bisheng
- 其次漂亮的界面 用来管理文档很合适
- 最主要的优点是。。他会把markdown里面的特定代码转换成页面包括react

使用方式

```
npm start
```

# 写文档方式

## 创建文档
- 在components文件目录下创建组件文件夹(注意不能带大写) helloworld

```
cd components
mkdir helloworld
```

- 创建文件index.zh-CN.md(这里的zh-CN表示中文文档， 如果换成en-US的话表示英文文档)

```
echo "" > index.zh-CN.md
```

- 写入内容
```
---
title: HelloWorld
subtitle: hello
---

Hello world
```
## 创建文档demo

- 在helloworld 文件里面创建文件夹demo并创建文件alert.md

```
mkdir demo
cd demo
echo "" > alert.md
```

- 向alert.md写入内容

<pre>
---
order: 0
title:
  zh-CN: helloWord
  en-US: helloWord
---

## zh-CN
这就是个helloWorld

## en-US

This is helloWorld

````jsx
let handleClick = () => {
  alert("hello world");
};

ReactDOM.render(
  <div>
    <button type="primary" onClick={handleClick}>Hello World</button>
  </div>
, mountNode);
````
</pre>

## 改完后需要重新启动

```
npm start
```

##  TODO
- 目前只是粗略的更改了一下
- 更多操作可以跟进https://github.com/ant-design/ant-design/tree/master/components 目录下的各种md文件
- 更多的操作探索
- 更具体的使用文档
- 能否进一步抽离
