const Sequelize = require('sequelize');
const db = require('./database');

module.exports = db.define('student', {
    //firstName
    firstName: {
        type: Sequelize.STRING,
        //not null
        allowNull: false,
        //not empty
        validate: {
        notEmpty: true
        }
    },
    //lastName
    lastName: {
        type: Sequelize.STRING,
        //not null
        allowNull: false,
        //not empty
        validate: {
        notEmpty: true
        }
    },
    //email
    email: {
        type: Sequelize.STRING,
        //not null
        allowNull: false,
        //not empty
        validate: {
        notEmpty: true,
        //is an email
        isEmail: true
        }
    },
    //imageUrl
    imageUrl: {
        type: Sequelize.STRING,
        //defaultValue is email photo
        defaultValue: 'https://www.nidirect.gov.uk/sites/default/files/styles/nigov_full_620_x1/public/images/email_logo.jpg?itok=ifUhNgCT'
    },
    //gpa
    gpa: {
        type: Sequelize.DECIMAL(2,1),
        validate: {
        //upper bound
        max: 4.0,
        //lower bound
        min: 0.0,
        //is a decimal format
        isDecimal: true
        }
    },
    });

