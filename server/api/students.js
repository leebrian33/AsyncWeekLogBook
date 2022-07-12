const router = require('express').Router()
const {Student} = require('../db')

// GET /api/students
router.get('/', async (req, res, next) => {
  try {
    const students = await Student.findAll()
    //res.json/res.send?
    res.send(students)
  }
  catch (error) {
    next(error)
  }
});

module.exports = router