import React, { Component } from 'react'
import { Wrapper } from "./styled"

class Classify extends Component {
    render() {
        return (
            <Wrapper>
                <div className="header">
                    <div className="close">

                    </div>
                    <div className="search">
                        <input type="text" placeholder="请输入宝贝名称" />
                        <div></div>
                    </div>
                </div>
                <div className="hotSearch">
                    <div className="title">
                        <div>最近搜索</div>
                        <div>icon</div>
                    </div>
                    <ul>
                        <li>电脑</li>
                        <li>连衣裙</li>
                        <li>海油衣舍</li>
                        <li>裤</li>
                        <li>海油衣舍</li>
                        <li>裤</li>
                    </ul>
                </div>
                <div className="hotSearch">
                    <div className="title">
                        <div>最近搜索</div>
                        
                    </div>
                    <ul>
                        <li>电脑</li>
                        <li>连衣裙</li>
                        <li>海油衣舍</li>
                        <li>裤</li>
                        <li>海油衣舍</li>
                        <li>裤</li>
                        <li>裤</li>
                        <li>海油衣舍</li>
                        <li>裤</li>
                        <li>裤</li>
                        <li>海油衣舍</li>
                        <li>裤</li>
                        <li>裤</li>
                    </ul>
                </div>    
            </Wrapper>
        )
    }
}


export default Classify