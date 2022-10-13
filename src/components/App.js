import React from "react";
import SideBar from "./SideBar";
import ButtonsContainer from "../pages/ButtonsContainer";
import InputsContainer from "../pages/InputsContainer";
import { BrowserRouter as Router,  Routes, Link, Route } from "react-router-dom";
import '../css/App.css';

const topics = [
    {
        topicName: "Colors",
        active: false,
        linkTo: "colors"
    },
    {
        topicName: "Typography",
        active: false,
        linkTo: "typography"
    }, 
    {
        topicName: "Buttons",
        active: true,
        linkTo: "buttons"
    },
    {
        topicName: "Inputs",
        active: false,
        linkTo: "inputs"
    },
    {
        topicName: "Grid",
        active: false,
        linkTo: "grid"
    }
];

const App = () => {

    return (
        <Router>
            <div className="container">
                <SideBar items={topics} />
                <Routes> 
                    <Route exact path="/buttons" element={<ButtonsContainer />}></Route> 
                    <Route exact path="/inputs" element={<InputsContainer />}></Route> 
                </Routes>
            </div>
        </Router>
    );
}

export default App;