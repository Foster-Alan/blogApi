const express = require('express');
const { addCategory, getAllCategories } = require('../controller/categoryController');

const { validateToken } = require('../middleware/authMiddleware');
const { validadeCategory } = require('../middleware/categoryMiddleware');

const router = express.Router();

router.post('/categories', validateToken, validadeCategory, addCategory);
router.get('/categories', validateToken, getAllCategories);

module.exports = router;