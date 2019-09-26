import styled from "styled-components"
import pay from "../../assets/images/user/my/pay.png"
import shouhuo from "../../assets/images/user/my/shouhuo.png"
import comment from "../../assets/images/user/my/comment.png"

export const Wrapper = styled.div`
    width:100%;height:100%;
    padding-top:1rem;
    background:#eee;
    .name{
        width:100%;height:2.8rem;
        background:#c33;
        .kong{
            width:100%;height:1.4rem;
        }
        .headImage{
            width:100%;height:1.4rem;
            display:flex;
            justify-content:flex-start;
            align-items:center;
            padding-left:.4rem;
            padding-bottom:.2rem;
            .tx{
                width:1.2rem;height:1.2rem;
                border-radius:50%;overflow:hidden;
                img{
                    width:100%;height:100%;
                }
            }
            .right{
                width:2rem;height:100%;
                display:flex;color:#fff;
                flex-direction:column;
                justify-content:flex-start;
                margin-left:.4rem;
                padding-top:.4rem;
                div:nth-child(2){
                    margin-top:.1rem;
                }
            }
        }
    }
    .order{
        width:100%;height:.8rem;background:white;
        border-bottom:1px solid #ccc;
        display:flex;
        justify-content:space-between;
        align-items:center;
        font-size:.26rem;
        padding:0 .2rem;
    }
    .threeIcon{
        width:100%;height:1.4rem;background:#fff;
        display:flex;
        justify-content:space-around;
        align-items:center;
        .icon{
            width:.92rem;height:.84rem;
            div:nth-child(1){
                width:80%;height:.5rem;margin-left:10%;
                background:url(${pay}) no-repeat center;
                background-size:65%;
            }
            div:nth-child(2){
                display:flex;
                justify-content:center;
                align-items:center;
            }
        }
        .icon0{
            width:.92rem;height:.84rem;
            div:nth-child(1){
                width:80%;height:.5rem;margin-left:10%;
                background:url(${shouhuo}) no-repeat center;
                background-size:65%;
            }
            div:nth-child(2){
                display:flex;
                justify-content:center;
                align-items:center;
            }
        }
        .icon1{
            width:.92rem;height:.84rem;
            div:nth-child(1){
                width:80%;height:.5rem;margin-left:10%;
                background:url(${comment}) no-repeat center;
                background-size:65%;
            }
            div:nth-child(2){
                display:flex;
                justify-content:center;
                align-items:center;
            }
        }
    }
    .myList{
        width:100%;height:4rem;margin-top:.3rem;
        background:#fff;
        .demo{
            width:100%;height:.8rem;border-bottom:1px solid #ccc;
            display:flex;justify-content:space-between;
            align-items:center;font-size:.34rem;
            padding: 0 .3rem 0 .7rem;           
        }
    }
    .sign{
        width:100%;height:2rem;background:#fff;
        position: relative;
        div:nth-child(1){
            width:70%;height:0.8rem;background:#c33;
            border-radius:.1rem;
            position:absolute;
            top:0;bottom:0;
            left:0;right:0;
            margin:.4rem auto ;
            color:#fff;font-size:.3rem;
            display:flex;
            justify-content:center;
            align-items:center;
        }
    }

`