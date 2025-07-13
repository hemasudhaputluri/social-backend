const User = require('../user/userModel');
const Post = require('../post/postModel');
const sequelize = require('../../config/dbConnection.js');


User.hasMany(Post, {
  foreignKey: 'authorId'})

Post.belongsTo(User, {
  foreignKey: 'authorId'},);