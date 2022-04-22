import React from 'react';
import {Box, Button, FormControlLabel, Grid, Link, Paper, TextField, Typography} from "@mui/material";
import { styled } from '@mui/system';
import { makeStyles } from '@mui/styles';

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
    '&:hover': {
        backgroundColor: "##F85433",
        color: "#fff"
    },
}));


const SignUp = () => {
    const classes = useStyles();

  return (
    <>
      <Box sx={{backgroundColor: '#F85433', height: "100vh"}} >
          <Box>
          <Grid container direction="row"
                justifyContent="center"
                alignItems="center">
              <Grid item>
                  <Box style={{color:"#fff", fontSize: "410"}}>
                      <Typography sx={{fontSize: "96px", fontWeight: "600", textAlign:"left"}} variant="h1" align="center">Make Pizza</Typography>
                      <Typography sx={{fontSize: "96px", fontWeight: "600", textAlign:"left"}} variant="h1" align="center">N<img  src={O} alt="o" className={classes.shapeO}/>t War</Typography>
                  </Box>
              </Grid>
              <Grid item>
                  <Typography sx={{textAlign:"left" ,color:"#fff" ,fontSize: "30px", fontWeight: "600"}} variant="h3" align="center">So why wait, Create your account <br/> and start making pizza</Typography>
                  <form>
                      <Grid container direction="column">
                      <TextField id="standard-basic" label="Enter Your Name" variant="standard"/>
                      <TextField id="standard-basic" label="Enter Your E-mail" variant="standard"/>
                      <TextField id="standard-basic" label="Enter Your Password" variant="standard"/>
                          <ColorButton>Create My Account</ColorButton>
                      </Grid>
                      <Typography sx={{color: "#fff"}} paragraph={true}>Already have an account?<Link to="/login">
                          <Button sx={{color:"black"}}>Log In</Button>
                      </Link></Typography>
                  </form>
              </Grid>
          </Grid>
          </Box>
      </Box>
    </>
  );
};

export default SignUp;
