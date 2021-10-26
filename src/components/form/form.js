import React, { createContext, useState, useEffect } from "react";
import { Grid } from "@material-ui/core/";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/styles";
import TextField from "@material-ui/core/TextField";
import axios from "axios";
import Button from "@material-ui/core/Button";
import "./Form.css";
import Table from "../table/table";
// const baseURL = "https://jsonplaceholder.typicode.com/posts";
export const GlobalContext = createContext();
const Form = () => {
  const [data, setData] = useState(null);
  const [name, setName] = useState(null);
  const [id, setId] = useState(null);
  useEffect(() => {
    axios
      .get(`http://localhost:9000`)
      .then((res) => {
        console.log(res.data.data);
        setData(res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (!data) return " ";
  else {
    return (
      <GlobalContext.Provider value={[data, setData]}>
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
            const body = {
              id,
              name,
            };
            
            axios
              .put(`http://localhost:9000`, body)
              .then((res) => {
                const onlyId=data.map((obj)=>{
                  return obj.id;
                })
                // console.log( typeof id,"<-id")
                const matchedIndex=onlyId.indexOf(Number(id));
                if(matchedIndex===-1){
                  window.alert("id not found");
                }else{
                  data[matchedIndex].name=name;
                  setData([...data]);
                }

                
                
                
                console.log(res.data);
                console.log(data)

              })
              .catch((error) => {
                console.log(error);
              });
          }}
        >
          Update
        </Button>

        <br />
        <br />
        <Table data={data} />
      </GlobalContext.Provider>
    );
  }
};
export default Form;
