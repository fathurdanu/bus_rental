const {UserController} = require('../controllers');
const userRoute = require('express').Router();

userRoute.get('/', UserController.getUsers);
userRoute.get('/:id', UserController.getUser);
userRoute.post('/add', UserController.add);
userRoute.post('/edit/:id', UserController.edit);
userRoute.get('/delete/:id', UserController.delete);

module.exports = userRoute;