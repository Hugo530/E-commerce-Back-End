const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedTags = require('./tag-seeds');
const seedProductTags = require('./product-tag-seeds');

const sequelize = require('../config/connection');
const { Product, Tag, ProductTag } = require('../models');

const seedAll = async () => {
  
  await sequelize.sync({ force: true });
  // console.log('\n----- DATABASE SYNCED -----\n');
  
  
  await Category.bulkCreate(seedCategories);
  // console.log('\n----- CATEGORIES SEEDED -----\n');

  await Product.bulkCreate(seedProducts);
  // console.log('\n----- PRODUCTS SEEDED -----\n');

  await Tag.bulkCreate(seedTags);
  // console.log('\n----- TAGS SEEDED -----\n');

  await ProductTag.bulkCreate(seedProductTags);
  // console.log('\n----- PRODUCT TAGS SEEDED -----\n');

  process.exit(0);
};

seedAll();
