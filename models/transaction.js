'use strict';
module.exports = (sequelize, DataTypes) => {
  const transaction = sequelize.define('transaction', {
    cashierId: DataTypes.INTEGER,
    noMeja: DataTypes.STRING,
    subTotal: DataTypes.DOUBLE,
    discount: DataTypes.DOUBLE,
    tax: DataTypes.DOUBLE,
    grandTotal: DataTypes.DOUBLE,
    cash: DataTypes.DOUBLE
  }, {});
  transaction.associate = function(models) {
    // associations can be defined here
    transaction.belongsTo(models.cashier)
    transaction.hasMany(models.transactionDetail)
  };
  return transaction;
};