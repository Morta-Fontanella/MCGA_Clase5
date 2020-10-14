import React from "react";
import { BrowserRouter, Link, Route } from 'react-router-dom';

//Css
import "./style.css"

//Components
import Counters from "../Counters";
import Home from "../Home";
import NavBar from "../NavBar";
import EditUser from "../EditUser";

class User extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <Route exact path="/User">
                    <div className="ScreenContainer">
                        <NavBar title="User" />
                        <div className="UserContainer">
                            <EditUser />
                        </div>
                    </div>
                </Route>
                <Route exact path="/Counters" component={Counters} />
                <Route exact path="/" component={Home} />
            </BrowserRouter>
        );
    }
}
export default User;