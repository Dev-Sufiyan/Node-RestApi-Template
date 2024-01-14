const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); 

const files = sequelize.define('files', {
    file_name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    file_data: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
}, {
    tableName : 'files',
    timestamps: false,
});

module.exports = files;
