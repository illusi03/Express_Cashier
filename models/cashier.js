'use strict';
module.exports = (sequelize, DataTypes) => {
  const cashier = sequelize.define('cashier', {
    username: DataTypes.STRING,
    password: DataTypes.STRING,
    name: DataTypes.STRING,
    address: DataTypes.STRING,
    noTelp: DataTypes.STRING,
    photo: DataTypes.STRING
  }, {});
  cashier.associate = function(models) {
    // associations can be defined here
    cashier.hasMany(models.product)
    cashier.hasMany(models.transaction)
  };
  return cashier;
};