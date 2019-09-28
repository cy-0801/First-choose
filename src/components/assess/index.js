import React, { Component } from 'react'
import { Wrapper } from "./styled"
import { DETAIL_ASSESS } from "@api"
import Myscroll from "@common/bscroll"

class Assess extends Component {
    constructor() {
        super();
        this.state = {
            list: []
        }
    }
    render() {
        let { list } = this.state
        return (
            <Myscroll>
                <Wrapper>
                    <div className="pingjia">
                        <div className="num">商品评价({list.length})</div>
                        <ul className="list" style={{display: list.length ? "block" : 'none'}}>
                            {
                                list.map((item, index) => (
                                    <li key={index}>
                                        <div>
                                            <div className="tx"><img src={item.head} alt="" /></div>
                                            <div className="name">{item.nickname}</div>
                                        </div>
                                        <div>{item.content}</div>
                                        <div>{item.times}</div>
                                    </li>
                                ))
                            }
                        </ul>
                    </div>
                </Wrapper>
            </Myscroll>
        )
    }
    async componentDidMount() {
        let data = await DETAIL_ASSESS(this.props.location.search.slice(5))
        if(data.code === 200){
            this.setState({
            list: data.data
        })
        }
        
    }
}
export default Assess;
