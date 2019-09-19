'use strict';
module.exports = (sequelize, DataTypes) => {
  const transactionDetail = sequelize.define('transactionDetail', {
    transactionId: DataTypes.INTEGER,
    productId: DataTypes.INTEGER,
    qty: DataTypes.INTEGER,
    price: DataTypes.DOUBLE
  }, {});
  transactionDetail.associate = function(models) {
    // associations can be defined here
    transactionDetail.belongsTo(models.transaction)
    transactionDetail.belongsTo(models.product)
  };
  return transactionDetail;
};