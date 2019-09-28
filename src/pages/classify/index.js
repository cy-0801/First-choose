import React, { Component } from 'react'
import { Wrapper } from "./styled"
import { CLASSIFY_HOTSEATCH } from "@api"

class Classify extends Component {
    constructor() {
        super()
        this.state = {
            HotSearch:[]
        }
        this.handlerBack = this.handlerBack.bind(this)
    }
    render() {
        let { HotSearch } = this.state
        return (
            <Wrapper>
                <div className="header">
                    <div className="close" onClick={this.handlerBack}></div>
                    <div className="search">
                        <input type="text" placeholder="请输入宝贝名称" />
                        <div></div>
                    </div>
                </div>
                <div className="hotSearch">
                    <div className="title">
                        <div>最近搜索</div>
                        <div></div>
                    </div>
                    <ul>
                        <li>电脑</li>
                        <li>连衣裙</li>
                        <li>海油衣舍</li>
                        <li>裤</li>
                        <li>海油衣舍</li>
                    </ul>
                </div>
                <div className="hotSearch">
                    <div className="title">
                        <div>热门搜索</div>
                    </div>
                    <ul>
                        <li>电脑</li>
                        {
                            HotSearch.map((item, index) => {
                                return <li key={index}>{item.title}</li>
                            })
                        }
                    </ul>
                </div>
            </Wrapper>
        )
    }
    async componentDidMount() {
        let data = await CLASSIFY_HOTSEATCH()
        this.setState({
            HotSearch:data.data
        })
    }
    handlerBack() {
        this.props.history.go(-1)
    }
}


export default Classify;