import styled from "styled-components"

export const Wrapper = styled.div`
    width:100%;height:100%;
    .header{
        width:100%;
        height:1rem;
        border-bottom:.02rem solid #ccc;
        display:flex;
        .close{
            width:10%;height:100%;
            background:red;
        }
        .search{
            width:80%;height:100%;
            padding-left:5%;
            display:flex;
            align-items:center;
            input{
                width:80%;
                height:70%;
                font-size:.28rem;
                text-indent:.2rem;
                outline:none;
                border:1px solid #ccc;
            }
            div:nth-child(2){
                width:15%;height:70%;
                border-top:1px solid #ccc;
                border-right:1px solid #ccc;
                border-bottom:1px solid #ccc;
                background:red;
            }
        }
    }
    .hotSearch{
        width:100%;color:#717376;
        .title{
            width:100%;height:.8rem;font-size:.28rem;
            display:flex;
            justify-content:space-between;
            align-items:center;
            padding: 0 5%;
            div:nth-child(2){
                background:red;
                width:.8rem;height:.8rem;
            }
        }
        ul{
            width:100%;
            display:flex;
            justify-content:flex-start;
            flex-wrap:wrap;
            padding:0 5%;
            li{
                width:30%;height:.5rem;
                display:flex;justify-content:center;
                align-items:center;
                margin-right:3%;
                margin-bottom:5%;
                border:1px solid #ccc;
                border-radius:2rem;
            }
        }
    }
`