import React, { Component } from 'react';
import { NavLink } from "react-router-dom";
export default class NavigationComponent extends Component {
    constructor() {
        super();
    }

    adminLinks() {

    }

    render() {
        return (
            <div>
            <NavLink exact to ="/">
            Home
            </NavLink>
            <NavLink to ="/about-me">
            About Me
            </NavLink>


            
            <button>Contact</button>
            <button>Blog</button>
          {true ? <button>Add Blog</button> : null }
            </div>
        )
    }
}