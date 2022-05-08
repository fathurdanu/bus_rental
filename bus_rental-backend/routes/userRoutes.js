const {UserController} = require('../controllers');
const userRoute = require('express').Router();

userRoute.get('/', UserController.getUsers);
userRoute.get('/:id', UserController.getUser);
userRoute.post('/add', UserController.add);
userRoute.put('/edit/:id', UserController.edit);
userRoute.delete('/delete/:id', UserController.delete);

module.exports = userRoute;