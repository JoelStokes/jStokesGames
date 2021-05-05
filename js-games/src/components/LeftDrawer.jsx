import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Divider, Button, Grid, Icon } from '@material-ui/core';
import { Link as MUILink } from '@material-ui/core';

import {
    Switch,
    Route
} from "react-router-dom";  
import '../styles/Components.css';

import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import ContactIcon from '@material-ui/icons/PermContactCalendar';
import TeamIcon from '@material-ui/icons/GroupWork';
import SoloIcon from '@material-ui/icons/Gamepad';

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ItchIcon from '../images/itch-io-icon.svg';

export default class LeftDrawer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {open: false};
        this.handleClose = this.handleClose.bind(this);
    }
  
    handleToggle() {
        this.setState({open: !this.state.open});
    }
  
    handleClose() {
       this.props.handleClose();
    }
  
    render() {
      return (
          <div>
              <Drawer
                  docked={false}
                  width={200}
                  open={this.props.open}
                  onBackdropClick={this.handleClose}
                  onRequestChange={(open) => this.setState({open})}
              >
                <List component="nav">
                    <ListItem button
                        component={Link} 
                        to="/home" 
                    >
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button
                        component={Link} 
                        to="/solo-games" 
                    >
                    <ListItemIcon>
                        <SoloIcon />
                    </ListItemIcon>
                    <ListItemText primary="Solo Game Dev" />
                    </ListItem>
                    <ListItem button
                        component={Link} 
                        to="/team-games" 
                    >
                    <ListItemIcon>
                        <TeamIcon />
                    </ListItemIcon>
                    <ListItemText primary="Team Game Dev" />
                    </ListItem>
                    <ListItem button
                        component={Link} 
                        to="/professional" 
                    >
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Professional" />
                    </ListItem>
                    <ListItem button
                        component={Link} 
                        to="/contact" 
                    >
                    <ListItemIcon>
                        <ContactIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                    </ListItem>
                </List>
                <List className="drawerBottom">
                    <Divider />

                    <ListItem button 
                        component={MUILink}
                        target="_blank" 
                        href="https://www.linkedin.com/in/joel-stokes-2486536b/"
                        style={{ color: 'inherit'}}>
                        <ListItemIcon>
                            <LinkedInIcon />
                        </ListItemIcon>
                        <ListItemText primary="LinkedIn" />
                    </ListItem>
                    <ListItem button 
                        component={MUILink}
                        target="_blank" 
                        href="https://github.com/jstokesVMASC"
                        style={{ color: 'inherit'}}>
                        <ListItemIcon>
                            <GitHubIcon />
                        </ListItemIcon>
                        <ListItemText primary="Github" />
                    </ListItem>
                    <ListItem button 
                        component={MUILink}
                        target="_blank" 
                        href="https://jstokesgames.itch.io/"
                        style={{ color: 'inherit'}}>
                        <ListItemIcon>
                            <Icon className='iconHolder'>
                                <img src={ItchIcon} className='outsideIcon'/>
                            </Icon>
                        </ListItemIcon>
                        <ListItemText primary="Itch.io" />
                    </ListItem>                
                </List>
              </Drawer>
          </div>
      );
    }
}
  