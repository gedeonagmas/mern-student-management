import * as React from "react";
import { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import axios from "axios";
export default function Create() {
  const [name, setname] = useState("");
  const [regNo, setregNo] = useState(0);
  const [grade, setgrade] = useState("");
  const [section, setsection] = useState("");
  const createStudent = async () => {
    console.log(name + " " + grade + " " + section + " " + regNo);
    if (isNaN(name) && isNaN(grade) && isNaN(section) && name && grade && section)
      try {
        const config = {
          headers: {
            "Content-type": "application/json",
          },
        };
        const { data } = await axios.post(
          "http://localhost:5000/students",
          {
            regNo,
            name,
            grade,
            section,
          },
          config
        );
        window.location.reload(false);
        console.log(data);
      } catch (e) {
        console.log(e.message);
      }
    else if(!name || !grade || !section) {
      alert("Pleae enter all the values");  
    }
    else{
      alert("Please Enter String Values");
    }
  };

  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <>
        <h2>Create Student</h2>
        <TextField
          id="outlined-basic"
          label="Registration Number"
          variant="outlined"
          type="number"
          onChange={(e) => setregNo(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Name"
          variant="outlined"
          type="string"
          onChange={(e) => setname(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Grade"
          variant="outlined"
          onChange={(e) => setgrade(e.target.value)}
        />
        <TextField
          id="outlined-basic"
          label="Section"
          variant="outlined"
          onChange={(e) => setsection(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={createStudent}>
          Create Student
        </Button>
      </>
    </Box>
  );
}
