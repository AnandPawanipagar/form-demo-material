import React from "react";
import { Grid } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
// import Box from "@material-ui/core/Box";
const useStyles = makeStyles({
  field: {
    margin: 10,
    
  },
});
export default function Form() {
  const classes = useStyles();
  return (
    <>
      <Grid container >
        <Grid item xs={12}>
          <Typography variant="h4" color="initial" className={classes.field}>
            Registration Form
          </Typography>
        </Grid>

        <Grid item sm={6}>
          <TextField
            className={classes.field}
            label="Name"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          ></TextField>
          <TextField
            className={classes.field}
            label="Contact number"
            variant="outlined"
            color="secondary"
            fullWidth
            required
          ></TextField>
        </Grid>
        <Grid item sm={6}>
          <TextField
            className={classes.field}
            label="Address"
            variant="outlined"
            color="secondary"
            fullWidth
          ></TextField>
          <TextField
            className={classes.field}
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
