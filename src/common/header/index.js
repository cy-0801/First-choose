import React, { Component } from 'react'
import {Wrapper} from "./styled"

class Header extends Component {

    render() {
        let {title} = this.props
        return (
            <Wrapper>
                <div className="icon"></div>
                <div className="title">{title}</div>
            </Wrapper>
        )
    }
}
Header.defaultProps = {
    title:"会员中心"
}

export default Header;