import React from "react";
import { Grid } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
// import Box from "@material-ui/core/Box";
import "./form.css";

export default function Form() {
  return (
    <>
      <Grid container>
        <Grid item xs={12} className="marginBottom">
          <Typography variant="h4" color="initial">
            Registration Form
          </Typography>
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
          <TextField
            className="marginTextfield"
            label="Contact number"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          ></TextField>
        </Grid>
        <Grid item sm={6}>
          <TextField
            className="marginTextfield"
            label="Address"
            variant="outlined"
            color="secondary"
            fullWidth
          ></TextField>
          <TextField
            className="marginTextfield"
            label="Email"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          ></TextField>
        </Grid>
      </Grid>
    </>
  );
}
