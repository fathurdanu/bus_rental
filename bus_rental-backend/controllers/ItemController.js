const {Item,User,Brand} = require('../models');

class ItemController {
    static async getItems(req, res) {
        try {
            let result = await Item.findAll();
            res.json(result);
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async getItem(req, res) {
        try {
            const id = +req.params.id;
            let result = await Item.findOne({ where: { id },include: [User,Brand]});
            (result)?res.json(result):res.json({message:`Item id ${id} was not found`});
        } catch (error) {
            res.json({ message: error.errors[0].message });
        }
    }

    static async add(req, res) {
        try {
            const { name,UserId,BrandId,price,image } = req.body;
            let result = await Item.create({
                name,
                UserId,
                BrandId,
                price,
                image
            });
            result ? res.json(result) : res.json({ message: 'Failed to add item' });
        } catch (error) {
            res.json({ message: error.errors[0].message });
        }
    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            const { name,UserId,BrandId,price,image } = req.body;
            let result = await Item.update({
                name,
                UserId,
                BrandId,
                price,
                image
            }, {
                where: { id }
            });
            result == 1 ?
                res.json({ message: "Item was successfully updated." }) :
                res.json({ message: 'Failed to edit item' });
        } catch (error) {
            res.json({ message: error.errors[0].message });
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await Item.destroy({
                where: { id }
            });
            result == 1 ?
                res.json({ message: "Item was successfully deleted." }) :
                res.json({ message: 'Failed to delete item' });
        } catch (error) {
            res.json({ message: error });
        }
    }
}

module.exports = ItemController;