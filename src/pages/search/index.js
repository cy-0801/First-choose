import React, { Component } from 'react'
import { Wrapper } from "./styled"

class Search extends Component {
    render() {
        return (
            <Wrapper>
                <div className="header">
                    <div></div>
                    <div>请输入宝贝名称</div>
                </div>
                <div className="left">
                    <ul>
                        <li>潮流女装</li>
                        <li>品牌男装</li>
                        <li>电脑办公</li>
                        <li>图书</li>
                        <li>啊啊啊</li>
                        <li>ccc</li>
                        <li>潮流女装</li>
                        <li>品牌男装</li>
                        <li>电脑办公</li>
                        <li>图书</li>
                        <li>啊啊啊</li>
                        <li>ccc</li>
                        <li>潮流女装</li>
                        <li>品牌男装</li>
                        <li>电脑办公</li>
                        <li>图书</li>
                        <li>啊啊啊</li>
                        <li>ccc</li>
                    </ul>
                </div>
                {this.props.children}
            </Wrapper>
        )
    }
}

export default Search;

