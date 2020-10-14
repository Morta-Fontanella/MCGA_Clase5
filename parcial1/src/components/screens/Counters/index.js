import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

//Components
import Counter from "../Counter";

class Counters extends React.Component {
    render() {
        return (
            <Route exact path="/Counters">
                <h1>counters</h1>
            </Route>
        );
    }
}
export default Counters;