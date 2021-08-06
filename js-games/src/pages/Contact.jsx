import React, { useState } from 'react'
import { List, Link, ListItem, ListItemIcon, ListItemText, Drawer, Divider, Button, Grid, Icon, IconButton, Container, Card, CardContent, Typography } from '@material-ui/core';
 
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import ItchIcon from '../images/itch-io-icon.svg';

import '../styles/Main.css';

function Contact() {
    return(
        <Container className="PageBody">
            <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: '100vh', maxWidth: '75vw' }}                
                >
                <Card>
                    <Typography variant="h5" color="textSecondary" gutterBottom>
                        Word of the Day
                    </Typography>
                    <CardContent>
                        Here's some example text to write here for the time being!

                        admin@jstokesgames.com
                    </CardContent>
                    <IconButton
                        component={Link}
                        target="_blank" 
                        href="https://www.linkedin.com/in/joel-stokes-2486536b/"
                        style={{ color: 'inherit'}}>
                        <LinkedInIcon/>
                    </IconButton>
                    <IconButton
                        component={Link}
                        target="_blank" 
                        href="https://github.com/jstokesVMASC"
                        style={{ color: 'inherit'}}>
                        <GitHubIcon/>
                    </IconButton>
                </Card>
            </Grid>
        </Container>    
    )
}

export default Contact;

/*  ##Future addition of Itch Io page will go here if playable games are added to it
            <IconButton
                component={Link}
                target="_blank" 
                href="https://jstokesgames.itch.io/"
                style={{ color: 'inherit'}}>
                <Icon className='iconHolder'>
                    <img src={ItchIcon} className='outsideIcon'/>
                </Icon>
            </IconButton>
*/