const db = require("../Seqelize/Seq");

// Create a new student
// exports.createStudent = async (req, res) => {
//   const { name, age } = req.body;

//   // Debug: Log the received data
//   console.log("Received data: ", { name, age });

//   if (!name || !age) {
//     console.log("Name or Age Missing");
//     return res.status(400).json({
//       error: "Name or Age is missing.",
//     });
//   }

//   try {
//     // Debug: Log the attempt to create a student
//     console.log("Creating a new student record...");

//     // Use the Student model from db object
//     const student = await db.Student.create({ name, age });

//     // Debug: Log the successful creation
//     console.log("Student record created successfully: ", student);

//     return res.json({
//       success: true,
//       student,
//     });
//   } catch (error) {
//     // Debug: Log the error
//     console.error("Error creating student: ", error);

//     return res.status(500).json({
//       error: "An error occurred while creating the student.",
//     });
//   }
// };

exports.createStudent = async (req, res) => {
  const { name, age, email, class: studentClass } = req.body;

  // Debug: Log the received data
  console.log("Received data: ", { name, age, email, class: studentClass });

  if (!name || !age || !studentClass) {
    console.log("Name, Age, or Class Missing");
    return res.status(400).json({
      error: "Name, Age, or Class is missing.",
    });
  }

  try {
    // Debug: Log the attempt to create a student
    console.log("Creating a new student record...");

    // Use the Student model from db object
    const student = await db.Student.create({
      name,
      age,
      email,
      class: studentClass,
    });

    // Debug: Log the successful creation
    console.log("Student record created successfully: ", student);

    return res.json({
      success: true,
      student,
    });
  } catch (error) {
    // Debug: Log the error
    console.error("Error creating student: ", error);

    return res.status(500).json({
      error: "An error occurred while creating the student.",
    });
  }
};

// Get student by ID
exports.getAllStudents = async (req, res) => {
  try {
    // Retrieve all students
    const students = await db.Student.findAll();

    return res.json({
      success: true,
      students,
    });
  } catch (error) {
    console.error("Error fetching students: ", error);
    return res.status(500).json({
      error: "An error occurred while fetching students.",
    });
  }
};

// Update student by ID
exports.getStudentById = async (req, res) => {
  const studentId = req.params.id;

  try {
    // Retrieve the student by ID
    const student = await db.Student.findByPk(studentId);

    if (!student) {
      return res.status(404).json({
        error: "Student not found.",
      });
    }

    return res.json({
      success: true,
      student,
    });
  } catch (error) {
    console.error("Error fetching student: ", error);
    return res.status(500).json({
      error: "An error occurred while fetching the student.",
    });
  }
};


exports.updateStudentById = async (req, res) => {
  const studentId = req.params.id;
  const { name, age, email, class: studentClass } = req.body;

  try {
    // Retrieve the student by ID
    const student = await db.Student.findByPk(studentId);

    if (!student) {
      return res.status(404).json({
        error: "Student not found.",
      });
    }

    // Update student properties
    student.name = name;
    student.age = age;
    student.email = email;
    student.class = studentClass;

    // Save the updated student
    await student.save();

    return res.json({
      success: true,
      student,
    });
  } catch (error) {
    console.error("Error updating student: ", error);
    return res.status(500).json({
      error: "An error occurred while updating the student.",
    });
  }
};

exports.deleteStudentById = async (req, res) => {
  const studentId = req.params.id;

  try {
    // Find the student by ID and delete it
    const deletedStudent = await db.Student.destroy({
      where: { id: studentId },
    });

    if (deletedStudent === 0) {
      // If no student was deleted, it means the student with the given ID doesn't exist
      return res.status(404).json({ error: "Student not found" });
    }

    // Student deleted successfully
    return res.json({ message: "Student deleted successfully" });
  } catch (error) {
    // Handle errors
    console.error("Error deleting student: ", error);
    return res
      .status(500)
      .json({ error: "An error occurred while deleting the student" });
  }
};
