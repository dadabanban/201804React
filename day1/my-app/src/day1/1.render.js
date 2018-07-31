import React from "react";
import ReactDOM from "react-dom";
//react由react（react核心包） 和react-dom（用来操作DOM相关，例如渲染DOM）组成
//jsx是一种语法糖,通过babel转换成 React.createElement()创建
//let ele = <h1 className="red">hello<span id='zf'>world</span></h1>; //react元素，jsx元素
let ele = React.createElement("h1",{className:"red"},"hello",React.createElement("span",{id:"zf"},"world"));//js对象  虚拟DOM
console.log(ele);
//{type:"h1",props:{className:"red",children:"hello"}} 一层结构
//{type:"h1",props:{className:"red"},children:["hello",{type:"span",props:{id:"zf"},children:"world"}]} //两层结构
ReactDOM.render(ele,document.getElementById("root"));
//1.jsx元素->babel转换成通过React.createElement调用
//2.createElement创建虚拟DOM(js对象)->render转换成真实的DOM
