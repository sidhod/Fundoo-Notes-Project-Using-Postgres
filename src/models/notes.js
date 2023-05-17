'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class notes extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            // define association here
        }
    }
    notes.init(
        {
            Title: DataTypes.STRING,
            Descreption: DataTypes.STRING,
            Color: DataTypes.STRING,
            isArchived: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            isDeleted: {
                type: DataTypes.BOOLEAN,
                defaultValue: false
            },
            UserID: DataTypes.STRING,
        },
        {
            sequelize,
            modelName: 'notes'
        }
    );
    return notes;
};
