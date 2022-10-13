import React from "react";
import Text from "./Text";
import '../css/Input.css';

const Input = (props) => {
    const inputClasses = ` ${props.inputError ?  "input-error" : ""} ${props.inputDisabled ? "input-disabled" : ""} ${props.startIcon || props.endIcon ? "show-icon" : ""} ${props.startIcon || props.endIcon || ""} ${props.size || ""} ${props.fullWidth ? "full-w" : ""} ${props.inputStyling || ""}`;
    const helperText = props.helperText;
    const icon =  <i className={`icon ${props.iconName || "hidden"}`}></i>;

    const [inputValue, setInputValue] = React.useState(props.value || "");

    const onInputChange = (event) => {
        setInputValue(event.target.value)
    }

    return (
        <div className={`input-field ${inputClasses}`}>
            <input placeholder={props.placeholder || "Placeholder"} className="input" value={inputValue} onChange={onInputChange} />
            <Text classes="label" text={props.label || "Label"} />
            {icon}
            <Text classes={`helper-text ${helperText ? "shown" : "hidden"}`} text={helperText || ""} />
        </div>
    );
}

export default Input;