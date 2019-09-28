import React, { Component } from 'react'
import { Wrapper } from "./styled"
import { SEARCH_LEFT } from "@api"
import Bscroll from "@common/bscroll"

class Search extends Component {
    constructor() {
        super()
        this.state = {
            list0: [],
        }
        this.handlerBack = this.handlerBack.bind(this)
        this.handlerJumpClassify = this.handlerJumpClassify.bind(this)
    }
    render() {
        let { list0 } = this.state
        return (
            <Wrapper>
                <div className="header">
                    <div onClick={this.handlerBack}></div>
                    <div onClick={this.handlerJumpClassify}>请输入宝贝名称</div>
                </div>
                <Bscroll>
                    <div className="left">
                        <ul>
                            {
                                list0.map((item) => {
                                    return <li key={item.cid}>{item.title}</li>
                                })
                            }
                        </ul>
                    </div>
                </Bscroll>
            </Wrapper>
        )
    }
    async componentDidMount() {
        let data = await SEARCH_LEFT();
        if (data.code === 200) {
            this.setState({
                list0: data.data
            })
        }
    }
    handlerBack() {
        this.props.history.go(-1)
    }
    handlerJumpClassify() {
        this.props.history.push('/classify')
    }
}

export default Search;

