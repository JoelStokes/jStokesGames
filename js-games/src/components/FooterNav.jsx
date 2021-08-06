import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import '../styles/Main.css'

import { Link } from "react-router-dom";  

import GamepadIcon from '@material-ui/icons/Gamepad';
import DescriptionIcon from '@material-ui/icons/Description';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ContactMailIcon from '@material-ui/icons/ContactMail';

function FooterNav() {
    const [value, setValue] = React.useState(5);    //Set to non-existant page so footer has no pages selected at home
  
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            showLabels
            style={{width: '100%', bottom: '0',  position: 'fixed' }}
        >
            <BottomNavigationAction label="Games" icon={<GamepadIcon />} component={Link} to="/games"/>
            <BottomNavigationAction label="Resume" icon={<DescriptionIcon />} component={Link} to="/resume"/>
            <BottomNavigationAction label="About Me" icon={<EmojiPeopleIcon />} component={Link} to="/about-me"/>
            <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} component={Link} to="/contact"/>
      </BottomNavigation>  
    )
}

export default FooterNav;