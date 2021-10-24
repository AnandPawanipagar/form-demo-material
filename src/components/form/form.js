import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./form.css";
const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function Form() {
    return (
      <>
        <Grid container spacing={1}>
          <Grid item xs={12} className="marginBottom">
            <Typography variant="h4" color="initial">
              Registration Form
            </Typography>
          </Grid>

          <Grid item sm={6}>
            <TextField
              className="marginTextfield"
              label="Id"
              variant="outlined"
              color="secondary"
              fullWidth
              required
            ></TextField>
          </Grid>
          <Grid item sm={6}>
            <TextField
              className="marginTextfield"
              label="Name"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              
            ></TextField>
          </Grid>  
        </Grid>
        <Button
          variant="contained"
          color="secondary"
        
        >
          Submit
        </Button>
      </>
    );
  }

