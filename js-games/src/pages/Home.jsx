import React, { useState } from 'react'
import { Typography, Grid } from '@material-ui/core';
import '../styles/Home.css';

function Home() {

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            className="Grid"
        >
            <Grid item xs={12}>
                <Typography variant="h1" component="h2" className="Title">
                    Joel Stokes   
                </Typography>
                <Typography Typography variant="h4" gutterBottom>
                    Front-End Developer, Game Designer, Programmer
                </Typography>
            </Grid>
        </Grid>
    )
}

export default Home;