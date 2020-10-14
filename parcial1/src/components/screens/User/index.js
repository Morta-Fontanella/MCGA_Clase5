import React from "react";
import { BrowserRouter, Link, Route} from 'react-router-dom';

//Css
import "./style.css"

//Components


class User extends React.Component {
    render() {
        return (
            <Route exact path="/User">
                <h1>User</h1>
            </Route>

        );
    }
}
export default User;