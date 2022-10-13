import React from "react";
import Button from "../components/Button";
import ComponentBox from "../components/ComponentBox";
import Text from "../components/Text";
import Input from "../components/Input";


const InputsContainer = () => {
    return (
        <div className="components-container">
            <div className="row">
                <ComponentBox 
                    topic="<Input />"
                    component={<Input />}
                />

                <ComponentBox 
                    topic="&:hover"
                    component={<Input inputStyling="input-black" />}
                />

                <ComponentBox 
                    topic="&:focus"
                    component={<Input inputStyling="input-blue" />}
                />      
            </div>

            <div className="row">
                <ComponentBox 
                    topic="<Input inputError={true} />"
                    component={<Input inputError={true} />}
                />

                <ComponentBox 
                    topic="&:hover"
                    component={<Input inputStyling="input-black" />}
                />

                <ComponentBox 
                    topic="&:focus"
                    component={<Input inputError={true} inputStyling="input-red" />}
                />      
            </div>

            <div className="row">
                <ComponentBox 
                    topic="<Input inputDisabled={true} />"
                    component={<Input inputDisabled={true} />}
                />
            </div>

            <div className="row">
                <ComponentBox 
                    topic="<Input helperText='Some interesting text' />"
                    component={<Input helperText="Some interesting text" />}
                />

                <ComponentBox 
                    topic="<Input helperText='Some interesting text' inputError={true} />"
                    component={<Input helperText="Some interesting text" inputError={true} />}
                />
            </div>

            <div className="row">
                <ComponentBox 
                    topic="<Input iconName='fas fa-clock' startIcon='start-icon' />"
                    component={<Input iconName="fas fa-clock" startIcon="start-icon" />}
                />

                <ComponentBox 
                    topic="<Input endIcon={true} />"
                    component={<Input iconName="fas fa-clock" endIcon="end-icon" />}
                />
            </div>

            <div className="row">
                <ComponentBox 
                    topic="<Input value='Text' />"
                    component={<Input value="Text" />}
                />
            </div>

            <div className="row">
                <ComponentBox 
                    topic="<Input size='sm' />"
                    component={<Input size="sm" />}
                />

                <ComponentBox 
                    topic="<Input size='md' />"
                    component={<Input size="md" />}
                />
            </div>

            <div className="row">
                <ComponentBox 
                    topic="<Input fullWidth={true} />"
                    component={<Input fullWidth={true} />}
                />
            </div>
        </div>
    );
}

export default InputsContainer;