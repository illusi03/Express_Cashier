//Import Models
const models = require('../models')
const Cashier = models.cashier

//FUNCTION UTAMA CRUD
exports.show = (req, res) => {
  Cashier.findOne({
    order: [
      ['id', 'ASC']
    ],
    where: { username: req.params.username, password: req.params.password }
  }).then((data) => {
    if(data != null){
      return res.send(data)
    }else{
      return res.send(data)
    }
  }).catch((err) => {
    res.send(err)
  })
}
