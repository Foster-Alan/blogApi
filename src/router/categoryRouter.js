const express = require('express');
const categoryController = require('../controller/categoryController');

const { validateToken } = require('../middleware/authMiddleware');
const categoryMiddleware = require('../middleware/categoryMiddleware');

const router = express.Router();

router.post('/categories', validateToken, categoryMiddleware.validadeCategory, 
categoryController.addCategory);

module.exports = router;