import React from "react";
import Text from "./Text";
import '../css/ComponentBox.css';

const ComponentBox = ({topic, component}) => {
    return (
        <div className="component-box">
            <Text classes="small light-bold" text={topic} />
            {component}
        </div>
    );
}

export default ComponentBox;