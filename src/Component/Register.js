import React from 'react';
import './Register.css';
import regImg from '../img/reg.png';
// mui
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SigninIcon from '@mui/icons-material/Login';
import {TextField} from "@mui/material";
import Typography from '@mui/material/Typography';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    rightSec: {
        "width": '690px',
        "height": '670px',
        "display": "flex",
        "flex-direction": "column",
        "justify-content": "center",
        "align-items": "center",
    },
    regImg: {
        width: '460px',
        height: '380px',
    }
})

const Register = () => {
    const classes = useStyles();
  return (
    <>
     <Grid container spacing={2} direction="row" justifyContent="center" alignItems="center">
        <Grid item md={6}>
            <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
            >

                <form>
                  <Grid item>
                    <TextField margin="dense"  label="First Name" variant="outlined" />
                  </Grid>
                  <Grid item>
                    <TextField margin="dense" label="Last Name" variant="outlined" />
                  </Grid>
                  <Grid item>
                    <TextField margin="dense" label="Email" variant="outlined" />
                  </Grid>
                  <Grid item>
                    <TextField margin="dense" label="Password" variant="outlined" />
                  </Grid>
                  <Grid item>
                    <TextField margin="dense" label="Confirm" variant="outlined" />
                  </Grid>
                </form>

            </Grid>
        </Grid>
       <Grid item md={6}>
           <div className={classes.rightSec}>
         <Typography variant="h3">One of Us ?</Typography>
         <Typography variant="subtitle1">We Provide Medical Services Like Video Consultation, Online COVID_19 Care & Blood Management System. You Can Contact Us Through WhatsApp or Our Email Provided On About Section.</Typography>
         <Button variant='outlined'>Button for icon and svg</Button>
           <img className={classes.regImg} src={regImg} />
           </div>
       </Grid>
     </Grid>
    </>
  );
};

export default Register;
