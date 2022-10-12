import React from "react";
import Text from "./Text";



const SideBarItem = (props) => {
    return <Text classes={`medium sidebar-item ${props.active ? "bold" : "gray-txt" }`} text={props.text} />
}

export default SideBarItem;