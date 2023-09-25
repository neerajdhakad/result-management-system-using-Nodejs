var studentdb = require("../model/model");

//Student Controller

exports.studentLogin = async (req, res) => {
  try {
    const studentRollNumber = req.body.rollNumber;
    const studentDOB = req.body.dob;
    const singleStudent = await studentdb.findOne({
      rollNumber: studentRollNumber,
      dob: studentDOB,
    });
    if (!singleStudent) {
      res.render("login", {
        error: "No student found with the given roll number and DOB",
      });
      return;
    }
    res.render("result", { student: singleStudent });
  } catch (error) {
    console.error("Error fetching student:", error);
    res.render("login", {
      error: "An error occurred while fetching student data",
    });
  }
};
