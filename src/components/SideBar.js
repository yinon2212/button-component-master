import React from "react";
import SideBarItem from "./SideBarItem";
import Logo from "./Logo";
import '../css/SideBar.css';

const generateSideBarItem = (item) => {
    return <SideBarItem linkTo={item.linkTo} text={item.topicName} />
}

const SideBar = ({items}) => {
    const sideBarItems = items.map(item => {
        return generateSideBarItem(item)
    });

    return (
        <div className="sidebar">
           <Logo />
            {sideBarItems}
        </div>
    );
}

export default SideBar;