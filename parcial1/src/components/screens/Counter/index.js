import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

//Components
import Button from "../Button"

class Counter extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/Counter">
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
                                className="ButtonDefault"
                                content="+"
                            />
                            <a className="CounterNumber">{this.props.Counter}1</a>
                            <Button
                                className="ButtonDefault"
                                content="-"
                            />
                            <Button
                                className="ButtonDefault"
                                content="Delete"
                            />
                        </div>
                    </div>
                </Route>
                <Route exact path="/Counter" component={Counter}></Route>
            </BrowserRouter>
        );
    }
}
export default Counter;