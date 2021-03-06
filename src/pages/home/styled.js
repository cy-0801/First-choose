import styled from "styled-components"
import class0 from "../../assets/images/common/class.png";
import search from "../../assets/images/common/search.png"

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    background:#eee;
    padding-bottom:1rem;
    overflow:auto;
    .header{
        width:100%;height:1rem;
        background: linear-gradient(rgba(1, 1, 1, 0.2) 0%, rgba(255, 255, 255, 0) 100%);
        position:fixed;top:0;left:0;z-index:1;
        display:flex;
        justify-content:space-around;
        align-items:center;
        .left{
            width:15%;height:100%;
            background:url(${class0}) no-repeat center ;
        }
        .center{
            width:60%;height:70%;
            border-radius:.2rem;
            display:flex;
            background:rgba(255,255,255,0.6);
            div:nth-child(1){
                width:20%;height:100%;
                background:url(${search}) no-repeat center ;
                background-size:60% 60%;
            }
            div:nth-child(2){
                width:80%;height:100%;
                display:flex;
                justify-content:flex-start;
                align-items:center;
                color:#fff;
                font-size:.28rem;
            }
        }
        div:nth-child(3){
            width:15%;height:100%;
            display:flex;
            justify-content:center;
            align-items:center;font-size:.3rem;
            color:#fff;
        }
    }
    .lunbo{
        width:100%;
        height:3.6rem;
        margin-bottom:.1rem;
        img{
            width:100%;height:100%;
        }
    }
    .feilei{
        width:100%;height:1.6rem;
        background:#fff;
        ul{
            width:100%;height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
            li{
                height:100%;
                display:flex;
                flex-direction:column;
                justify-content:space-around;
                align-items:center;
                flex:1;
                img{

                }
                span{
                    font-size:.3rem;
                    color: #7b7f82;
                }
            }
        }
    }
    .show{
        width:100%;
        .first{
            width:100%;height:6rem;margin-top:.2rem;background:#fff;
            .top-font{
                width:100%;height:.6rem;display:flex;
                justify-content:center;align-items:center;
                border-bottom:.01rem solid #ccc;
                color:#c33;font-size:.3rem;
            }
            .center{
                width:100%;height:2.4rem;display:flex;
                border-bottom:1px solid #ccc;
                .left{
                    width:49%;height:100%;border-right:1px solid #ccc;
                    padding:.1rem;
                    .top{
                        width:100%;height:.36rem;font-size:.3rem;
                        white-space:nowrap;font-weight:900;
                        overflow:hidden;
                        /* text-overflow:ellipsis; */
                    }
                    .left-center{
                        margin-top:.1rem;
                        width:100%;height:.3rem;
                        display:flex;justify-content:flex-start;
                        align-items:center;
                        div:nth-child(1){
                            color:#ccc;
                        }
                        div:nth-child(2){
                            color:#fff;
                            width:.8rem;height:.4rem;
                            background:red;
                            display:flex;
                            justify-content:center;
                            align-items:center;
                            border-radius:.3rem;
                            margin-left:.5rem;
                        }
                    }
                    div:nth-child(3){
                        margin:0.1rem auto 0;
                        width:80%;height:1.42rem;
                        background:red;
                        img{
                            width:100%;height:100%;
                        }
                    }
                }
                .right{
                    width:50%;height:100%;
                    .top{
                        width:100%;height:49%;border-bottom:1px solid #ccc;
                        display:flex;
                        .left{
                            width:60%;height:100%;
                            div:nth-child(1){
                                width:100%;height:.34rem;
                                white-space:nowrap;
                                overflow:hidden;
                                font-weight:900;font-size:.3rem;
                            }
                            div:nth-child(2){
                                color:#ccc;margin-top:.1rem;
                            }
                        }   
                        .right{
                            width:40%;height:100%;
                            img{
                                width:100%;height:100%;
                            }
                        }
                    }
                    .bottom{
                        width:100%;height:48%;display:flex;
                        margin-top:2%;
                        .left{
                            width:60%;height:100%;
                            div:nth-child(1){
                                width:100%;height:.34rem;
                                white-space:nowrap;
                                overflow:hidden;
                                font-weight:900;font-size:.3rem;
                            }
                            div:nth-child(2){
                                color:#ccc;margin-top:.1rem;
                            }
                        }   
                        .right{
                            width:40%;height:100%;
                            img{
                                width:100%;height:100%;
                            }
                        }
                    }
                }
            }   
            .bottom1{
                width:100%;height:3rem;
                ul{
                    width:100%;height:100%;display:flex;
                    li{
                        width:25%;height:100%;
                        border:1px solid #ccc;
                        padding:.1rem;
                        div:nth-child(1){
                            width:100%;height:.3rem;
                            white-space:nowrap;
                            margin-bottom:.1rem;
                            overflow:hidden;font-size:.26rem;font-weight:900;
                        }
                        div:nth-child(2){
    
                            width:90%;height:1.42rem;margin:0.1rem auto;
                            img{
                                width:100%;height:100%;
                            }
                        }
                        .price{
                            width:100%;
                            height:.3rem;
                            display:flex;
                            justify-content:center;
                        }
                        .price1{
                            margin-top:.2rem;
                        }
                    }
                }
            }
        }
        .second{
            width:100%;height:6rem;background:#fff;
            margin-top:.2rem;
            .top-font{
                width:100%;height:.6rem;display:flex;
                justify-content:center;align-items:center;
                border-bottom:.01rem solid #ccc;
                color:#c33;font-size:.3rem;
            }
            .center{
                display:flex;
                width:100%;height:2.4rem;border-bottom:1px solid #ccc;
                .left{
                    width:50%;height:100%;border-right:1px solid #ccc;
                    padding:.1rem;
                    div:nth-child(1){
                        width:100%;height:.32rem;font-size:.28rem;
                        font-weight:900;
                        white-space:nowrap;
                        overflow:hidden;
                    }
                    div:nth-child(2){
                        margin-top:.1rem;
                        width:100%;height:.34rem;color:#ccc;
                        display:flex;
                        justify-content:center;
                    }
                    div:nth-child(3){
                        width:40%;height:1.4rem;
                        margin:0 auto;
                        img{
                            width:100%;height:100%;
                        }
                    }
                }
                .right{
                    width:50%;height:100%;
                    padding:.1rem;
                    div:nth-child(1){
                        width:100%;height:.32rem;font-size:.28rem;
                        font-weight:900;
                        white-space:nowrap;
                        overflow:hidden;
                    }
                    div:nth-child(2){
                        margin-top:.1rem;
                        width:100%;height:.34rem;color:#ccc;
                        display:flex;
                        justify-content:center;
                    }
                    div:nth-child(3){
                        width:40%;height:1.4rem;
                        margin:0 auto;
                        img{
                            width:100%;height:100%;
                        }
                    }
                }
            }
            .bottom{
                width:100%;height:3rem;
                ul{
                    width:100%;height:100%;
                    display:flex;
                    li{
                        width:25%;height:100%;border-right:1px solid #ccc;
                        padding:.1rem;
                        div:nth-child(1){
                            width:100%;height:.34rem;
                            white-space:nowrap;
                            overflow:hidden;font-weight:900;
                        }
                        div:nth-child(2){
                            width:90%;height:1.4rem;
                            margin: .1rem auto;
                            img{
                                width:100%;height:100%;
                            }
                        }
                        .price{
                            width:100%;height:.34rem;
                            display:flex;
                            justify-content:center;
                            color:#ccc;
                        }
                        .price1{
                            color:#aaa;
                            margin-top:.2rem;
                        }
                    }
                }
            }
        }
    }
    .Last{
        width:100%;
        .top-font{
                width:100%;height:.6rem;display:flex;
                justify-content:center;align-items:center;
                border-bottom:.01rem solid #ccc;
                color:#c33;font-size:.3rem;
        }
        ul{
            width:100%;
            display:flex;
            flex-wrap:wrap;
            li{
                width:48%;
                height:4.4rem;
                background:#fff;
                padding:.1rem;
                margin:0 2% .2rem 0;
                div:nth-child(1){
                    width:80%;height:2.8rem;
                    margin:0 auto;
                    img{
                        width:100%;height:100%;
                    }
                }
                div:nth-child(2){
                    margin-top:.2rem;
                    width:100%;height:.6rem;display:flex;
                    flex-wrap:wrap;overflow:hidden;
                }
                div:nth-child(3){
                    color:red;
                }
            }
        }
    }
`