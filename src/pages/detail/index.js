import React,{Component} from "react"
import {Wrapper} from "./styled"
import {NavLink} from "react-router-dom"

class Detail extends Component{
    constructor(props){
        super(props);
        this.state = {
            flag:false,
            goods:"/detail/goods?"+this.props.location.search.slice(1),
            detail0:"/detail/detail0?"+this.props.location.search.slice(1),
            assess:"/detail/assess?"+this.props.location.search.slice(1)
        }
        this.handlerBack = this.handlerBack.bind(this)
        this.handlerToShoppingcar = this.handlerToShoppingcar.bind(this)
    }
    render(){
        let {goods,detail0,assess} = this.state
        return (
            <Wrapper>
                <div className="header">
                    <div onClick={this.handlerBack}></div>
                    <NavLink to={goods}>商品</NavLink>
                    <NavLink to={detail0}>详情</NavLink>
                    <NavLink to={assess}>评价</NavLink>
                    <div onClick={this.handlerToShoppingcar}><span style={{display:this.state.flag?"block":"none"}}></span></div>
                </div>
            </Wrapper>
        )
    }
    handlerBack(){
        this.props.history.push('/home')
    }
    handlerToShoppingcar(){
        this.props.history.push("/shoppingcar")
    }
}

export default Detail;