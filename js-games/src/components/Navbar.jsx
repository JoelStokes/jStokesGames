import React, { useState } from 'react'
import { Typography, AppBar, Toolbar, IconButton, Button, Drawer, Link, MenuItem } from '@material-ui/core';

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import LeftDrawer from './LeftDrawer';
class Navbar extends React.Component {
    constructor(props){
      super(props);
  
      this.state = {
        open: false
      };
      this.toggleDrawer = this.toggleDrawer.bind(this);
      this.handleClose = this.handleClose.bind(this);
    }
  
    toggleDrawer(){
      this.setState({
        open: !this.state.open
      });
    }
  
    handleClose(){
      this.setState({open: false})
    }
  
    render(){
      return (
        <div className='nav-bar'>
            <AppBar>
                <Toolbar>
                    <IconButton edge="start" onClick={this.toggleDrawer} color="inherit" aria-label="menu">
                        <ArrowBackIcon />
                    </IconButton>
                    <Typography variant="h6">
                        Navigation
                    </Typography>
                </Toolbar>
            </AppBar>
            <LeftDrawer open={this.state.open} handleClose={this.handleClose} onToggleDrawer={this.toggleDrawer} />
        </div>
      );
    }
}

export default Navbar;