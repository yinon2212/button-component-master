import React from "react";
import Button from "../components/Button";
import ComponentBox from "../components/ComponentBox";
import Text from "../components/Text";

const ButtonsContainer = () => {
    return (
<div className="components-container">
                <Text classes="large heading" text="Buttons" />
                <div className="row">
                    <ComponentBox 
                        topic={'<Button text="Default" />'}
                        component={<Button text="Default" />}
                    />

                    <ComponentBox 
                        topic={'&:hover, &:focus'}
                        component={<Button text="Default" hoverFocus={true} />}
                    />
                </div>

                <div className="row">
                    <ComponentBox 
                        topic={'<Button text="Default" variant="outline" />'}
                        component={<Button text="Default" variant="outline" />}
                    />
  
                    <ComponentBox 
                        topic={'&:hover, &:focus'}
                        component={<Button text="Default" variant="outline" />}
                    />
                </div>

                <div className="row">

                    <ComponentBox 
                        topic={'<Button text="Default" variant="text-variant" />'}
                        component={<Button text="Default" variant="text-variant" />}
                    />

                    <ComponentBox 
                        topic={'&:hover, &:focus'}
                        component={<Button text="Default" variant="text-variant" />}
                    />

                </div>

                <div className="row">
                    <ComponentBox 
                        topic={'<Button text="Default" disableShadow={true} />'}
                        component={<Button text="Default" btnColor="primary" disableShadow={true} />}
                    />
                </div>

                <div className="row">
                    <ComponentBox 
                        topic={'<Button text="Default" btnDisabled={true} />'}
                        component={<Button text="Default" btnDisabled={true} />}
                    />
                    <ComponentBox 
                        topic={'<Button text="Default" variant="text" btnDisabled={true} />'}
                        component={<Button text="Default" variant="text" btnDisabled={true} />}
                    />
                </div>

                <div className="row">
                    <ComponentBox 
                        topic={'<Button text="Default" startIcon={true} />'}
                        component={<Button text="Default" btnColor="primary" iconName="fas fa-rocket" startIcon={true} />}
                    />
                    <ComponentBox 
                        topic={'<Button text="Default" endIcon={true} />'}
                        component={<Button text="Default" btnColor="primary" iconName="fas fa-rocket" endIcon={true} />}
                        
                    />
                </div>

                <div className="row">
                    <ComponentBox 
                        topic={'<Button text="Default" size="sm" />'}
                        component={<Button text="Default" size="sm" btnColor="primary" />}
                    />
                    <ComponentBox 
                        topic={'<Button text="Default" size="md" />'}
                        component={<Button text="Default" size="md" btnColor="primary" />}
                    />
                    <ComponentBox 
                        topic={'<Button text="Default" size="lg" />'}
                        component={<Button text="Default" size="lg" btnColor="primary" />}
                    />
                </div>

                <div className="row">
                    <ComponentBox 
                        topic={'<Button text="Default" btnColor="default" />'}
                        component={<Button text="Default" btnColor="default" />}
                    />
                    <ComponentBox 
                        topic={'<Button text="Default" btnColor="primary" />'}
                        component={<Button text="Default" btnColor="primary" />}
                    />
                    <ComponentBox 
                        topic={'<Button text="Default" btnColor="secondary" />'}
                        component={<Button text="Default" btnColor="secondary" />}
                    />
                    <ComponentBox 
                        topic={'<Button text="Default" btnColor="danger" />'}
                        component={<Button text="Default" btnColor="danger" />}
                    />
                </div>

                <div className="row">
                    <ComponentBox 
                        topic={'&:hover, &:focus'}
                        component={<Button text="Default" btnColor="default" hoverFocus={true} />}
                    />
                    <ComponentBox 
                        topic={'&:hover, &:focus'}
                        component={<Button text="Default" btnColor="primary" hoverFocus={true} />}
                    />
                    <ComponentBox 
                        topic={'&:hover, &:focus'}
                        component={<Button text="Default" btnColor="secondary" hoverFocus={true} />}
                    />
                    <ComponentBox 
                        topic={'&:hover, &:focus'}
                        component={<Button text="Default" btnColor="danger" hoverFocus={true} />}
                    />
                </div>

                
            </div>
    );
}

export default ButtonsContainer;