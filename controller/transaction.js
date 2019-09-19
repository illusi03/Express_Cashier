//Import Models
const models = require('../models')
const Transaction = models.transaction
const TransactionDetail = models.transactionDetail
const Product = models.product
const Cashier = models.cashier

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  Transaction.findAll({
    order: [
      ['id', 'DESC']
    ],
    include: [
      {
        model: TransactionDetail,
        include: [
          {
            model: Product
          }
        ]
      },
      {
        model: Cashier,
      }
    ]
  }).then(data => res.send(data))
}
exports.show = (req, res) => {
  Transaction.findOne({
    where: { id: req.params.id },
    include: [
      {
        model: TransactionDetail,
        include: [
          {
            model: Product
          }
        ]
      }
    ]
  }).then(data => res.send(data))
}
exports.store = (req, res) => {
  Transaction.create(req.body).then(data => {
    res.send({
      message: "success",
      data
    })
  })
}
exports.patch = (req, res) => {
  Transaction.update(
    req.body, {
      where: { id: req.params.id }
    }
  ).then(data => {
    res.send({
      message: "success"
    })
  })
}
exports.delete = (req, res) => {
  Transaction.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.send({
      message: "success"
    })
  })
}
