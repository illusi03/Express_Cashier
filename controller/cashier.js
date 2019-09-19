//Import Models
const models = require('../models')
const Cashier = models.cashier

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  Cashier.findAll({
    order: [
      ['id', 'DESC']
    ]
  }).then(data => res.send(data))
}
exports.show = (req, res) => {
  Cashier.findOne({
    order: [
      ['id', 'DESC']
    ],
    where: { id: req.params.id }
  }).then(data => res.send(data))
}
exports.store = (req, res) => {
  Cashier.create(req.body).then(data => {
    res.send({
      message: "success",
      data
    })
  })
}
exports.patch = (req, res) => {
  Cashier.update(
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
  Cashier.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.send({
      message: "success"
    })
  })
}
