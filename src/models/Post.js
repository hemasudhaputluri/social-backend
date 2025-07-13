const { DataTypes } = require('sequelize');
const sequelizer = require('../../config/dbConnection.js');

const Post = sequelizer.define('Post', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull : false,

  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  authorId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  }
}, {
  timestamps: true, // createdAt & updatedAt
});

module.exports = Post;
