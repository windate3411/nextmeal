'use strict';
module.exports = (sequelize, DataTypes) => {
  const Restaurant = sequelize.define('Restaurant', {
    name: DataTypes.STRING,
    description: DataTypes.TEXT,
    image: DataTypes.STRING,
    tel: DataTypes.STRING,
    rating: DataTypes.FLOAT,
    CategoryId: DataTypes.INTEGER,
    location: DataTypes.STRING,
    address: DataTypes.STRING,
    latitude: DataTypes.STRING,
    longitude: DataTypes.STRING
  }, {});
  Restaurant.associate = function (models) {
    // associations can be defined here
    Restaurant.hasMany(models.Like)
    Restaurant.hasMany(models.Meal)
    Restaurant.hasMany(models.Comment)
    Restaurant.belongsTo(models.Category)
    Restaurant.belongsTo(models.User)
  };
  return Restaurant;
};