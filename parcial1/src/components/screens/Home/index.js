import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

//Components
import CenterText from "../CenterText"
import Counters from "../Counters";
import User from "../User";

class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/">
                    <div className="Container">
                        <CenterText
                            Title="Welcome to this React App"
                            Subtitle="Website developed in compliance with the instructions of the first MCGA partial by Facundo Fontanella"
                        />
                    </div>
                </Route>
                <Route exact path="/User" component={User} />
                <Route exact path="/Counters" component={Counters} />
            </BrowserRouter>
        );
    }
}
export default Home;