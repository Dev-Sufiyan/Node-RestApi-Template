const { DataTypes } = require('sequelize');
const sequelize = require('../config/sequelize'); 

const files = sequelize.define('files', {
    FileId: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true,
    },
    FileContent: {
        type: DataTypes.BLOB,
        allowNull: false,
    },
    FileExtension: {
        type: DataTypes.STRING,
        allowNull: false,
    },
}, {
    tableName : 'Files',
    timestamps: false,
});

module.exports = files;
