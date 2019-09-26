import React, { Component ,Fragment } from 'react'
import TabBar from "@common/tabBar"

class Layout extends Component {
    render() {
        let flag = this.props.meta.flag
        return (
            <Fragment>
                { this.props.children }
                { flag ? <TabBar/> : "" }
            </Fragment>
        )
    }
}
export default Layout