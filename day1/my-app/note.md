react学习
 - react基础
 - redux应用(手写redux源码再redux使用)
 - redux深入
 - middleware 中间件及其原理
 - react路由
 - react项目
 - react实战（团队合作react项目）
 - 美团张巍耀带来美团react项目
 
###react是什么
 - 用于构建用户界面的 JavaScript 库 
 - react专注于视图层，通过组件来构建界面应用
 
### 为什么要组件化开发
- 可组合 
- 可复用
- 可维护 

### jsx
- javascript+xml ,html也是属于xml  javascript+html
- 一种 JavaScript 的语法扩展。 我们推荐在 React 中使用 JSX 来描述用户界面。
- <{来区别是html还是js
- jsx中不允许使用关键词 class->className,for->forHtml
```
let str = "zhufeng"
let ele = <div>hello,{str}</div>; //react元素，jsx元素
ReactDOM.render(ele,document.getElementById("root"));
```

