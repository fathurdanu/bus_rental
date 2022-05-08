const {ItemController} = require('../controllers');
const itemRoute = require('express').Router();

itemRoute.get('/', ItemController.getItems);
itemRoute.get('/:id', ItemController.getItem);
itemRoute.post('/add', ItemController.add);
itemRoute.put('/edit/:id', ItemController.edit);
itemRoute.delete('/delete/:id', ItemController.delete);

module.exports = itemRoute;