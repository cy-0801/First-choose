import React, { Component } from 'react'
import {Wrapper} from "./styled"
import BScroll from "better-scroll"

class Bscroll extends Component {
    render() {
        return (
            <Wrapper ref="wrapper">
                {this.props.children}
            </Wrapper>
        )
    }
    componentDidMount(){
        this.scroll = new BScroll(this.refs.wrapper,{
            scrollY: true,
            click: true,
            tap:true,
            pullUpLoad:true,
            pullDownRefresh:true
        })
    }
    handlepullingUp(callback){
        this.scroll.on("pullingUp",callback)
    }
    handlefinishPullUp(){
        this.scroll.finishPullUp();
        this.scroll.refresh();
    }
    handlepullingDown(callback){
        this.scroll.on("pullingDown",callback)
    }
    handlefinishPullDown(){
        this.scroll.finishPullDown();
        this.scroll.refresh()
    }
}

export default Bscroll