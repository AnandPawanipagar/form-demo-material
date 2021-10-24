import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./form.css";

export default function Form() {
 
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios
      .get("http://localhost:9000")
      .then((res) => {
        console.log(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  console.log(id);
  console.log(name);
  return (
    <>
      <Grid container spacing={1}>
        <Grid item xs={12} className="marginBottom">
          <Typography variant="h4" color="initial">
            Registration Form
          </Typography>
        </Grid>
        {/* <div>{id}</div> */}
        <Grid item sm={6}>
          <TextField
            className="marginTextfield"
            label="Id"
            variant="outlined"
            color="secondary"
            fullWidth
            required
            onChange={(e) => {
              setId(e.target.value);
            }}
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
            onChange={(e) => {
              setName(e.target.value);
            }}
          ></TextField>
        </Grid>
      </Grid>
      <Button
        variant="contained"
        color="secondary"
        onClick={() => {
          axios
            .put("http://localhost:9000", {
              id,
              name,
            })
            .then((res) => {
              console.log(res.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        Update
      </Button>
    </>
  );
}
