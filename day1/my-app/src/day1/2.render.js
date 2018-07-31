/*import React from "react";
import ReactDOM from "react-dom";*/
//let ele1 = React.createElement("h1",{className:"red"},"hello")
//let ele2 = React.createElement("h1",{className:"red"},"hello",React.createElement("span",{id:"zf"},"world"));
//ReactDOM.render(ele,window.root);

//createElement()=>react元素（js对象）->render(渲染成真实的DOM元素)

function createElement(type,props,...children){
    if(children.length===1){
        return {type:type,props:{...props,children:children[0]}};
    }else{
        return {type: type, props: {...props,children:children}};
    }
}
//let ele1 = createElement("h1",{className:"red"},"hello");
let ele2 = createElement("h1",{className:"red"},"hello",createElement("span",{id:"zf"},"zf"));
console.log(ele2);
//{type:"h1",props:{className:"red",id:"a",children:"world"}} 一层结构ele1
//{type:"h1",props:{className:"red",children:["hello",{type:"span",props:{id:"zf",children:"world"}}]}};  二层结构 ele2
let render = (obj,container)=>{
        let {type,props} = obj;
        let ele = document.createElement(type);
        for(let key  in props) {
            if(key==="className"){//类名
                ele.setAttribute('class',props[key]);
            }else if(key==="children"){//设置标签的内容 <h1>hello<span>world</span></h1>
                if(typeof  props[key] ==="object"){//有多层
                    props[key].forEach(item=>{
                        if(typeof item==="object"){ //有子元素
                            render(item,ele); //递归调用
                        }else{
                            ele.innerHTML = item;
                        }
                    })
                }else{//只有一层
                    //ele.innerHTML = props[key];
                    ele.appendChild(document.createTextNode(props[key]));
                }
            }else{//其他的属性
                ele.setAttribute(key,props[key]);
            }
        }
        container.appendChild(ele);
};

render(ele2,document.getElementById("root"));