import React, { Component } from 'react'
import {Wrapper} from "./styled"

class SearchOne extends Component {
    constructor(){
        super();
        this.state = {
            flag:false,
        }
    }
    render() {
        let {flag} = this.state;
        return (
            <Wrapper>
                <div className="search">
                    <div className="back"></div>
                    <div className="search1">
                        <div></div>
                        <input type="text"/>
                    </div>
                    <div className="select">筛选</div>
                </div>
                <div className="sort">
                    <div className="sort0">
                        综合 <span></span>
                        <div className="yincang" style={{display: flag ? "block" : "none"}}>
                            <ul>
                                <li>综合</li>
                                <li>价格从低到高</li>
                                <li>价格从高到底</li>
                            </ul>
                        </div>
                    </div>
                    <div className="sort1">销量</div>
                </div>
                <ul className="goods">
                    <li>
                        <div className="left">
                            <img src="//vueshop.glbuys.com/uploadfiles/1524561138.jpg" alt=""/>
                        </div>
                        <div className="right">
                            <div className="title">酷睿i5四核GTX1060独显台式机组装电脑主机整机 绝地求生吃鸡游戏</div>
                            <div className="price">￥4599.00</div>
                            <div className="num">销量<span>0</span>件</div>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <img src="//vueshop.glbuys.com/uploadfiles/1524561138.jpg" alt=""/>
                        </div>
                        <div className="right">
                            <div className="title">酷睿i5四核GTX1060独显台式机组装电脑主机整机 绝地求生吃鸡游戏</div>
                            <div className="price">￥4599.00</div>
                            <div className="num">销量<span>0</span>件</div>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <img src="//vueshop.glbuys.com/uploadfiles/1524561138.jpg" alt=""/>
                        </div>
                        <div className="right">
                            <div className="title">酷睿i5四核GTX1060独显台式机组装电脑主机整机 绝地求生吃鸡游戏</div>
                            <div className="price">￥4599.00</div>
                            <div className="num">销量<span>0</span>件</div>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <img src="//vueshop.glbuys.com/uploadfiles/1524561138.jpg" alt=""/>
                        </div>
                        <div className="right">
                            <div className="title">酷睿i5四核GTX1060独显台式机组装电脑主机整机 绝地求生吃鸡游戏</div>
                            <div className="price">￥4599.00</div>
                            <div className="num">销量<span>0</span>件</div>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <img src="//vueshop.glbuys.com/uploadfiles/1524561138.jpg" alt=""/>
                        </div>
                        <div className="right">
                            <div className="title">酷睿i5四核GTX1060独显台式机组装电脑主机整机 绝地求生吃鸡游戏</div>
                            <div className="price">￥4599.00</div>
                            <div className="num">销量<span>0</span>件</div>
                        </div>
                    </li>
                    <li>
                        <div className="left">
                            <img src="//vueshop.glbuys.com/uploadfiles/1524561138.jpg" alt=""/>
                        </div>
                        <div className="right">
                            <div className="title">酷睿i5四核GTX1060独显台式机组装电脑主机整机 绝地求生吃鸡游戏</div>
                            <div className="price">￥4599.00</div>
                            <div className="num">销量<span>0</span>件</div>
                        </div>
                    </li>
                </ul>
                <div className="mask0" style={{display : flag ?'block':"none"}}></div>
                <div className="mask">
                    <div className="right">
                        <div className="one">
                            <div className="title">
                                <div>分类</div>
                                <div className="right0">
                                    <div>潮流女装</div>
                                    <div>↑</div>
                                </div>
                            </div>
                            <ul>
                                <li>潮流女装</li>
                                <li>品牌男装</li>
                                <li>电脑办公</li>
                                <li>图书</li>
                                <li>潮流女装</li>
                                <li>品牌男装</li>
                                <li>电脑办公</li>
                                <li>图书</li>
                                <li>潮流女装</li>
                                <li>品牌男装</li>
                                <li>电脑办公</li>
                                <li>图书</li>
                                <li>潮流女装</li>
                                <li>品牌男装</li>
                                <li>电脑办公</li>
                                <li>图书</li>
                            </ul>
                        </div>
                        <div className="one">
                            <div className="title">
                                <div>价格区间</div>
                                <div className="right0">
                                    <div>
                                        <div>最低价</div>
                                        ---
                                        <div>最高价</div>
                                    </div>
                                    <div>↑</div>
                                </div>
                            </div>
                            <ul>
                                <li>0-50</li>
                                <li>50-99</li>
                                <li>100-300</li>
                                <li>301-1000</li>
                                <li>1001-4000</li>
                                <li>1004-9999</li>
                            </ul>
                        </div>
                        <div className="one">
                            <div className="title">
                                <div>价格区间</div>
                                <div className="right0">
                                    <div>
                                        <div>最低价</div>
                                        ---
                                        <div>最高价</div>
                                    </div>
                                    <div>↑</div>
                                </div>
                            </div>
                            <ul>
                                <li>0-50</li>
                                <li>50-99</li>
                                <li>100-300</li>
                                <li>301-1000</li>
                                <li>1001-4000</li>
                                <li>1004-9999</li>
                            </ul>
                        </div>
                        <div className="one">
                            <div className="title">
                                <div>价格区间</div>
                                <div className="right0">
                                    <div>
                                        <div>最低价</div>
                                        ---
                                        <div>最高价</div>
                                    </div>
                                    <div>↑</div>
                                </div>
                            </div>
                            <ul>
                                <li>0-50</li>
                                <li>50-99</li>
                                <li>100-300</li>
                                <li>301-1000</li>
                                <li>1001-4000</li>
                                <li>1004-9999</li>
                            </ul>
                        </div>                        
                        <div className="btns">
                            <div>共<span>18</span>件</div>
                            <div>全部重选</div>
                            <div>确定</div>
                        </div>    
                    </div>
                </div>
            </Wrapper>
        )
    }
}
export default SearchOne