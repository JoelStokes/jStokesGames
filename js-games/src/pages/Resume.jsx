import React, { useState } from 'react'
import { Link, Grid, IconButton, Container, Card, CardMedia, CardContent, Typography, Box } from '@material-ui/core';

import UnityCerts from '../images/UnityCerts.png';
import VMASC from '../images/VMASC.png';

import '../styles/Components.css';

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
                            class="leftImage"
                            style={{ paddingRight: '15px' }}   
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
                        <CardMedia    
                            component="img"
                            image={VMASC}
                            alt="CardMedia Image Example"
                            title="CardMedia Image Example"
                            class="leftImage"
                            style={{ paddingRight: '15px' }}   
                        />
                    <Typography variant="h4" color="textPrimary" gutterBottom>
                        Job History
                    </Typography>
                    <Typography variant="h5" color="textPrimary" gutterBottom>
                        Virginia Modeling, Analysis & Simulation Center
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
            </Grid>
        </Container>    
    )
}

export default Resume;