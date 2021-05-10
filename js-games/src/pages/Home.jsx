import React, { useState } from 'react'
import { Typography, Grid, Fade, Slide } from '@material-ui/core';
import Footer from '../components/Footer'
import '../styles/Home.css';
import Typewriter from 'typewriter-effect/dist/core';

function Home() {
    const [titleFade, setTitleFade] = useState(false);

    const effects = {
        timers: {
            title: 250,
            subtitle: 900,
            menu: 1000
        },
        durations: {
            fade: 1000,
            slide: 750
        }
    }

    const titleTimerElapsed = () => {
        setTitleFade(true);
        setTimeout(subtitleTimerElapsed, effects.timers.subtitle)
    };   
    
    const subtitleTimerElapsed = () => {
    }

    const startType = () => {
        var app = document.getElementById('app');
        var typewriter = new Typewriter(app, {
            loop: false,
            delay: 50,
            autoStart: false
        });   
        typewriter 
        .pauseFor(350)
        .typeString('Front-End Developer & Game Designer')
        .start();
    }

    return (
        <>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justify="center"
                style={{ minHeight: '100vh' }}  //Style not reading properly from Home.css?
                >
                <Grid item xs={12} onload={setTimeout(titleTimerElapsed, effects.timers.title), startType()}>
                    <Slide direction="up" in={titleFade} mountOnEnter unmountOnExit timeout={effects.durations.slide}>
                        <div>
                            <Fade in={titleFade} timeout={effects.durations.fade}>
                                <Typography variant="h1" component="h3" className="Title" style={{textAlign: 'center'}}>
                                    Joel Stokes   
                                </Typography>
                            </Fade>
                        </div>
                    </Slide>
                </Grid>
                <Grid item xs={12}>
                    <Typography component="h4" variant="h6" gutterBottom>
                        <div id="app" style={{
                                  textAlign: 'center'
                        }}/>
                    </Typography>
                </Grid>
            </Grid>
            <Footer/>
        </>
    )
}

export default Home;