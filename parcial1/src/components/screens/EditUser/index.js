import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

//Components
import Button from "../Button"

class ReadUser extends React.Component {
    render() {
        return (
            <div className="UserContainer">
                <div className="InputContainer">
                    <a>Name</a>
                    <input type="text"></input>
                </div>
                <div className="InputContainer">
                    <a>Year</a>
                    <input type="text"></input>
                </div>
                <Button content="Save" className="ButtonDefault" />
            </div>
        );
    }
}
export default ReadUser;