import styled from "styled-components"

export const WrapperComponent = styled.div`
    width:100%;height:1rem;
    position:fixed;
    bottom:0;left:0;
    ul{
        width:100%;height:100%;display:flex;
        background:#fff;
        li{
            display:flex;
            width:100%;height:100%;
            flex-direction:column;
            justify-content:center;
            align-items:center;
            a{
                width:100%;height:100%;
                display:flex;
                flex-direction:column;
                justify-content:center;
                align-items:center;
            }
        }
    }
    .active{
        color:red;
    }
`