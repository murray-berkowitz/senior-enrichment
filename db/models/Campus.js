const db = require('../');
const Sequelize = require('sequelize');

const Campus = db.define('campus', {
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    image: {
        type: Sequelize.STRING,
        //allowNull: false,
        validate: {
            isUrl: true
        }
    }
})

module.exports = Campus;