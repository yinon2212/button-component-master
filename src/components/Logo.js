import React from "react";
import Text from "./Text";
import '../css/Logo.css';


const Logo = () => {
    return  <p className="logo"><Text classes="bold orange-txt" text="Dev" /><Text classes="bold" text="challenges.io" /></p>;
}

export default Logo;