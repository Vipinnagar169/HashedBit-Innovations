const db = require("../db");

//  Get all students
exports.getStudents = async (req, res) => {
  try {
    const [results] = await db.query("SELECT * FROM students");
    res.json(results);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Create a new student
exports.createStudent = async (req, res) => {
  const { name, email, overall_marks, age } = req.body;

  //  Auto calculate percentage
  const percentage = (overall_marks / 500) * 100;

  const query = `
    INSERT INTO students (name, email, overall_marks, percentage, age)
    VALUES (?, ?, ?, ?, ?)
  `;

  try {
    await db.query(query, [name, email, overall_marks, percentage, age]);
    res.status(201).json({ message: "Student added successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Update student
exports.updateStudent = async (req, res) => {
  const { id } = req.params;
  const { name, email, overall_marks, age } = req.body;

  //  Recalculate percentage
  const percentage = (overall_marks / 500) * 100;

  const query = `
    UPDATE students
    SET name = ?, email = ?, overall_marks = ?, percentage = ?, age = ?
    WHERE student_id = ?
  `;

  try {
    const [result] = await db.query(query, [
      name,
      email,
      overall_marks,
      percentage,
      age,
      id,
    ]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found." });
    }

    res.json({ message: "Student updated successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

//  Delete student
exports.deleteStudent = async (req, res) => {
  const { id } = req.params;

  const query = "DELETE FROM students WHERE student_id = ?";

  try {
    const [result] = await db.query(query, [id]);

    if (result.affectedRows === 0) {
      return res.status(404).json({ message: "Student not found." });
    }

    res.json({ message: "Student deleted successfully." });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
