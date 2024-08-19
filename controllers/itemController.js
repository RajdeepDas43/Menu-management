const Item = require('../models/Item');
const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

exports.createItem = async (req, res) => {
    const { subCategoryId, categoryId } = req.body;
    try {
        let parent;
        if (subCategoryId) {
            parent = await SubCategory.findById(subCategoryId);
        } else {
            parent = await Category.findById(categoryId);
        }
        if (!parent) {
            return res.status(404).send({ error: "Parent category or sub-category not found" });
        }
        const item = new Item(req.body);
        await item.save();
        res.status(201).send(item);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllItems = async (req, res) => {
    try {
        const items = await Item.find();
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getItemsByCategoryId = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const items = await Item.find({ category: categoryId });
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getItemsBySubCategoryId = async (req, res) => {
    try {
        const { subCategoryId } = req.params;
        const items = await Item.find({ subCategory: subCategoryId });
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getItemById = async (req, res) => {
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateItem = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const item = await Item.findById(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        updates.forEach((update) => item[update] = req.body[update]);
        await item.save();
        res.send(item);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteItem = async (req, res) => {
    try {
        const item = await Item.findByIdAndDelete(req.params.id);
        if (!item) {
            return res.status(404).send();
        }
        res.send(item);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.searchItemsByName = async (req, res) => {
    try {
        const { itemName } = req.params;
        const items = await Item.find({ name: { $regex: itemName, $options: 'i' } });
        res.send(items);
    } catch (error) {
        res.status(500).send(error);
    }
};
