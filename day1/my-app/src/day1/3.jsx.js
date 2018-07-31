import React from "react";
import ReactDOM from "react-dom";
let obj = {name:"zf",age:8};
function build(obj){
    return (
        <div>
            <h1>{obj.name}</h1>
            <h2>{obj.age}</h2>
        </div>
    )
}
//let ele = <div><h1>hello</h1><h2>world</h2></div>;
let styleObj = {fontSize:'20px',color:"green"};
ReactDOM.render(<div style={styleObj} className="red">{build(obj)}</div>,window.root);
//ReactDOM.render(<div>{obj}</div>,window.root);//报错
//1.jsx = js+html <{来区分html还是js
//2.若有多个相邻的jsx元素，最外层必须有个包围的元素
//3.{}是JS表达式 变量，三元云算符，不可以放语句，纯对象，可以放数组，但数组里成员不可以是对象
//4.{}可以获取返回值的内容,不可放函数本身
//5.return 后若有个jsx元素，需要换行时，得拿（）包起来，表示一起返回
//6.行内样式得放在一个对象 style={styleObj}
//7.特殊属性（与关键词一样的属性 class->className for->forHtml） 普通属性（与html标签里设置属性一样） 属性遵循驼峰式命名法
