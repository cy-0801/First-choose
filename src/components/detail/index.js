import React, { Component} from 'react'
import {Wrapper} from "./styled"
import {DETAIL_INFO} from "@api"

class Detail0 extends Component {
    constructor(){
        super()
        this.state = {
            info:""
        }
    }
    render() {
        let {info} = this.state
        return (
            <Wrapper> 
                <div dangerouslySetInnerHTML={{__html: info}}></div>
            </Wrapper>
        )
    }
    async componentDidMount(){
        let data = await DETAIL_INFO(this.props.location.search.slice(5));
        console.log(data)
        this.setState({
            info:data.data.bodys
        })
    }
}

export default Detail0;

