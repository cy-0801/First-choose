import styled from "styled-components"
import back from "../../assets/images/home/goods/back.png"

export const Wrapper = styled.div`
    width:100%;height:1rem;
    background:#fff;
    position:fixed;
    top:0;left:0;
    display:flex;font-size:.38rem;
    justify-content:flex-start;
    border-bottom:1px solid #ccc;
    .icon{
        height:100%;width:.8rem;
        display:flex;
        justify-content:center;
        align-items:center;
        background:url(${back}) no-repeat center;
        background-size:80% 70%;
    }
    .title{
        height:100%;width:6rem;
        display:flex;
        justify-content:center;
        align-items:center;
    }
`