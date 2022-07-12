const Sequelize = require('sequelize');
const database = require('./database');

const Campuses = database.define('campus', {
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
        defaultValue: 'https://www.rochester.edu/assets/images/2007-10-31_Rush_Rhees_Library_10152.jpg'
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
module.exports = Campuses;