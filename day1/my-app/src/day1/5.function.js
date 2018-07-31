//组件:
//组件和jsx元素的区别:组件名首字母大写
//分类：函数组件和类组件
//函数组件（普通函数，首字母大写） 没有this,没有状态 props属性来接收数据
//类组件 有this，有状态，有生命周期
import React from "react";
import {render} from "react-dom";
function Hello(props){  //必须写返回  通过形参props接收组件属性
   return (
       <div>
           <h1>{props.name}</h1>
           <h2>{props.age}</h2>
       </div>
   )
}
let school = {name:"zf",age:8};
render(
    <div>
        <Hello name="zhufeng" age="8"/>
        <Hello {...school}/>
    </div>
    ,window.root
);
