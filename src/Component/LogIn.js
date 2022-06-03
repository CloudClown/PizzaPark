import React from 'react';
import {Box, Button, FormControlLabel, Grid, Paper, TextField, Typography} from "@mui/material";
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-router-dom';

//Image
import noise from "./img/Rectangle.png"
import O from "./img/O.png"

const noiseBox = styled('Box')({
    // backgroundImage: "./img",
});

const useStyles = makeStyles({
    shapeO: {
        width: "90px",
        height: "90px"
    }
});

const ColorButton = styled(Button)(({ theme }) => ({
    color: "#F85433",
    backgroundColor: "#fff",
    width: '197px',
    height: '66px',
    borderRadius: "35px",
    marginTop: '2rem',
    '&:hover': {
        backgroundColor: "##F85433",
        color: "#fff"
    },
}));

const LogIn = () => {
    const classes = useStyles();
  return (
      <>
          <Box sx={{backgroundColor: '#F85433', height: "100vh", zIndex: '1', position: "relative"}}>
              <img src={noise} alt="noise"
                   style={{position: "absolute", zIndex: '2', height: "100vh", width: "100%"}}/>
              <Box style={{zIndex: "3", position: "absolute", right: '23%', top: "30%"}}>
                  <Grid container direction="row"
                        justifyContent="center"
                        alignItems="center">
                      <Grid item>
                          <Typography sx={{
                              textAlign: "left",
                              color: "#fff",
                              fontSize: "30px",
                              fontWeight: "600",
                          }} variant="h3" align="center">So why wait, Create your account <br/> and start making pizza</Typography>
                          <form>
                              <Grid container direction="column">
                                  <TextField id="standard-basic" type="email" label="Enter Your E-mail" variant="standard"  margin="normal"/>
                                  <TextField id="standard-basic" type="password" label="Enter Your Password" variant="standard"  margin="normal"/>
                                  <ColorButton>Log In</ColorButton>
                              </Grid>
                              <Typography sx={{color: "#fff"}} paragraph={true}>Don't have an account?
                                  <Link
                                  to="/signup">
                                  <Button sx={{color: "black"}}>Sign Up</Button>
                              </Link>
                              </Typography>
                          </form>
                      </Grid>
                      <Grid item>

                          <Box style={{color: "#fff", fontSize: "410", position: "relative",
                              top: "9rem", left:"57%", width:"100%"}}>
                              <Fade left>
                                  <Typography sx={{fontSize: "121px", fontWeight: "600"}} variant="h1">Make Pizza</Typography>
                              </Fade>
                              <Fade right>
                                  <Typography sx={{fontSize: "121px", fontWeight: "600", textAlign: "left"}} variant="h1"
                                              align="center">N<img src={O} alt="o" className={classes.shapeO}/>t
                                      War</Typography>
                              </Fade>
                          </Box>
                      </Grid>

                  </Grid>
              </Box>
          </Box>
      </>
  );
};

export default LogIn;
