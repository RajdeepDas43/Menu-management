const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryController');
const { validateCategory } = require('../validators/categoryValidator');
const { handleValidationErrors } = require('../middleware/errorHandler');

// Post a new category
router.post('/', validateCategory, handleValidationErrors, categoryController.createCategory);

// Get all categories
router.get('/', categoryController.getAllCategories);

// Get a specific category by ID
router.get('/:id', categoryController.getCategoryById);

// Update a category
router.put('/:id', validateCategory, handleValidationErrors, categoryController.updateCategory);

// Delete a category
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;
