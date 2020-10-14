import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

//Components
import Button from "../Button"

class Navbar extends React.Component {
    render() {
        return (
            <div className="NavBarContainer">
                <div className="NavBar">
                    <h1>{this.props.title}</h1>
                    <Button
                        className="ButtonDefault"
                        content="Home"
                        link="/"
                    />
                </div>
            </div>
        );
    }
}
export default Navbar;