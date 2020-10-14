import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

//Components
import User from "../User";
import Home from "../Home";
import NavBar from "../NavBar";

class Counters extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/Counters">
                    <div className="ScreenContainer">
                        <NavBar title="Counters" />
                    </div>
                </Route>
                <Route exact path="/User" component={User} />
                <Route exact path="/" component={Home} />
            </BrowserRouter>
        );
    }
}
export default Counters;