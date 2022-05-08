const {BrandController} = require('../controllers');
const brandRoute = require('express').Router();

brandRoute.get('/', BrandController.getBrands);
brandRoute.get('/:id', BrandController.getBrand);
brandRoute.post('/add', BrandController.add);
brandRoute.put('/edit/:id', BrandController.edit);
brandRoute.delete('/delete/:id', BrandController.delete);

module.exports = brandRoute;