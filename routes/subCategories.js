const express = require('express');
const router = express.Router();
const subCategoryController = require('../controllers/subCategoryController');

// Post a new sub-category under a category
router.post('/', subCategoryController.createSubCategory);

// Get all sub-categories
router.get('/', subCategoryController.getAllSubCategories);

// Get sub-categories under a specific category
router.get('/category/:categoryId', subCategoryController.getSubCategoriesByCategoryId);

// Get a specific sub-category by ID
router.get('/:id', subCategoryController.getSubCategoryById);

// Update a sub-category
router.put('/:id', subCategoryController.updateSubCategory);

// Delete a sub-category
router.delete('/:id', subCategoryController.deleteSubCategory);

module.exports = router;
