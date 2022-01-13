import React from 'react';
import './Register.css';
import regImg from '../img/reg.png';
// mui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {TextField} from "@mui/material";
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';
import Container from '@mui/material/Container';

const useStyles = makeStyles({
    rightSec: {
        "width": '690px',
        "height": '770px',
        "display": "flex",
        "flex-direction": "column",
        "align-items": "center",
        "margin-left": "10rem",
},
    regImg: {
        width: '760px',
        height: '680px',
    },
    formWidth: {
        width: "30rem",
    },
    rightH3: {
        padding: "1rem",
    },rightBtn: {
        padding: "1rem",
    },rightPar: {
        padding: "1rem",
    }
})

const Register = () => {
    const classes = useStyles();
  return (
    <>
        <div className="cont" />
     <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <Grid item md={6}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >
                <Typography variant="h3">Sign Up</Typography>
                <form>
                  <Grid item>
                    <TextField className={classes.formWidth} margin="dense"  label="First Name" variant="outlined" />
                  </Grid>
                  <Grid item>
                    <TextField className={classes.formWidth} margin="dense" label="Last Name" variant="outlined" />
                  </Grid>
                  <Grid item>
                    <TextField className={classes.formWidth} margin="dense" label="Email" variant="outlined" />
                  </Grid>
                  <Grid item>
                    <TextField className={classes.formWidth} margin="dense" label="Password" variant="outlined" />
                  </Grid>
                  <Grid item>
                    <TextField className={classes.formWidth} margin="dense" label="Confirm" variant="outlined" />
                  </Grid>
                </form>

            </Grid>
        </Grid>
       <Grid item md={6}>

           <div className={classes.rightSec}>
         <Typography className={classes.rightH3} variant="h3">One of Us ?</Typography>
         <Typography className={classes.rightPar} variant="subtitle1">We Provide Medical Services Like Video Consultation, Online COVID_19 Care & Blood Management System. You Can Contact Us Through WhatsApp or Our Email Provided On About Section.</Typography>
         <Button className={classes.rightBtn} variant='outlined'>Button for icon and svg</Button>
           <img className={classes.regImg} src={regImg} />
           </div>

       </Grid>
     </Grid>

    </>
  );
};

export default Register;
