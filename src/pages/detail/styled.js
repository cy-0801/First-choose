import styled from "styled-components"

export const Wrapper = styled.div`
    width:100%;height:100%;
    overflow:auto;
    .header{
        width:100%;height:1rem;background:#fff;
        position:fixed;top:0;left:0;
        display:flex;font-size:.38rem;
        justify-content:space-around;
        align-items:center;
        div:nth-child(1){
            width:.8rem;
            height:100%;
            background:yellow;
        }
        div:nth-child(2){
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        div:nth-child(3){
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        div:nth-child(4){
            height:100%;
            display:flex;
            justify-content:center;
            align-items:center;
        }
        div:nth-child(5){
            width:.7rem;
            height:100%;
            background:yellow;
        }
    }
`