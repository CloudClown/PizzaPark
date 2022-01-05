import React from 'react';
import './Register.css';
import regImg from '../img/reg.png';
// mui
import Input from '@mui/material/Input';
import Grid from '@mui/material/Grid';

const Register = () => {
  return (
    <>
      <div className="container">
        <Grid
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
        >
          <Grid item md={6}>
            <div className="circle">here will be circle</div>
            <div className="reg-img">
              <img src={regImg} alt="register" />
            </div>
          </Grid>

          <Grid item md={6}>
            <div className="form">
              <form noValidate autoComplete="off">
                <Input placeholder="Email" required />
                <Input placeholder="Password" required />
              </form>
            </div>
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Register;
