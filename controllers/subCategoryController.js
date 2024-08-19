const SubCategory = require('../models/SubCategory');
const Category = require('../models/Category');

exports.createSubCategory = async (req, res) => {
    try {
        const { categoryId } = req.body;
        const category = await Category.findById(categoryId);
        if (!category) {
            return res.status(404).send({ error: "Category not found" });
        }
        const subCategory = new SubCategory({
            ...req.body,
            category: categoryId
        });
        await subCategory.save();
        res.status(201).send(subCategory);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getAllSubCategories = async (req, res) => {
    try {
        const subCategories = await SubCategory.find();
        res.send(subCategories);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getSubCategoriesByCategoryId = async (req, res) => {
    try {
        const { categoryId } = req.params;
        const subCategories = await SubCategory.find({ category: categoryId });
        if (!subCategories) {
            return res.status(404).send();
        }
        res.send(subCategories);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getSubCategoryById = async (req, res) => {
    try {
        const subCategory = await SubCategory.findById(req.params.id);
        if (!subCategory) {
            return res.status(404).send();
        }
        res.send(subCategory);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.updateSubCategory = async (req, res) => {
    const updates = Object.keys(req.body);
    try {
        const subCategory = await SubCategory.findById(req.params.id);
        if (!subCategory) {
            return res.status(404).send();
        }
        updates.forEach((update) => subCategory[update] = req.body[update]);
        await subCategory.save();
        res.send(subCategory);
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.deleteSubCategory = async (req, res) => {
    try {
        const subCategory = await SubCategory.findByIdAndDelete(req.params.id);
        if (!subCategory) {
            return res.status(404).send();
        }
        res.send(subCategory);
    } catch (error) {
        res.status(500).send(error);
    }
};
