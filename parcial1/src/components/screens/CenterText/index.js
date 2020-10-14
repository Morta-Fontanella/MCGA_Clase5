import React from "react";

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
                        url="#"
                        className="ButtonDefault"
                        content="Users"
                    />
                    <Button
                        url="#"
                        className="ButtonDefault"
                        content="Counters"
                    />
                    </div>                    
                </div>
            </div>
        );
    }
}
export default CenterText;