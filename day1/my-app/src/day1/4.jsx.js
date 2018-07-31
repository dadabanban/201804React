import React from "react";
import {render} from "react-dom";

let lessons = [
    {name: "vue", price: 2000},
    {name: "react", price: 3000}
];

function toLesson(item) {
    return `当前课程名称是${item.name};当前课程价格是${item.price}`;
}

//map,filter,find,reduce
let ele = <ul>
    {/*{}取返回值*/}
    {lessons.map((item, index) => (
        item.price < 3000 ? null : <li key={index}>{toLesson(item)}</li>
    ))}
</ul>;

render(ele, window.root);
//ul中li标签个数是由lessons数组的个数来决定并且li标签内容是name属性值
