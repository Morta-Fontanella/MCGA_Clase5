import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

//Components
import Button from "../Button"

class Counter extends React.Component {
    constructor(props) {
        super(props);
        var d = new Date();
        this.state = {
            Count: 0,
            CreationDate: d.toLocaleString(),
        };
    }

    Decrement = () => {
        let NewValue = this.state.Count;
        this.setState({
            Count: (NewValue - 1),
        });
    }

    Increment = () => {
        let NewValue = this.state.Count;
        this.setState({
            Count: (NewValue + 1),
        });
    }

    render() {
        return (
            <div className="CounterContainer">
                <div className="DateContainer">
                    <a className="Date DateBold">Creation Date:</a>
                    <a className="Date">{this.state.CreationDate}</a>
                </div>
                <div className="DateContainer">
                    <a className="Date DateBold">Last Update Date:</a>
                    <a className="Date">{this.state.LastUpdateDate}</a>
                </div>
                <div className="Counter">
                    <Button
                        className="ButtonDefault"
                        content="+"
                        onClick={this.Increment}
                    />
                    <a className="CounterNumber">{this.state.Count}</a>
                    <Button
                        className="ButtonDefault"
                        content="-"
                        onClick={this.Decrement}
                    />
                    <Button
                        className="ButtonDefault"
                        content="Delete"
                        onClick={this.props.Delete}
                    />
                </div>
            </div>
        );
    }
}
export default Counter;