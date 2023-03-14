import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import axios from "axios";
import { useEffect, useState } from "react";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
export default function ShowStudent() {
  const [studentsList, setstudentsList] = useState([]);

  const deleteStudent = (id) => {
    console.log("id is " + id);
    try {
      axios.delete(`http://localhost:5000/students/${id}`).then(() => {
        window.location.reload(false);
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    axios.get("http://localhost:5000/students").then((allStudents) => {
      setstudentsList(allStudents.data);
    });
  }, []);

  return (
    <>
      <h1>All Students</h1>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Registration Number</TableCell>
              <TableCell align="right">Grade</TableCell>
              <TableCell align="right">Section</TableCell>
              <TableCell align="right">Action</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {studentsList.map((Student, key) => (
              <TableRow
                key={key}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {Student.name}
                </TableCell>
                <TableCell align="right">{Student.regNo}</TableCell>
                <TableCell align="right">{Student.grade}</TableCell>
                <TableCell align="right">{Student.section}</TableCell>
                <TableCell align="right">
                  <IconButton aria-label="delete" size="small">
                    <DeleteIcon
                      fontSize="small"
                      onClick={() => deleteStudent(Student._id)}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
