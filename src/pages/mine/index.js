import React, { Component } from 'react'
import {Wrapper} from "./styled"
import Header from "@common/header"

export default class Mine extends Component {
    render() {
        return (
            <Wrapper>
                <Header />
                <div className="name">
                    <div className="kong"></div>
                    <div className="headImage">
                        <div className="tx">
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAJYAAACWCAIAAACzY+a1AAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMTM4IDc5LjE1OTgyNCwgMjAxNi8wOS8xNC0wMTowOTowMSAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDpiMzVmOWY2MS1mNTNkLTJhNDItOGFiYy1iZGFhNTUwODU1YzAiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RUQ0OUY4RjBCRUNEMTFFNkIxRjFFMTc5OURBMzYzOUUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RUQ0OUY4RUZCRUNEMTFFNkIxRjFFMTc5OURBMzYzOUUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo5OWI2ODI4Ny1mNWFjLTQ3NzctOWZmZS1jZjMzZmRjMjY1NzgiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDo3ZmZjOWRkNS01OGIwLTExNzktYjg2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" alt=""/>
                        </div>
                        <div className="right">
                            <div>昵称:</div>
                            <div>我的积分:0分</div>
                        </div>
                    </div>
                </div>                      
                <div className="order">
                    <div>全部订单</div>
                    <div>查看全部订单></div>
                </div>
                <div className="threeIcon">
                    <div className="icon">
                        <div></div>
                        <div>待支付</div>
                    </div>
                    <div className="icon0">
                        <div></div>
                        <div>待收货</div>
                    </div>
                    <div className="icon1">
                        <div></div>
                        <div>待评价</div>
                    </div>
                </div>
                <div className="myList">
                    <div className="demo">
                        <div>个人资料</div>
                        <div>></div>
                    </div>
                    <div className="demo">
                        <div>地址管理</div>
                        <div>></div>
                    </div>
                    <div className="demo">
                        <div>绑定手机</div>
                        <div>></div>
                    </div>
                    <div className="demo">
                        <div>修改密码</div>
                        <div>></div>
                    </div>
                    <div className="demo">
                        <div>我的收藏</div>
                        <div>></div>
                    </div>
                </div>
                <div className="sign">
                    <div>登录/注册</div>
                </div>
            </Wrapper>
        )
    }
}






