const routers = require('express').Router();

const productsCtl = require('./../controllers/products.controller');
const categoriesCtl = require('./../controllers/categories.controller');


/**
 * Services of products
 */
routers.get('/products/getall', (req, res) => productsCtl.findAll()
    .then(data => res.status(data.code).json(data.data))
    .catch(error => res.status(error.code).json(error.data)));


routers.get('/products/getProductByIdCategory/:id', (req, res) => productsCtl.getProductByIdCategory(req.params.id)
    .then(data => res.status(data.code).json(data.data))
    .catch(error => res.status(error.code).json(error.data)));


routers.post('/products/addone', (req, res) => productsCtl.addOne(req.body)
    .then(data => res.status(data.code).json(data.data))
    .catch(error => res.status(error.code).json(error.data)));


routers.put('/products/updateone/:id', (req, res) => productsCtl.updateOne({
    id: req.params.id,
    name: req.body.name,
    valor: req.body.description,
    stock: req.body.description,
    id_category: req.body.description,
})
    .then(data => res.status(data.code).json(data.data))
    .catch(error => res.status(error.code).json(error.data)));


routers.delete('/products/deleteone/:id', (req, res) => productsCtl.deleteOne(req.params.id)
    .then(data => res.status(data.code).json(data.data))
    .catch(error => res.status(error.code).json(error.data)));


/**
* Services of Categories
*/
routers.get('/categories/getall', (req, res) => categoriesCtl.findAll()
    .then(data => res.status(data.code).json(data.data))
    .catch(error => res.status(error.code).json(error.data)));

routers.post('/categories/addone', (req, res) => categoriesCtl.addOne(req.body)
    .then(data => res.status(data.code).json(data.data))
    .catch(error => res.status(error.code).json(error.data)));

routers.put('/categories/updateone/:id', (req, res) => categoriesCtl.updateOne({
    id: req.params.id,
    name: req.body.name,
    description: req.body.description,
})
    .then(data => res.status(data.code).json(data.data))
    .catch(error => res.status(error.code).json(error.data)));

routers.delete('/categories/deleteone/:id', (req, res) => categoriesCtl.deleteOne(req.params.id)
    .then(data => res.status(data.code).json(data.data))
    .catch(error => res.status(error.code).json(error.data)));


module.exports = routers;