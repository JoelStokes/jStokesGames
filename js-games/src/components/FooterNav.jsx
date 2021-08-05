import React from 'react'
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core';
import '../styles/Main.css'

import GamepadIcon from '@material-ui/icons/Gamepad';
import DescriptionIcon from '@material-ui/icons/Description';
import EmojiPeopleIcon from '@material-ui/icons/EmojiPeople';
import ContactMailIcon from '@material-ui/icons/ContactMail';

function FooterNav() {
    const [value, setValue] = React.useState(0);
  
    return (
        <BottomNavigation
            value={value}
            onChange={(event, newValue) => {
            setValue(newValue);
            }}
            showLabels
            style={{width: '500'}}
        >
            <BottomNavigationAction label="Games" icon={<GamepadIcon />} />
            <BottomNavigationAction label="Resume" icon={<DescriptionIcon />} />
            <BottomNavigationAction label="About Me" icon={<EmojiPeopleIcon />} />
            <BottomNavigationAction label="Contact" icon={<ContactMailIcon />} />
      </BottomNavigation>  
    )
}

export default FooterNav;