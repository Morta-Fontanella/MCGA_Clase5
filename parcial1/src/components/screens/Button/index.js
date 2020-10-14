import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

class Button extends React.Component {
    render() {
        return (
            <Link to={this.props.link}>
                <a className={this.props.className}>
                    {this.props.content}
                </a>
            </Link>
        );
    }
}
export default Button;