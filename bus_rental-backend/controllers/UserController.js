const { User } = require('../models');

class UserController {
    static async getUsers(req, res) {
        try {
            let result = await User.findAll();
            res.json(result);
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async getUser(req, res) {
        try {
            const id = +req.params.id;
            let result = await User.findOne({ where: { id } });
            (result)?res.json(result):res.json({message:`user id ${id} was not found`});
        } catch (error) {
            res.json({ message: error.errors[0].message });
        }
    }

    static async add(req, res) {
        try {
            const { name } = req.body;
            let result = await User.create({
                name
            });
            result ? res.json(result) : res.json({ message: 'Failed to add user' });
        } catch (error) {
            res.json({ message: error.errors[0].message });
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            const { name } = req.body;
            let result = await User.update({
                name
            }, {
                where: { id }
            });
            result == 1 ?
                res.json({ message: "User was successfully updated." }) :
                res.json({ message: 'Failed to edit user' });
        } catch (error) {
            res.json({ message: error.errors[0].message });
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await User.destroy({
                where: { id }
            });
            result == 1 ?
                res.json({ message: "User was successfully deleted." }) :
                res.json({ message: 'Failed to delete user' });
        } catch (error) {
            res.json({ message: error });
        }
    }
}

module.exports = UserController;