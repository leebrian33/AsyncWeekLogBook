const router = require("express").Router();
const { Student } = require("../db");
const {Campus} = require('../db')

// GET /api/students
router.get("/", async (req, res, next) => {
  try {
    const students = await Student.findAll();
    //res.json/res.send?
    res.send(students);
  } catch (error) {
    next(error);
  }
});

// GET /api/students/:studentId
router.get("/:studentId", async (req, res, next) => {
  try {
    const student = await Student.findAll({
      where: {
        id: req.params.studentId
      },
      include: Campus
      // ,{
      //   where:{
      //     id: campusId,
      //   }
      // }
    })
    res.send(student);
  } catch (error) {
    next(error);
  }
});

module.exports = router;
