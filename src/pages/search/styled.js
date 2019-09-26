import styled from "styled-components"
import back from "../../assets/images/home/goods/back.png"

export const  Wrapper  = styled.div`
    width:100%;
    background:#eee;
    .header{
        width:100%;height:1rem;
        background:#fff;
        position:fixed;
        top:0px;left:0px;
        display:flex;
        align-items:center;
        div:nth-child(1){
            width:.8rem;height:.8rem;
            background:url(${back}) no-repeat center;
            background-size:100% 100%;
        }
        div:nth-child(2){
            width:5.6rem;height:.7rem;margin-left:.2rem;
            border:1px solid #000;border-radius:.1rem;
            line-height:.7rem;font-size:.3rem;color:#ccc;
            text-indent:.2rem;
        }
    }
    .left{
        width:2rem;background:#fff;
        padding-top:1rem;
        ul{
            width:100%;
            li{
                width:100%;
                height:.8rem;
                border-bottom:1px solid #ccc;
                display:flex;
                justify-content:center;
                align-items:center;
                font-size:.28rem;
            }
        }
    }
`