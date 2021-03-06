import styled from "styled-components"

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    padding-top:1rem;
    background:#eee;
    .lunbo{
        width:100%;height:7.6rem;
        img{
            width:100%;height:100%;
        }
    }
    .info{
        width:100%;height:2.7rem;background:#fff;
        padding: .3rem .2rem;
        .title{
            width:100%;font-size:.3rem;
            height:.8rem;
        }
        .price{
            width:100%;margin-top:.22rem;
            height:.4rem;font-size:.38rem;
            color:red;
        }
        .express{
            width:100%;height:.7rem;
            display:flex;
            justify-content:space-between;
            margin-top:.2rem;
            align-items:center;font-size:.3rem;
            color:#aaa;
        }
    }
    .pingjia{
        width:100%;
        background:#fff;
        margin-top:1rem;
        padding-left:.2rem;
        .num{
            width:100%;
            height:1rem;
            font-size:.38rem;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            color:#7b7f82;
        }
        .list{
            width:100%;
            li{
                width:100%;
                div:nth-child(1){
                    width:100%;height:.7rem;
                    display:flex;
                    justify-content:flex-start;
                    .tx{
                        width:.6rem;
                        height:100%;
                        img{
                            width:100%;height:100%;
                        }
                    }
                    .name{
                        height:100%;width:6.7rem;
                        display:flex;
                        justify-content:flex-start;
                        align-items:center;
                    }
                }
                div:nth-child(2){
                    width:100%;font-size:.28rem;
                    padding-right:.2rem;
                }
                div:nth-child(3){
                    width:100%;height:.4rem;
                    display:flex;
                    justify-content:flex-start;
                    align-items:center;
                    color:#aaa;
                }
            }
        }
    }
    .btns{
        width:100%;height:1.2rem;
        position:fixed;
        bottom:0;left:0;
        display:flex;
        font-size:.38rem;
        font-weight:900;
        color:#fff;
        .left{
            width:50%;height:100%;background:#FCB40A;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        .right{
            width:50%;height:100%;background:red;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }
    .menu{
        width:100%;height:8rem;background:red;
        position: fixed;
        bottom:2.2rem;left:0rem;
    }

    .kong{
        width:100%;height:1.2rem;
    }
`