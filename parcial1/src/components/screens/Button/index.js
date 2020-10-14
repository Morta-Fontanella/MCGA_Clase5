import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"
import Counters from "../Counters";
import User from "../User";

class Button extends React.Component {
    render() {
        return (
            <a className={this.props.className}>
                <Link to={this.props.link}>{this.props.content}</Link>
            </a>
        );
    }
}
export default Button;