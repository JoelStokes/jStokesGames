import React from 'react'
import { Typography, Grid, IconButton, Link } from '@material-ui/core';
import '../styles/Main.css'

import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

function Footer() {
    return (
        <div className="Footer">
            <Typography align="center" variant="body2">
                Portfolio Coming Soon!
            </Typography>
            <Grid container 
                spacing={0} 
                direction="row"
                alignItems="center"
                justify="center"
              >
                <Grid item xs={2} lg={1} justify='center' alignContent="center">
                    <IconButton 
                        component={Link}
                        target="_blank" 
                        href="https://www.linkedin.com/in/joel-stokes-2486536b/"
                        style={{    //Trying to set as ClassName not working? Even when marked !important??
                            color: 'inherit',
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <LinkedInIcon/>
                    </IconButton>
                </Grid>
                <Grid item xs={2} lg={1} justify='center' alignContent="center">
                    <IconButton
                        component={Link}
                        target="_blank" 
                        href="https://github.com/jstokesVMASC"
                        style={{
                            color: 'inherit',
                            display: 'flex',
                            alignItems: 'center',
                            flexWrap: 'wrap'
                        }}
                    >
                        <GitHubIcon/>
                    </IconButton>
                </Grid>
            </Grid>
        </div>
    )
}

export default Footer;