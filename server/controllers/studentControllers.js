import student from "../models/studentModels.js";

export const getStudents = async (req, res) => {
  try {
    const allStudents = await student.find();
    res.status(200).json(allStudents);
  } catch (e) {
    res.status(404).json({ message: e.message });
  }
};

export const createStudent = async (req, res) => {
  try {
    const studentData = req.body;
    console.log("Trying to create");
    console.log(studentData);
    const newStudent = new student(studentData);
    await student.create(newStudent);
    res.status(201).json({
      message: "Student data created",
      newStudent,
    });
  } catch (e) {
    res.status(409).json({
      error: "Can't create",
      message: e.message,
    });
  }
};


export const deleteStudent=async(req,res)=>{
  try {
    await student.findByIdAndDelete(req.params.id).exec();
    res.send("Successfully Deleted");
  } catch (e) {
    console.log(e.message);
  }
}