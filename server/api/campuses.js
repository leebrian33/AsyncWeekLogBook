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

//POST to create a new campus
router.post('/', async (req, res, next) => {
  try {
    res.status(201).send(await Campus.create(req.body));
  } catch (error) {
    next(error); 
  }
});
// PUT /api/campuses/:id
router.put('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id);
    res.send(await campus.update({name: req.body.name, address:req.body.address}));
  } catch (error) {
    next(error);
  }
});
//DETELE to remove campus
router.delete('/:id', async (req, res, next) => {
  try {
    const campus = await Campus.findByPk(req.params.id)
    await campus.destroy(req.params.id);
    res.send(campus);
  } catch (error) {
    next(error);
  }
})

module.exports = router