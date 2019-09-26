import styled from "styled-components"

export const Wrapper = styled.div`
    width:100%;
    height:100%;
    box-sizing:border-box;
    padding-top:1rem;
    .input0{
        width:90%;height:.8rem;font-size:.3rem;
        margin-left:5%;
        margin-top:.4rem;
        text-indent:.2rem;
        border:1px solid #EFEFEF;
        border-radius: .02rem;
        background: #FFFFFF;
    }
    button{
        width:88%;height:.8rem;background:#c33;
        margin:.4rem 6% 0;
        font-size:.3rem;color:#fff;
    }
    .toggle{
        width:100%;height:.8rem;
        padding: 0 6%;
        display:flex;
        justify-content:space-between;
        align-items:center;
        .small-font{
            display:flex;
            justify-content:flex-start;
            align-items:center;
            div:nth-child(2){
                margin-left:.1rem;
            }
        }
    }
`