const { body } = require('express-validator');

exports.validateItem = [
    body('name').notEmpty().withMessage('Name is required'),
    body('image').isURL().withMessage('Image must be a valid URL'),
    body('taxApplicability').isBoolean().withMessage('Tax Applicability must be a boolean'),
    body('tax').optional().isNumeric().withMessage('Tax must be a number'),
    body('baseAmount').isNumeric().withMessage('Base Amount must be a number'),
    body('discount').optional().isNumeric().withMessage('Discount must be a number'),
    body('totalAmount').isNumeric().withMessage('Total Amount must be a number'),
];
