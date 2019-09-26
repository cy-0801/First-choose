import React, { Component,Fragment } from 'react'
import {Switch,Redirect} from "react-router-dom"
import EachRouters from "@utils/EachRouters"
import {baseRoutes} from "@router"

class App extends Component {
    render() {
        return (
            <Fragment>
                <Switch>
                    {EachRouters(baseRoutes)}
                    <Redirect from="/" to="/home" />
                </Switch>
            </Fragment>
        )
    }
}

export default App;

