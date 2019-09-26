import React, { Component } from 'react'
import { WrapperComponent } from "./styled"
import { tabBarRoutes } from "@router"
import { NavLink } from "react-router-dom"

class TabBar extends Component {
    render() {
        return (
            <WrapperComponent>
                <ul>
                    {
                        tabBarRoutes.map((item) => {
                            return <li key={item.key}>
                                        <NavLink to={item.path}>
                                            <img src={item.meta.src} alt="" />
                                            <span>{item.name}</span>
                                        </NavLink>
                                   </li>
                        })
                    }
                </ul>
            </WrapperComponent>
        )
    }
}
export default TabBar 
