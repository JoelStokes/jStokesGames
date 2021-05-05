import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { Typography, AppBar, Toolbar, IconButton, Button, Drawer, MenuItem } from '@material-ui/core';

import {
    Switch,
    Route
} from "react-router-dom";  

import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import ContactIcon from '@material-ui/icons/PermContactCalendar';
import TeamIcon from '@material-ui/icons/GroupWork';
import SoloIcon from '@material-ui/icons/Gamepad';

import SoloAlt from '@material-ui/icons/DeveloperMode';

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
                  <Link to="/home"><MenuItem onTouchTap={this.handleClose}>Home</MenuItem></Link>
                  <Link to="/topics"><MenuItem onTouchTap={this.handleClose}>404</MenuItem></Link>
              </Drawer>
          </div>
      );
    }
}
  