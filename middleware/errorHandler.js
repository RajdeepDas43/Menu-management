const { validationResult } = require('express-validator');
const createError = require('http-errors');

// Middleware to handle validation errors
exports.handleValidationErrors = (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return next(createError(422, { errors: errors.array() }));
    }
    next();
};

// Global error handler
exports.errorHandler = (err, req, res, next) => {
    res.status(err.status || 500);
    res.json({
        error: {
            message: err.message || 'Internal Server Error',
            details: err.errors || [],
        }
    });
};
