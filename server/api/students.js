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
    })
    res.send(student);
  } catch (error) {
    next(error);
  }
});

//POST to create a new students
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Student.create(req.body));
  } catch (error) {
    next(error); 
  }
});

//DETELE to remove student
router.delete('/:id', async (req, res, next) => {
  try {
    const student = await Student.findByPk(req.params.id)
    await student.destroy(req.params.id);
    res.send(student);
  } catch (error) {
    next(error);
  }
})

module.exports = router;
