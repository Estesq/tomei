const { Sequelize, DataTypes } = require('sequelize')
const db = require('../db')
const sequelize = new Sequelize(
  process.env.DB_NAME || 'users',
  process.env.DB_USER || 'root',
  process.env.DB_PASS || '',
  {
    host: process.env.DB_HOST || 'localhost',
    dialect: 'mariadb'
  }
)

const User = sequelize.define(
  'User',
  {
    fullName: {
      type: DataTypes.STRING,
      allowNull: false
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false
    },
    avatar: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    timestamps: true
  }
)
module.exports = User
