import React from "react";

//Css
import "./style.css"

//Components
import Button from "../Button"

class Counter extends React.Component {
    render() {
        return (
            <div className="CounterContainer">
                <div className="DateContainer">
                    <a className="Date DateBold">Creation Date:</a>
                    <a className="Date">{this.props.CreationDate}</a>
                </div>
                <div className="DateContainer">
                    <a className="Date DateBold">Last Update Date:</a>
                    <a className="Date">{this.props.LastUpdateDate}</a>
                </div>
                <div className="Counter">
                    <Button
                        url="#"
                        className="ButtonDefault"
                        content="+"
                    />
                    <a className="CounterNumber">{this.props.Counter}1</a>
                    <Button
                        url="#"
                        className="ButtonDefault"
                        content="-"
                    />
                    <Button
                        url="#"
                        className="ButtonDefault"
                        content="Delete"
                    />
                </div>
            </div>
        );
    }
}
export default Counter;