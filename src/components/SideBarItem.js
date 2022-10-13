import React from "react";
import Text from "./Text";
import { Outlet, Link } from "react-router-dom";


const SideBarItem = (props) => {
    const pathName = window.location.pathname;
    return <Link style={{textDecoration: 'none'}} to={props.linkTo}><Text classes={`medium sidebar-item ${pathName === `/${props.linkTo}` ? "bold" : ""}`} text={props.text} /></Link>
}

export default SideBarItem;