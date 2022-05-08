const {BrandController} = require('../controllers');
const brandRoute = require('express').Router();

brandRoute.get('/', BrandController.getBrands);
brandRoute.get('/:id', BrandController.getBrand);
brandRoute.post('/add', BrandController.add);
brandRoute.post('/edit/:id', BrandController.edit);
brandRoute.get('/delete/:id', BrandController.delete);

module.exports = brandRoute;