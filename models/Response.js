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
        user_response: {
            type: DataTypes.JSON,
            allowNull: false,
        },
        survey_id: {
            type: DataTypes.INTEGER,
            references: {
                model: 'surveys',
                key: 'id',
            },
        },
        user_id: {
            type: DataTypes.INTEGER,
            references: {
              model: 'user',
              key: 'id',
            },
          },
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