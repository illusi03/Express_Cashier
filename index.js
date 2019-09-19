//Import Lib
const express = require('express')
const bodyParser = require('body-parser')
require('express-group-routes')

//Init Identifier
const app = express()
const port = 5000
app.use(bodyParser.json())

//Init Controllers
const CategoryController = require('./controller/category')
const CashierController = require('./controller/cashier')
const ProductController = require('./controller/product')
const TransactionController = require('./controller/transaction')
const TransactionDetailController = require('./controller/transactionDetail')
const CashierAuthController = require('./controller/auth')

//Init Route
app.group("/api/v1", (router) => {

    //API
    router.get('/categories', CategoryController.index)
    router.get('/category/:id', CategoryController.show)
    router.post('/category', CategoryController.store)
    router.patch('/category/:id', CategoryController.patch)
    router.delete('/category/:id', CategoryController.delete)
    //API
    router.get('/cashiers', CashierController.index)
    router.get('/cashier/:id', CashierController.show)
    router.post('/cashier', CashierController.store)
    router.patch('/cashier/:id', CashierController.patch)
    router.delete('/cashier/:id', CashierController.delete)
    //Auth
    router.get('/cashier/user/:username/pass/:password', CashierAuthController.show)
    //API
    router.get('/products', ProductController.index)
    router.get('/product/:id', ProductController.show)
    router.post('/product', ProductController.store)
    router.patch('/product/:id', ProductController.patch)
    router.delete('/product/:id', ProductController.delete)
    //API
    router.get('/transactions', TransactionController.index)
    router.get('/transaction/:id', TransactionController.show)
    router.post('/transaction', TransactionController.store)
    router.patch('/transaction/:id', TransactionController.patch)
    router.delete('/transaction/:id', TransactionController.delete)
    //API
    router.get('/transactionDetails', TransactionDetailController.index)
    router.get('/transactionDetail/:id', TransactionDetailController.show)
    router.post('/transactionDetail', TransactionDetailController.store)
    router.patch('/transactionDetail/:id', TransactionDetailController.patch)
    router.delete('/transactionDetail/:id', TransactionDetailController.delete)
})

//Init Listener Port
app.listen(port, () => console.log(`Listening on port ${port}!`))