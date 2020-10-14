import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

//Components
import User from "../User";
import Home from "../Home";
import NavBar from "../NavBar";
import Button from "../Button"
import Counter from "../Counter";

class Counters extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/Counters">
                    <div className="ScreenContainer">
                        <NavBar title="Counters" />
                        <div className="CountersContainer">
                            <Button content="Add" className="ButtonDefault ButtonAdd" />
                            <Counter />
                            <Counter />
                            <Counter />
                            <Counter />
                        </div>
                    </div>
                </Route>
                <Route exact path="/User" component={User} />
                <Route exact path="/" component={Home} />
            </BrowserRouter>
        );
    }
}
export default Counters;