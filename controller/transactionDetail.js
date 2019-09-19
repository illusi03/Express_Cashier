//Import Models
const models = require('../models')
const TransactionDetail = models.transactionDetail

//FUNCTION UTAMA CRUD
exports.index = (req, res) => {
  TransactionDetail.findAll().then(data => res.send(data))
}
exports.show = (req, res) => {
  TransactionDetail.findOne({
    where: { id: req.params.id }
  }).then(data => res.send(data))
}
exports.store = (req, res) => {
  TransactionDetail.bulkCreate(req.body).then(data => {
    res.send({
      message: "success",
      data
    })
  })
}
exports.patch = (req, res) => {
  TransactionDetail.update(
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
  TransactionDetail.destroy({
    where: {
      id: req.params.id
    }
  }).then(data => {
    res.send({
      message: "success"
    })
  })
}
