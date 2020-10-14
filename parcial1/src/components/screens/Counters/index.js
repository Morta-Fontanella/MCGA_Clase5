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

    constructor(props) {
        super(props)
        this.countID = 0;
        this.state = {
            CountsArray: [],
            id: "",
        }
    }

    AddCounter = () => {
        this.countID = this.countID + 1;
        const CopyCountsArray = Object.assign([], this.state.CountsArray)
        CopyCountsArray.push({
            id: this.countID
        })
        this.setState({
            CountsArray: CopyCountsArray,
        })
        console.log(this.state.CountsArray)
    }

    DeleteCounter = (index) => {
        const CopyCountsArray = Object.assign([], this.state.CountsArray);
        CopyCountsArray.splice(index, 1);
        this.setState({
            CountsArray: CopyCountsArray
        })
    }


    render() {
        return (
            <BrowserRouter>
                <Route exact path="/Counters">
                    <div className="ScreenContainer">
                        <NavBar title="Counters" />
                        <div className="CountersContainer">
                            <Button content="Add" className="ButtonDefault ButtonAdd" onClick={this.AddCounter} />
                            {
                                this.state.CountsArray.map((count, index) => {
                                    return (
                                        <Counter
                                            id={count.id}
                                            Delete={this.DeleteCounter.bind(this, index)}
                                        />
                                    )
                                })
                            }
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