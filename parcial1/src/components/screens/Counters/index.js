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
        var d = new Date();
        this.state = {
            CountsArray: [],
            id: "",
            CreationDate: d.toLocaleString(),
        }
    }

    AddCount = () => {
        this.countID = this.countID + 1;
        const CopyCountsArray = Object.assign([], this.state.CountsArray)
        CopyCountsArray.push({
            id: this.countID
        })
        this.setState({
            CountsArray: CopyCountsArray,
            CreationDate: this.state.CreationDate
        })
        console.log(this.state.CountsArray)
    }

    DeleteCount = (index) => {
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
                            <Button content="Add" className="ButtonDefault ButtonAdd" onClick={this.AddCount} />
                            {
                                this.state.CountsArray.map((count, index) => {
                                    return (
                                        <Counter
                                            key={count.id}
                                            id={count.id}
                                            Delete={this.DeleteCount.bind(this, index)}
                                            CreationDate={this.state.CreationDate}
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