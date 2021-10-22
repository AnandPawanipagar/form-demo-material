import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./form.css";
import MyTable from "../table/table";
const baseURL = "https://jsonplaceholder.typicode.com/users";

export default function Form() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios
      .get(`${baseURL}`)
      .then((res) => {
        console.log(res.data);
        setPost(res.data);
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
              label="Name"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              onChange={(e) => {
                console.log(e.target.value);
                post.name = e.target.value;
                setPost({ ...post });
                console.log(post);
              }}
            ></TextField>
          </Grid>
          <Grid item sm={6}>
            <TextField
              className="marginTextfield"
              label="Contact number"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              onChange={(e) => {
                post.phone = e.target.value;
                setPost({ ...post });
                console.log(post);
              }}
            ></TextField>
          </Grid>
          <Grid item sm={6}>
            <TextField
              className="marginTextfield"
              label="User Id"
              variant="outlined"
              color="secondary"
              fullWidth
              onChange={(e) => {
                post.id = e.target.value;
                setPost({ ...post });
                console.log(post);
              }}
            ></TextField>
          </Grid>
          <Grid item sm={6}>
            <TextField
              className="marginTextfield"
              label="Email"
              variant="outlined"
              color="secondary"
              fullWidth
              required
              onChange={(e) => {
                post.email = e.target.value;
                setPost({ ...post });
                console.log(post);
              }}
            ></TextField>
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="secondary"
          // onClick={() => {
          //   axios
          //     .put(`${baseURL}/1`,)
          //     .then((res) => {
          //       setPost(res.data);
          //       console.log(res.data);
          //     })
          //     .catch((error) => {
          //       console.log(error);
          //     });
          // }}
        >
          Submit
        </Button>
        <br/>
        <br/>
        <MyTable data={post}/>
      </>
    );
  }
}
