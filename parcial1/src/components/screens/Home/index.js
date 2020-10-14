import React from "react";

//Css
import "./style.css"

//Components
import CenterText from "../CenterText"
import Counter from "../Counter";

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <CenterText
                Title="Wellcome to this React App"
                Subtitle="Website developed in compliance with the instructions of the first MCGA partial by Facundo Fontanella"
                />
                <Counter/>
            </div>
        );
    }
}
export default Home;