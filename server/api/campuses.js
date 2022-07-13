const router = require('express').Router()
const {Campus} = require('../db')
const { Student } = require("../db");

// GET /api/campuses
router.get('/', async (req, res, next) => {
  try {
    const campuses = await Campus.findAll()
    //res.json/res.send?
    res.send(campuses)
  }
  catch (error) {
    next(error)
  }
});

// GET /api/campuses/:campusId
router.get('/:campusId', async (req, res, next) => {
  try {
    const campus = await Campus.findAll({
      where: {
        id: req.params.campusId
      },
      include: Student 
    })
    res.send(campus)
  }
  catch (error) {
    next(error)
  }
})


module.exports = router