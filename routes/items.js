const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Post a new item
router.post('/', itemController.createItem);

// Get all items
router.get('/', itemController.getAllItems);

// Get all items under a category
router.get('/category/:categoryId', itemController.getItemsByCategoryId);

// Get all items under a sub-category
router.get('/subcategory/:subCategoryId', itemController.getItemsBySubCategoryId);

// Get a specific item by ID
router.get('/:id', itemController.getItemById);

// Update an item
router.put('/:id', itemController.updateItem);

// Delete an item
router.delete('/:id', itemController.deleteItem);

// Search items by name
router.get('/search/:itemName', itemController.searchItemsByName);

module.exports = router;
