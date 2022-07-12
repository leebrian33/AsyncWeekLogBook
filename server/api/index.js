"use strict";

const router = require("express").Router();



//grabbing route from students.js
router.use('/students', require('./students'));
//grabbing route from campuses.js
router.use('/campuses', require('./campuses'))

router.use((req, res, next) => {
  const err = new Error("API route not found!");
  err.status = 404;
  next(err);
});

module.exports = router;
