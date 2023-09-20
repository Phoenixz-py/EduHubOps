const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./Model/student');
const studentRoutes = require('./Routes/studentRoutes');

const app = express();
const PORT = process.env.PORT || 3307;

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/api/students', studentRoutes.createStudent);
app.get('/api/Allstudents', studentRoutes.getAllStudents);
app.get('/api/students/:id', studentRoutes.getStudentById); // Get a student by ID
app.put('/api/students/:id', studentRoutes.updateStudentById);
app.delete('/api/del/students/:id', studentRoutes.deleteStudentById);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });

