const sequelize = require('../config/connection');
// const { User, Post, Comment } = require('../models');

const seedUsers= require('./user-seeds');
const seedPosts = require('./post-seeds');
const seedComments = require('./comment-seeds');


const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n------ DATABASE SYNCED --------\n');

  await seedUsers();
  console.log('\n------ USERS SEEDED --------\n');

  await seedPosts();
  console.log('\n------ POSTS SEEDED --------\n');

  await seedComments();
  console.log('\n------ COMMENTS SEEDED --------\n');

  // const users = await User.bulkCreate(seedUsers, {
  //   individualHooks: true,
  //   returning: true,
  // });

  // const project = await Project.bulkCreate(seedPosts);
  // const comment = await Comment.bulkCreate(seedComments);

  process.exit(0);
};

seedAll();