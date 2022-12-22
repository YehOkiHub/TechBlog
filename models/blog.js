const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');
const userModel = require("./users")

class Blog extends Model {
    }


Blog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },    
    content: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        
      },
    },
    date: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          
        },
      },
    user_id: {
        type: DataTypes.INTEGER,
        references: {
            model: userModel,
            key: "id"
        }
      }
  },
  {
    
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'blog',
  }
);

module.exports = Blog;
