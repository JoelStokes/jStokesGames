import React, { useState } from 'react'
import { Card, CardContent, CardMedia, CardHeader, Grid, Paper } from '@material-ui/core';
import ReactPlayer from 'react-player'
import '../styles/Main.css';

function Games() {   //Back to Top FAB would be great here 
    //https://material-ui.com/components/app-bar/#back-to-top
    return(
        <div style={{flexGrow: '1'}}>
            <Grid container 
                spacing={3} 
                className={'HeaderSpacing'}
                justify="center"
                >
                <Grid item xs={12} sm={5}>
                    <Card className={'CardBody'}>
                        <CardHeader
                                title="Solo Project Sizzle Reel"
                                subheader="Collection of solo game development projects, from game jams to hobby work"
                        />
                        <CardMedia>
                            <ReactPlayer url='https://www.youtube.com/watch?v=16wNqzxWWlg' style={{padding:'5px'}} />
                        </CardMedia>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={5}>
                    <Card className={'CardBody'}>
                        <CardContent>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Cras pulvinar pretium augue, a imperdiet tellus suscipit et. Maecenas mollis neque non eros interdum posuere. Donec mollis nisl eget nisi congue, sit amet efficitur dolor malesuada. Aliquam a erat accumsan, aliquam magna congue, ultricies justo. Vivamus sollicitudin urna quam, eget finibus orci blandit sit amet. Suspendisse eleifend convallis nunc, consectetur porttitor mi iaculis sed. Vivamus mattis orci ut ante vulputate, vel tempus lorem condimentum. Aliquam ut scelerisque purus, et finibus felis. Morbi eleifend, lacus eu posuere tempor, mauris sapien vehicula urna, ut vehicula lectus risus ac nunc.
                            <br/>
                            In rhoncus nisi id tellus fringilla gravida. Ut suscipit tempor turpis at interdum. Fusce eu volutpat lacus. Ut a vehicula nunc. Etiam a tempor justo, ut ullamcorper sem. Aenean facilisis mauris et tortor fermentum varius. Nullam a felis tristique, commodo massa eu, ultrices lectus. In a massa blandit, faucibus est id, tincidunt felis.
                            <br/>
                            Mauris non magna eu felis laoreet dictum et in odio. Integer eu euismod ex, ut interdum massa. Nullam eget euismod enim, a molestie ligula. Integer scelerisque est non enim dapibus, non egestas justo aliquet. Praesent eu lacus efficitur, imperdiet nisl a, vehicula lacus. Cras eu turpis accumsan lorem blandit eleifend. Vivamus neque ligula, fermentum vitae magna in, eleifend iaculis tellus. Nunc interdum egestas nisl, id vehicula dui ultrices ut. Suspendisse porttitor, nunc at egestas volutpat, quam quam viverra est, laoreet molestie mi ligula quis diam. Nulla eget turpis vitae dolor efficitur euismod. Nulla rutrum turpis ut luctus scelerisque.
                            <br/>
                            Aenean dictum felis vitae lacinia tincidunt. Pellentesque nisl purus, aliquam sed sagittis at, aliquam at ex. Proin tempus mi neque, nec finibus libero sollicitudin pulvinar. Morbi porta consequat pretium. Phasellus mattis, urna eget sodales egestas, lectus est porta tortor, id auctor eros est eu justo. Etiam egestas libero posuere nisi sodales venenatis. Etiam gravida tristique tincidunt. Ut in facilisis leo, id posuere ligula. Praesent cursus, arcu non ultricies molestie, nulla est efficitur erat, vel tempor elit lectus in libero. Duis sit amet pellentesque metus, et blandit elit. In hac habitasse platea dictumst.
                            <br/>
                            Cras ac libero sagittis, suscipit leo non, vestibulum eros. Donec id ex leo. Mauris pellentesque at mi id blandit. Sed accumsan vulputate felis, a maximus ligula interdum vel. Phasellus nisi libero, pharetra at faucibus ut, ultrices non dolor. Proin tempor, turpis nec accumsan consectetur, nunc sem ultricies nulla, dapibus tristique turpis massa sit amet ipsum. Maecenas vitae nulla id eros elementum auctor ut suscipit eros.
                        </CardContent>
                    </Card>
                </Grid>
            </Grid>
        </div>
    )
}

export default Games;