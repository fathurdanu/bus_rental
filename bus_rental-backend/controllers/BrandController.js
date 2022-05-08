const { Brand } = require('../models');

class BrandController {
    static async getBrands(req, res) {
        try {
            let result = await Brand.findAll();
            res.json(result);
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async getBrand(req, res) {
        try {
            const id = +req.params.id;
            let result = await Brand.findOne({ where: { id } });
            (result)?res.json(result):res.json({message:`Brand id ${id} was not found`});
        } catch (error) {
            res.json({ message: error });
        }
    }

    static async add(req, res) {
        try {
            const { name, image } = req.body;
            let result = await Brand.create({
                name,
                image
            });
            result ? res.json(result) : res.json({ message: 'Failed to add brand' });
        } catch (error) {
            res.json({ message: error});
        }

    }

    static async edit(req, res) {
        try {
            const id = +req.params.id;
            const { name, image } = req.body;
            let result = await Brand.update({
                name,
                image
            }, {
                where: { id }
            });
            result == 1 ?
                res.json({ message: "Brand was successfully updated." }) :
                res.json({ message: 'Failed to edit brand' });
        } catch (error) {
            res.json({ message: error});
        }
    }

    static async delete(req, res) {
        try {
            const id = +req.params.id;
            let result = await Brand.destroy({
                where: { id }
            });
            result == 1 ?
                res.json({ message: "Brand was successfully deleted." }) :
                res.json({ message: 'Failed to delete brand' });
        } catch (error) {
            res.json({ message: error });
        }
    }
}

module.exports = BrandController;