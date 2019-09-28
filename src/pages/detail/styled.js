import styled from "styled-components"
import back from "../../assets/images/home/goods/back.png"
import car from "../../assets/images/home/goods/cart.png"

export const Wrapper = styled.div`
    width:100%;
    .active{border-bottom:1px solid red}
    .header{
        width:100%;height:1rem;background:#fff;
        position:fixed;top:0;left:0;
        display:flex;font-size:.38rem;
        justify-content:space-around;z-index:1;
        align-items:center;
        div:nth-child(1){
            width:.8rem;
            height:100%;
            background:url(${back}) no-repeat center;
            background-size:70% 70%;
        }
        a:nth-child(2){
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        a:nth-child(3){
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        a:nth-child(4){
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        div:nth-child(5){
            width:1rem;
            height:100%;
            background:url(${car}) no-repeat center;
            background-size:70% 70%;
            position: relative;
            span{
                width:.2rem;height:.2rem;
                position:absolute;
                border-radius:50%;
                background:red;
                right:0;top:.2rem;
            }
        }
    }
`