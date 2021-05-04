import React, { useState } from 'react'
import { Typography, Grid, Fade, Slide } from '@material-ui/core';
import '../styles/Home.css';

function Home() {
    const [titleFade, setTitleFade] = useState(false);
    const [subtitleFade, setSubtitleFade] = useState(false);

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
        setSubtitleFade(true);
    }

    return (
        <Grid
            container
            spacing={0}
            direction="column"
            alignItems="center"
            justify="center"
            style={{ minHeight: '100vh' }}  //Style not reading properly from Home.css?
            >
            <Grid item xs={12} onload={setTimeout(titleTimerElapsed, effects.timers.title)}>
                <Slide direction="up" in={titleFade} mountOnEnter unmountOnExit timeout={effects.durations.slide}>
                    <div>
                        <Fade in={titleFade} timeout={effects.durations.fade}>
                            <Typography variant="h1" component="h3" className="Title">
                                Joel Stokes   
                            </Typography>
                        </Fade>
                    </div>
                </Slide>
            </Grid>
            <Grid item xs={12}  /*2nd Grid Slide causing 1st to readjust?*/>
                <Slide direction="up" in={subtitleFade} mountOnEnter unmountOnExit timeout={effects.durations.slide}>
                    <div>
                        <Fade in={subtitleFade} timeout={effects.durations.fade}>
                            <Typography Typography variant="h4" component="h5" gutterBottom>
                                Front-End Developer, Game Designer, Programmer
                            </Typography>
                        </Fade>
                    </div>
                </Slide>
            </Grid>
        </Grid>
    )
}

export default Home;