const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('campus', {
    //name
    name: {
        type: Sequelize.STRING,
        //not null
        allowNull: false,
        //not empty
        validate: {
        notEmpty: true
        }
    },
    //image
    imageUrl: {
        type: Sequelize.STRING,
        //defaultValue is alma mater
        defaultValue: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSz6Xey8GsoLJn4Fv55iws4C25i-zANlYNLMg&usqp=CAU'
    },
    //address
    address: {
        type: Sequelize.STRING,
        //not null
        allowNull: false,
        validate: {
        //not empty
        notEmpty: true
        }
    },
    description: {
        //since the text would be longer than 255 characters, .TEXT is best fit
        //for large text
        type: Sequelize.TEXT,
    },
    });
// module.exports = Campuses;
