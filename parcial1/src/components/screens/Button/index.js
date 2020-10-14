import React from "react";

//Css
import "./style.css"

class Button extends React.Component {
    render() {
        return (
            <a href={this.props.url} className={this.props.className}>
                {this.props.content}
            </a>
        );
    }
}
export default Button;