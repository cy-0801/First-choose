import React, { Component } from 'react'
import { Wrapper } from "./styled"
import { DETAIL_INFO, DETAIL_ASSESS, COLORANDSIZE } from "@api"
// import {PUSH_LIST_ACTION} from "@actions/actionCreator"
// import {connect} from "react-redux"
import store from "@store"
class Goods extends Component {
    constructor() {
        super()
        this.state = {
            obj: {},
            assessInfo: [],
            assessSize: [],
            flag: true,
            flag1: false,
            value: 1,
        }

    }
    render() {
        let { obj, assessInfo, flag, flag1, assessSize } = this.state
        return (

            <Wrapper>
                <div className="lunbo">
                    <img src={obj.images ? obj.images[0] : ''} alt="" />
                </div>
                <div className="info">
                    <div className="title">
                        {obj.title}
                    </div>
                    <div className="price">￥{obj.price}</div>
                    <div className="express">
                        <div>快递费:￥{obj.freight}元</div>
                        <div>月销量{obj.sales}件</div>
                    </div>
                </div>
                <div className="pingjia" style={{ display: flag ? "block" : 'none' }}>
                    <div className="num">商品评价({assessInfo.length})</div>
                    <ul className="list">
                        {
                            assessInfo.map((item, index) => {
                                return <li key={index}>
                                    <div>
                                        <div className="tx"><img src={item.head} alt="" /></div>
                                        <div className="name">{item.nickname}</div>
                                    </div>
                                    <div>{item.content}</div>
                                    <div>{item.times}</div>
                                </li>
                            })
                        }
                    </ul>
                </div>
                <div className="pingjia" style={{ display: flag ? "none" : 'block' }}>
                    <h2>没有相关评论</h2>
                </div>
                <div className="btns">
                    <div className="left" >收藏</div>
                    <div className="right" onClick={this.handlerClick.bind(this)}>加入购物车</div>
                </div>
                <div className="mask" style={{ display: flag1 ? "block" : "none" }} onClick={this.handlerchuxian.bind(this)}></div>
                <div className={flag1 ? "menuUp" : 'menu'}>
                    <div className="menu_top">
                        <div className="img"><img src="//vueshop.glbuys.com/uploadfiles/1524556409.jpg" alt="" /></div>
                        <div className="menu_top_right">
                            <p>{obj.title}</p>
                            <div>
                                <div>￥{obj.price}</div>
                                <div>商品编码:{obj.gid}</div>
                            </div>
                            <div className="closediv">
                                <div className="close" onClick={this.handlerClose.bind(this)}></div>
                                <div className="line"></div>
                                <div className="slot"></div>
                            </div>
                        </div>
                    </div>
                    <div className="menu_center">
                        {
                            assessSize.map((item2, index2) => (
                                <div className="color" key={index2}>
                                    <div>{item2.title}</div>
                                    <ul>
                                        {
                                            item2.values.map((item3, index3) => (
                                                <li key={index3} style={{ background: item3.checked ? '#FDA208' : '' }}
                                                    onClick={this.handlerSelect.bind(this, index2, index3)}
                                                >{item3.value}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className="menu_bottom">
                        <div>购买数量</div>
                        <div className="count">
                            <div onClick={this.handlerReducer.bind(this)}>-</div>
                            <input type="text" value={this.state.value} onChange={this.handlerChange.bind(this)} />
                            <div onClick={this.handlerAdd.bind(this)}>+</div>
                        </div>
                    </div>
                    <div className="btn" onClick={this.handlerSubmit.bind(this)}>确定</div>
                </div>
                <div className="kong"></div>
            </Wrapper>

        )
    }
    async componentDidMount() {
        let data = await DETAIL_INFO(this.props.location.search.slice(5));
        this.setState({
            obj: data.data
        })
        let assessInfo = await DETAIL_ASSESS(this.props.location.search.slice(5))
        if (assessInfo.code === 200) {
            this.setState({
                assessInfo: assessInfo.data,
                flag: true
            })
        } else {
            this.setState({
                flag: false
            })
        }
        let sizeAndcolor = await COLORANDSIZE(this.props.location.search.slice(5))
        for (var i = 0; i < sizeAndcolor.data.length; i++) {
            for (var j = 0; j < sizeAndcolor.data[i].values.length; j++) {
                sizeAndcolor.data[i].values[j].checked = false;
            }
        }
        this.setState({
            assessSize: sizeAndcolor.data
        })
    }
    handlerClick() {
        this.setState({
            flag1: true
        })
    }
    handlerchuxian() {
        this.setState({
            flag1: false
        })
    }
    handlerClose() {
        this.setState({
            flag1: false
        })
    }
    handlerSelect(index1, index2) {
        let assessSize = this.state.assessSize;
        for (var i = 0; i < assessSize.length; i++) {
            for (var j = 0; j < assessSize[index1].values.length; j++) {
                assessSize[index1].values[j].checked = false;
            }
            assessSize[index1].values[index2].checked = true;
        }
        this.setState({
            assessSize: assessSize
        })
    }
    handlerChange(e) {
        this.setState({
            value: e.target.value
        })
    }
    handlerReducer() {
        if (this.state.value > 1) {
            let value = this.state.value
            value = --value
            this.setState({
                value: value
            })
        }
    }
    handlerAdd() {
        let value = this.state.value;
        value = ++value
        this.setState({
            value: value
        })
    }
    handlerSubmit(){
        // this.handlerClose();
        let size= {}
        for(var i=0;i<this.state.assessSize.length;i++){
            for(var j=0;j<this.state.assessSize[i].values.length;j++){
                if(this.state.assessSize[i].values[j].checked){
                    if(i === 0 ){
                        size.color = this.state.assessSize[i].values[j].value;
                    }else{
                        size.size = this.state.assessSize[i].values[j].value;
                    }
                }
            }
        }
        let obj = {
            title:this.state.obj.title,
            price:this.state.obj.price,
            image:this.state.obj.images[0],
            gid:this.state.obj.gid,
            num:this.state.value,
            info:size
        }
        // console.log(obj)
        store.dispatch({
            type:"aaa",
            payload:obj
        })
    }
}

export default Goods