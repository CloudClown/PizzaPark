import React from 'react';
import { useState, useEffect } from 'react';
import headerPizza from "./img/headerPizza.png";
import bgPizza from "./img/Vector.png";
import Rotate from 'react-reveal/Rotate';
import Fade from 'react-reveal/Fade';



import Container from '@mui/material/Container';
import {Box, Button, Grid, Typography} from "@mui/material";
import {styled} from "@mui/styles";

const StyledGrid = styled(Grid)(({theme}) => ({
    alignContent: "center",
    alignItems: "center",
    direction: "row",
    padding: theme.spacing(10)
}));

const NavBtnStyle = styled(Button)(({theme}) => ({
    color: 'black', display: 'inline-block'
}));

const LandingPage = () => {
    return (
        <>
                <Container >
                    <Grid container direction="row" justifyContent="space-between" alignItems="center">
                        <Grid item>
                            {/*<img src={"/public/"} alt="Logo" height={400} style={{width: '80%', paddingRight: '1rem'}}/>*/}
                            <Typography variant={"h5"}>Pizz<span style={{color: "red"}}>Park</span></Typography>
                        </Grid>
                        <Grid item>
                            <NavBtnStyle >One</NavBtnStyle>
                            <NavBtnStyle>two</NavBtnStyle>
                            <NavBtnStyle>three</NavBtnStyle>
                            <NavBtnStyle>four</NavBtnStyle>
                        </Grid>
                        <Grid item>
                            <Button variant={"outlined"} sx={{ marginRight: "1rem" }}>Sign-Up</Button>
                            <Button variant={"outlined"}>Sign-In</Button>
                        </Grid>
                    </Grid>
                </Container>

            <Box sx={{ height: "768px", mt: "8rem"}}>
                <Grid container direction="row" justifyContent="center" alignItems="center" sx={{width:"85%"}}>
                    <Grid item>
                        <Typography variant={"h1"}>Create Your <br/><span style={{color: "red"}}>Delicious Pizza</span></Typography>
                        <Typography paragraph={true}>Create Your Pizza with love and passion. Choose your finest ingredients and make that happen. </Typography>
                        <Button>Start Making Pizza</Button>
                        <Button>Learn More</Button>
                    </Grid>
                    <Grid item>
                        <Box  style={{position: "relative", top:"0", left:"0"}}>
                            <Fade right>
                                <img src={bgPizza} alt="pizza" style={{position: "absolute",left: "35.4rem", width: "27rem"}}/>
                            </Fade>
                        </Box>
                        <Box style={{position: "relative"}} >
                            <Rotate  left>
                                <img src={headerPizza} alt="pizza" style={{position:"relative", left:"22rem", top:"7rem", width: "30rem"}}/>
                            </Rotate>
                       </Box>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
}

export default LandingPage;