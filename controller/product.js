//Import Models
const models = require('../models')
const Product = models.product
const Cashier = models.cashier
const Category = models.category

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  Product.findAll({
    order: [
      ['id', 'DESC']
    ],
    include: [
      {
        model: Cashier
      },
      {
        model: Category
      }
    ]
  }).then(data => res.send(data))
}
exports.show = (req, res) => {
  Product.findOne({
    order: [
      ['id', 'DESC']
    ],
    include: [
      {
        model: Cashier
      },
      {
        model: Category
      }
    ],
    where: { id: req.params.id }
  }).then(data => res.send(data))
}
exports.store = (req, res) => {
  Product.create(req.body).then(data => {
    res.send({
      message: "success",
      data
    })
  })
}
exports.patch = (req, res) => {
  Product.update(
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
  Product.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.send({
      message: "success"
    })
  })
}
