'use strict';
module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    cashierId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.DOUBLE,
    stock: DataTypes.INTEGER,
    photo: DataTypes.STRING
  }, {});
  product.associate = function(models) {
    // associations can be defined here
    product.belongsTo(models.category)
    product.belongsTo(models.cashier)
    product.hasMany(models.transactionDetail)
  };
  return product;
};