import React, { Component } from 'react'
import {Wrapper} from "./styled"

class Header extends Component {

    render() {
        let {title} = this.props
        return (
            <Wrapper>
                <div className="icon" onClick={this.handlerBack.bind(this)}></div>
                <div className="title">{title}</div>
            </Wrapper>
        )
    }
    handlerBack(){
        this.props.history.go(-1)
    }
}
Header.defaultProps = {
    title:"会员中心"
}

export default Header;