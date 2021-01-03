import React from 'react'

import {
    Fab,
    Action
} from 'react-tiny-fab'

import { NavLink } from 'react-router-dom';


import icons from "./data/iconmap"

import "./styles/button.css"
import "./styles/navigation.css"

class Navigation extends React.Component {
    render() {
        return (
            <Fab
                mainButtonStyles={{
                    backgroundColor: "black",
                    width: "5vw",
                    height: "5vw"
                }}
                icon={<img className="shuttle-icon" src={icons.Shuttle.path} alt={icons.Shuttle.alt} />}
                event={"hover"}
                style={{
                    top: 10,
                    right: 10
                }}
            >
                <button className="btn4" >
                    <NavLink className="navlink" to="/credits">Credits</NavLink>
                </button>
                <button className="btn4">
                    <NavLink className="navlink" to="/aboutme">Who am I?</NavLink>
                </button>
                <button className="btn4">
                    <NavLink className="navlink" to="/contact">Contact</NavLink>
                </button>
                <button className="btn4">
                    <NavLink className="navlink" to="/projects">My Work</NavLink>
                </button>
                <button className="btn4">
                    <NavLink className="navlink" to="/services">Services</NavLink>
                </button>
            </Fab>
        )
    }
}

export default Navigation;