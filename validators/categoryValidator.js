const { body } = require('express-validator');

exports.validateCategory = [
    body('name').notEmpty().withMessage('Name is required'),
    body('image').isURL().withMessage('Image must be a valid URL'),
    body('taxApplicability').isBoolean().withMessage('Tax Applicability must be a boolean'),
    body('tax').optional().isNumeric().withMessage('Tax must be a number'),
    body('taxType').optional().isString().withMessage('Tax Type must be a string'),
];
