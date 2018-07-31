import React from "react";
import ReactDOM from "react-dom";
//时钟效果，每隔1s获取一次时间
//React元素不可变,你是无法改变其内容或属性的.唯一的办法想要更改内容或属性就是重新创建React元素
function Clock(){
    return (
        <div>
        <h1>现在时间是：</h1>
        <h2>{new Date().toLocaleString()}</h2>
        </div>
    )
}
setInterval(()=>{
    ReactDOM.render(<Clock/>,window.root);
},1000);

//react优化 DOM-diff计算 但是只更改变化的部分，不变的部分不更改
