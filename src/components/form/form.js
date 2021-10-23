import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./form.css";
import MyTable from "../table/table";
const baseURL = "https://jsonplaceholder.typicode.com/posts";

export default function Form() {
  const [post, setPost] = useState(null);
  const [name, setName] = useState(null);
  // const [userId, setUserId] = useState(null);
  const [id, setId] = useState(null);
  // const [title, setTitle] = useState(null);
  // const [body, setBody] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:9000`)
      .then((res) => {
        console.log(res.data.data);
        setPost(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);
  if (!post) return " ";
  else {
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
              label="id"
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
              label="name"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              onChange={(e) => {
                setName(e.target.value);
              }}
            ></TextField>
          </Grid>
          {/* <Grid item sm={6}>
            <TextField
              className="marginTextfield"
              label="Title"
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            ></TextField>
          </Grid> */}
          {/* <Grid item sm={6}>
            <TextField
              className="marginTextfield"
              label="Body"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              onChange={(e) => {
                setBody(e.target.value);
              }}
            ></TextField>
          </Grid> */}
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            const body={
              id,
              name
            }
            axios
              .put(`http://localhost:9000`,body)
              .then((res) => {
                // setPost(res.data);
                console.log(res.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Submit
        </Button>
        <br />
        <br />
        <MyTable data={post} />
      </>
    );
  }
}
