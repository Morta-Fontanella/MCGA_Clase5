import React from "react";

//Css
import "./style.css"

//Components
import CenterText from "../CenterText"

class Home extends React.Component {
    render() {
        return (
            <div className="container">
                <CenterText
                Title="This is the first partial of MCGA by Facundo Fontanella"
                Subtitle="Please select an option"
                />
            </div>
        );
    }
}
export default Home;