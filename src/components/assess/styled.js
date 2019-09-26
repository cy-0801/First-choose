import styled from "styled-components"

export const Wrapper = styled.div`
    width:100%;padding:0 .2rem;
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
`