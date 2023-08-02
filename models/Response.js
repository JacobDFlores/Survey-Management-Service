const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Response extends Model {}

Response.init(
    {
        id: {
            type:DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        survey_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'surveys',
                key: 'id',
            },
        },
        response: {
            type: DataTypes.JSON,
            allowNull: false,
        }
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'response',
    }
);

module.exports = Response;