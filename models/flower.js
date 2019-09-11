'use strict';
module.exports = (sequelize, DataTypes) => {
  const Flower = sequelize.define('Flower', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    imageurl: DataTypes.STRING
  }, {});
  Flower.associate = function(models) {
    // associations can be defined here
  };
  return Flower;
};