import React, { Component } from 'react'
import { Wrapper } from "./styled"
import { HOME_SWIPER, HOME_NAV, HOME_GOODSLEVEL, HOME_FORYOU } from "@api"
import { Link } from "react-router-dom"
import Swiper from "swiper"
export default class AAA extends Component {
    constructor() {
        super();
        this.state = {
            swiperList: [],
            navList: [],
            goodsLevel: [],
            foryou: [],

        }
        this.handlerjumpToSearch = this.handlerjumpToSearch.bind(this)
        this.handleJumpToClassify = this.handleJumpToClassify.bind(this)
    }
    render() {
        let { navList, goodsLevel, foryou } = this.state;
        return (
            <Wrapper>
                <div className="header">
                    <div className="left" onClick={this.handlerjumpToSearch}></div>
                    <div className="center">
                        <div></div>
                        <div onClick={this.handleJumpToClassify}>请输入喜欢的宝贝名称</div>
                    </div>
                    <div><Link to="/login">登录</Link></div>
                </div>
                <div className="lunbo">
                    <div className="swiper-container" ref="swiper">
                        <div className="swiper-wrapper">
                            <div className="swiper-slide"><img src="//vueshop.glbuys.com/uploadfiles/1484285334.jpg" alt="" /></div>
                            <div className="swiper-slide"><img src="//vueshop.glbuys.com/uploadfiles/1484285302.jpg" alt="" /></div>
                            <div className="swiper-slide"><img src="//vueshop.glbuys.com/uploadfiles/1524206455.jpg" alt="" /></div>
                        </div>
                        <div className="swiper-pagination" ref="pagination"></div>
                    </div>
                </div>
                <div className="feilei">
                    <ul>
                        <li>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFAAAABQCAYAAACOEfKtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA4ZpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD0ieG1wLmRpZDo0MDc3ODhlOS04ZTI2LTQxMmEtYTU0Zi04NGExMzQwMDk4MDMiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDg0RjAyQUYyREVBMTFFNkE3QUJCNDUwMDREOTQ1OUMiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDg0RjAyQUUyREVBMTFFNkE3QUJCNDUwMDREOTQ1OUMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDowMjZiOWEyYS1mMjcwLTQwNTctOTQ4NC05NGE1MTcwMDM5NTkiIHN0UmVmOmRvY3VtZW50SUQ9ImFkb2JlOmRvY2lkOnBob3Rvc2hvcDpjOGZjMTQ0Ni02ODVhLTExNzktYmFjNC1iNDM4ZmU5OWI3NzciLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz47sOP6AAAFa0lEQVR42uydX0hkVRzHf3dm1HJcF2wlNSQhsCKEFiaEXZBwwXkwelv2LaStaMmX0Ld6FSKMJRB2a0s2evQllvVBwViCgkDYYGApH1rLUGG26M/O+ifH6fvr/kbv6NyZe8+cce7cOV/4cq+M93juZ87f3z33aFENlbsTfRqHBDwA98N9cDfcCceP/HoGTsMb8Cq8AqfgZevl7C+1ugfrhIGdxuEVOAlfgHs0Jb0OL8EL8G0A/Ss0AAGtCYdX4TF4BG6u8p/chRfhm/AtwPy3LgEC3BM4vA2Pw101qmGb8Ax8HSB/rwuAUk3fhSeLtGO1Eref0/BV3dXb0ggugsNleEo6gSCKO6H34M8Bcj8wAAHvORw+g89Tfehb+A1A/LGmAAGOr78CfwQ/RvWlbXgCvgaQuRMHCHhtOMzCF6m+NQe/DogPTwwg4PXiMC8D4DCIB+SjgLhWdYCANyAD1m4Kl3iGkwTEVNUAAt5ZGaSeoXDqAQ/2AfGudoBS8r4OMTwnxGGvJdHyCI/bvO9DWG1LVedBL21ixGNvO99A8EjudV7uXR2gjPNmQ9Tb+hHf86wwUC6BV0IwzqtEF4WB/zZQpmd363CGUY0Zy1m3aZ9VIjDwje+5bayDqBezoxYNzeXaNFHmnn3+FArBqZcqT3MHfcMaZp17f6jMnYeKBSBiLhdcVgoMPP8lUUdS02Diq0OAbQmiJ1/Tk27bi5h3jPq96rwwuVG2DZR43pRS5toHg18h1fM4JWzKdiIcDFWM51nBB6iex05h4w5QwvCTZOSmSWHkWgL5GUbccHJVXBgdByhPz8YNo7IaF1bHSiA/euwyfMqqS1gdAzgWrLbe8fg4txM0iGMFAKV7HglUFiOth+fZraABHMkPafIlkJdbNJva6VnNwuwAYNIw8a2kE+AFw8O3/mcWkSVmPYaHb/UwOy6BCcNCWQkGOGA4KGuAAfYHMmsRRxx3fyuoAPsZYF/wAe4GFWAfA+w2NVFZ3Qyw03BQVieH9PWFrzIpougpnhwS7ZVYCJrLYnr2T4nPUWUf3Tv8+eEPRJtfOKr0tm037WfgPZfPtnUCjFsYy+RMQaqgqTYIKlNMa2otvUSWfCfRdpxb7t9brN09HauJaPs+0dbP9s+tz9o++LwFSTzufn20tTAcVtA87BCtf6IVYEZbO5hAWxU7rSdn998n+vUD+7xjlOiZD/Wky22zPoAZLi7pQNaNgoDqXlBrcJoBbpiWTFkbDHDVcFDWKgNcMRyUtcIAU4aDslIMcNlwUNZyRF5WXjcsfGud2eVnIkvBG+I7lidn/w4iwCXnVG4hePmLOsaB+0EEuOAEeJvsN72NvGlXmNkA5SXkRcPFsxbzL247ozE3DRfPOmDlBHiL7D0GjEprU1gVApTdLWYMn7Kace4EcjSgep3s8JZRcWWEERUFKFuDTCsnr/P5rTOumP1TX7qV5XH66PYpxUL6V0k1Rvjbxxq/7Cqt+FfPY1rYlM9l7k70TRw+VfozHHpv1rBSeBdt9aOf7POmM0TxF/Sm6V9vofTd8ApQ7VWv8Mr1VS/zsmF5lXzZ0PWxplwwYQofTZTaoKfcc+FrZO+r0qiaEwbqXZ289v4dNd46Qo7Unyu3IY/ZdKK49G06Ie0hJ8Sr0h80ADy+x6TXXYw8r42RfVRGQg4xv/GO5wdtvhYXyY4+wxTOh/F8T8N+di3yDdBREgcpXI9DU9Lm+b4npeVt0j6cC8kQZ0562zWVi5XXB0r3fgl+R0br9TjD4LxfUt07UFvIo5G3ANWyQlUyMsQRCwrqcjlbacnjkA542krgkdJotkHWBNJsxK0JpNkKXnP1Nv+MQCPQuv93GP8JMACzeqsv7FoIaQAAAABJRU5ErkJggg==" alt="" />
                            <span>分类</span>
                        </li>
                        {
                            navList.map((item) => (
                                <li key={item.cid}>
                                    <img src={item.image} alt="" />
                                    <span>{item.title}</span>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                <div className="show">
                    {
                        goodsLevel.map((item, index) => {
                            if (index === 0 || index === 2) {
                                return (
                                    <div className="first" key={index}>
                                        <div className="top-font">----{item.title}----</div>
                                        <div className="center">
                                            <div className="left" onClick={this.handlerToDetail.bind(this, item.items[0])}>
                                                <div className="top">{item.items[0].title}</div>
                                                <div className="left-center">
                                                    <div>精品打折</div>
                                                    <div>￥{item.items[0].price}</div>
                                                </div>
                                                <div>
                                                    <img src={item.items[0].image} alt="" />
                                                </div>
                                            </div>
                                            <div className="right" >
                                                <div className="top" onClick={this.handlerToDetail.bind(this, item.items[1])}>
                                                    <div className="left">
                                                        <div>{item.items[1].title}</div>
                                                        <div>品质精挑</div>
                                                    </div>
                                                    <div className="right">
                                                        <img src={item.items[1].image} alt="" />
                                                    </div>
                                                </div>
                                                <div className="bottom" onClick={this.handlerToDetail.bind(this, item.items[2])}>
                                                    <div className="left">
                                                        <div>{item.items[2].title}</div>
                                                        <div>品质精挑四折起</div>
                                                    </div>
                                                    <div className="right">
                                                        <img src={item.items[2].image} alt="" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom1">
                                            <ul>
                                                {
                                                    item.items.slice(3).map((item2, index2) => {
                                                        return (
                                                            <li key={index2} onClick={this.handlerToDetail.bind(this, item2)}>
                                                                <div>{item2.title}</div>
                                                                <div>
                                                                    <img src={item2.image} alt="" />
                                                                </div>
                                                                <div className="price price1">￥{item2.price}</div>
                                                                <del className="price">￥{item2.price * 2}</del>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            } else {
                                return (
                                    <div className="second" key={index}>
                                        <div className="top-font">----{item.title}----</div>
                                        <div className="center">
                                            <div className="left" onClick={this.handlerToDetail.bind(this, item.items[0])}>
                                                <div>{item.items[0].title}</div>
                                                <div>火爆开售</div>
                                                <div>
                                                    <img src={item.items[0].image} alt="" />
                                                </div>
                                            </div>
                                            <div className="right" onClick={this.handlerToDetail.bind(this, item.items[1])}>
                                                <div>{item.items[1].title}</div>
                                                <div>火爆开售</div>
                                                <div>
                                                    <img src={item.items[1].image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="bottom">
                                            <ul>
                                                {
                                                    item.items.slice(2).map((item2, index2) => {
                                                        return (
                                                            <li key={index2} onClick={this.handlerToDetail.bind(this, item2)}>
                                                                <div>{item2.title}</div>
                                                                <div>
                                                                    <img src={item2.image} alt="" />
                                                                </div>
                                                                <div className="price price1">￥{item2.price}</div>
                                                                <del className="price">￥{item2.price * 2}</del>
                                                            </li>
                                                        )
                                                    })
                                                }
                                            </ul>
                                        </div>
                                    </div>
                                )
                            }
                        })
                    }
                    <div className="Last">
                        <div className="top-font">----为您推荐----</div>
                        <ul>
                            {
                                foryou.map((item, index) => {
                                    return (
                                        <li key={index} onClick={this.handlerToDetail.bind(this, item)}>
                                            <div>
                                                <img src={item.image} alt="" />
                                            </div>
                                            <div>{item.title}</div>
                                            <div>￥{item.price}</div>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </Wrapper>
        )
    }

    async componentDidMount() {
        let data = await HOME_SWIPER()
        if (data.code === 200) {
            this.setState({
                swiperList: data.data
            })
        }
        let data0 = await HOME_NAV()
        if (data0.code === 200) {
            this.setState({
                navList: data0.data
            })
        }
        let goodsdata = await HOME_GOODSLEVEL();
        if (goodsdata.code === 200) {
            this.setState({
                goodsLevel: goodsdata.data
            })
        }
        let foryou = await HOME_FORYOU();
        if (foryou.code === 200) {
            this.setState({
                foryou: foryou.data
            })
        }
        new Swiper(this.refs.swiper, {
            loop: true, // 循环模式选项
            direction:'horizontal',
            // autoplay: {
            //     //可选选项，自动滑动
            //     delay: 3000,
            //     stopOnLastSlide: false,
            //     disableOnInteraction: false
            // },
            pagination: {
                el: ".swiper-pagination",
                clickable: true
            }
        });





    }
    handlerjumpToSearch() {
        this.props.history.push('/search')
    }
    handleJumpToClassify() {
        this.props.history.push("/classify")
    }
    handlerToDetail(item) {
        this.props.history.push('/detail/goods?gid=' + item.gid)
    }
}


