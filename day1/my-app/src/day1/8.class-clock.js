import React,{Component} from "react";
import ReactDOM from "react-dom";
//类组件 有状态（可以更改视图的内容） state(在构造函数里constructor里初始化状态)
//只有视图内容需要改变时，才需要设置state
//第一步在constructor里初始化state值
//react里获取数据有两种方式 1.props(只能接受不能修改) 2.state(只有类组件里有)
class Clock extends Component{
    constructor(){
        super();
        this.state = {date:new Date().toLocaleString()}; //初始状态的值
        this.timer = null;
    }
    componentDidMount(){ //组件渲染完后触发
        //每隔一秒改变状态的值，这样相当于改变视图的效果
        //this.setState()更改状态值
        this.timer = window.setInterval(()=>{
            this.setState({date:new Date().toLocaleString()});
        },1000)
    }
    componentWillUnmount(){//组件销毁前触发   清除定时器或解除事件的绑定
        clearInterval(this.timer);
        this.timer = null;
    }
    destroy(){
        ReactDOM.unmountComponentAtNode(window.root);//销毁window.root根元素下的组件
    }
    render(){
        return (
            <div>
                <h1>现在的时间是：</h1>
                <h2 onClick={this.destroy}>{this.state.date}</h2>
            </div>
        )
    }
}
ReactDOM.render(<Clock/>,window.root);

