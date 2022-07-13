// The purpose of this module is to bring your Sequelize instance (`db`) together
// with your models, for which you'll find some blank files in this directory:

const db = require('./database')
const Student = require('./student')
const Campus = require('./campus')


//Campuses can have many students
Campus.hasMany(Student)
//students can have ONE campus
Student.belongsTo(Campus);

module.exports = {
  // Include your models in this exports object as well!
  db,
  Student,
  Campus,
}
