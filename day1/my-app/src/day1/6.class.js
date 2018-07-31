import React,{Component} from "react";
import ReactDOM from "react-dom";
//类组件 this 状态(类组件用的比较多)
class Hello extends Component{
    constructor(props){//相当于写在构造函数上 只有需要添加私有属性时才需要些constructor,写了constructor必须写super,若需要组件的属性，则用形参props接收下
        super(props) //继承父类私有的属性 call继承
    }
    render(){ //返回组件的内容
        return (
            <div>
              <h1>{this.props.name}</h1>
              <h2>{this.props.age}</h2>
            </div>
        )
    }
}
ReactDOM.render(<Hello name="zf" age="8"/>,window.root);