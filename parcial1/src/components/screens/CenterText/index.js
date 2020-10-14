import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

//Components
import Button from "../Button"

class CenterText extends React.Component {
    render() {
        return (
            <div className="CenterTextContainer">
                <div className="TextContainer">
                    <h1 className="Title">{this.props.Title}</h1>
                    <h2 className="SubTitle">{this.props.Subtitle}</h2>
                    <div className="ButtonContainer">
                        <Button
                            className="ButtonDefault"
                            content="User"
                            link="/User"
                        />
                        <Button
                            className="ButtonDefault"
                            content="Counters"
                            link="/Counters"
                        />
                    </div>
                </div>
            </div>
        );
    }
}
export default CenterText;