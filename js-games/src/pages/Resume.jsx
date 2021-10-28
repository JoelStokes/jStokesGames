import React, { useState } from 'react'
import { Link, Grid, IconButton, Container, Card, CardMedia, CardContent, Typography, Box, List, ListItem, ListItemAvatar, Avatar } from '@material-ui/core';

import UnityCerts from '../images/UnityCerts.png';
import VMASC from '../images/VMASC.png';
import Merieux from '../images/EnviroMap.png'

import '../styles/Components.css';

import GitHubIcon from '@material-ui/icons/GitHub';
import CodeIcon from '@material-ui/icons/Code';
import PhoneAndroidIcon from '@material-ui/icons/PhoneAndroid';

function Resume() {
    return(
        <Container className="PageBody">
            <Grid
                  container
                  spacing={0}
                  direction="column"
                  alignItems="center"
                  justify="center"
                  style={{ minHeight: '100vh', maxWidth: '75vw'}}                
                >
                <Card>
                    <CardContent>
                        <CardMedia    
                            component="img"
                            image={UnityCerts}
                            alt="CardMedia Image Example"
                            title="CardMedia Image Example"
                            class="leftBox"
                            style={{  paddingRight: '15px' }}   
                        />
                    <Typography variant="h4" color="textPrimary" gutterBottom>
                        Unity Certified
                    </Typography>
                    <Typography variant="h7" color="textSecondary" gutterBottom>
                    <p>
                        Recieved official certifications for <Link href="https://www.credly.com/badges/54652b73-2c5d-4a00-9e9c-8894db2832ec">Unity Certified Professional: Programmer</Link> and <Link href="https://www.credly.com/badges/60648611-14d1-4766-af78-cafd8075dbda/linked_in_profile">Unity Certified Associate: Game Developer</Link>
                    </p>

                    <p>
                        Over 6 years of Unity experience through Solo, Team, & Contract projects across 2D, 3D, & VR
                    </p>
                    </Typography>

                    </CardContent>
                </Card>
                <Box style={{padding: '5px'}}/>
                <Card>
                    <CardContent>
                        <Box class='leftImage'>
                            <CardMedia    
                                component="img"
                                image={VMASC}
                                alt="CardMedia Image Example"
                                title="CardMedia Image Example"
                                class="leftBox"
                                style={{  paddingRight: '15px' }}   
                            />
                        </Box>
                    <Typography variant="h4" color="textPrimary" gutterBottom>
                        Front-End Developer
                    </Typography>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                        Virginia Modeling, Analysis & Simulation Center
                    </Typography>
                    <Typography variant="h7" color="textSecondary" gutterBottom>
                    January 2020 - Current

                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <GitHubIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                Strong use of Agile development with Project Management using Github, Jira, & Monday
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CodeIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                Created Unity projects ranging from VR Echolocation & Flight Simulators to Naval Training UI
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PhoneAndroidIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                Worked as Lead Developer for the Datacube Companion Mobile App
                            </ListItem>
                        </List>
                    </Typography>
                    </CardContent>
                </Card>
                <Box style={{padding: '5px'}}/>
                <Card>
                    <CardContent>
                        <Box class='leftImage'>
                            <CardMedia    
                                component="img"
                                image={Merieux}
                                alt="CardMedia Image Example"
                                title="CardMedia Image Example"
                                class="leftBox"
                                style={{  paddingRight: '15px' }}   
                            />
                        </Box>
                    <Typography variant="h4" color="textPrimary" gutterBottom>
                        Software Developer
                    </Typography>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                        Mérieux Nutriscience: EnviroMap
                    </Typography>
                    <Typography variant="h7" color="textSecondary" gutterBottom>
                    Fall 2017 – October 2019

                        <List>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <GitHubIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                Strong use of Agile development with Project Management using Github, Jira, & Monday
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <CodeIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                Created Unity projects ranging from VR Echolocation & Flight Simulators to Naval Training UI
                            </ListItem>
                            <ListItem>
                                <ListItemAvatar>
                                    <Avatar>
                                        <PhoneAndroidIcon />
                                    </Avatar>
                                </ListItemAvatar>
                                Worked as Lead Developer for the Datacube Companion Mobile App
                            </ListItem>
                        </List>
                    </Typography>
                    </CardContent>
                </Card>
            </Grid>
        </Container>    
    )
}

export default Resume;