import React from 'react';
import './Register.css';
import regImg from '../img/reg.png';
// mui
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import SigninIcon from '@mui/icons-material/Login';

const Register = () => {
  return (
    <>
      <div className="container">
        <div className="reg-background"></div>
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6}>
            <div className="form">
              <Grid
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
              >
                <form noValidate autoComplete="off">
                  <Grid item md={6}>
                    <Input placeholder="Email" required />
                  </Grid>
                  <Grid item md={6}>
                    <Input placeholder="Password" required />
                  </Grid>
                </form>
              </Grid>
            </div>
          </Grid>

          <Grid item md={6}>
            <Button variant="contained" startIcon={<SigninIcon />}>
              Send
            </Button>
            <div className="reg-img">
              <img src={regImg} alt="register" className="register-img" />
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Register;
