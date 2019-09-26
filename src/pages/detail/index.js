import React,{Component} from "react"
import {Wrapper} from "./styled"

class Detail extends Component{
    render(){
        return (
            <Wrapper>
                <div className="header">
                    <div>回退</div>
                    <div>商品</div>
                    <div>详情</div>
                    <div>评价</div>
                    <div>cart</div>
                </div>
                {/* {this.props.children} */}
                {/* <Detail0/> */}
            </Wrapper>
        )
    }
}

export default Detail;