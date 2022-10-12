import React from "react";
import Text from "./Text";
import '../css/Button.css';

const Button = (props) => {
    const btnClasses = `${props.variant || ""} ${props.disableShadow ? "shadow-disabled" : ""} ${props.btnDisabled ? "btn-disabled" : ""} ${props.startIcon ? "order-l-r" : ""} ${props.endIcon ? "order-r-l" : ""} ${props.size} ${props.btnColor} ${props.hoverFocus ? "hover-focus" : ""}`;
    
    console.log(btnClasses);

    return (
        <button className={`button ${btnClasses}`}>
            <i className={props.iconName}></i>
            <Text text={props.text} />
        </button>
    );
}

export default Button;