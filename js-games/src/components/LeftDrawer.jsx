import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { List, ListItem, ListItemIcon, ListItemText, Drawer, Divider } from '@material-ui/core';

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
import ItchIcon from '../images/itch-io-icon.png';

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
                    <ListItem button>
                    <ListItemIcon>
                        <HomeIcon />
                    </ListItemIcon>
                    <ListItemText primary="Home" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <SoloIcon />
                    </ListItemIcon>
                    <ListItemText primary="Solo Game Dev" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <TeamIcon />
                    </ListItemIcon>
                    <ListItemText primary="Team Game Dev" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <WorkIcon />
                    </ListItemIcon>
                    <ListItemText primary="Professional" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <ContactIcon />
                    </ListItemIcon>
                    <ListItemText primary="Contact" />
                    </ListItem>
                </List>
                <List className="drawerBottom">
                    <Divider />
                    <ListItem button>
                    <ListItemIcon>
                        <LinkedInIcon />
                    </ListItemIcon>
                    <ListItemText primary="LinkedIn" />
                    </ListItem>
                    <ListItem button>
                    <ListItemIcon>
                        <GitHubIcon />
                    </ListItemIcon>
                    <ListItemText primary="Github" />
                    </ListItem>
                    <img src={ItchIcon} className='outsideIcon' alt="ItchIO" />
                </List>
              </Drawer>
          </div>
      );
    }
}
  