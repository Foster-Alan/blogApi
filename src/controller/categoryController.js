const serviceCategory = require('../service/categoryService');

const addCategory = async (request, response) => {
    const { name } = request.body;
    const { id } = await serviceCategory.addCategory(name);
    response.status(201).json({
        name,
        id,
    });
};

module.exports = {
    addCategory,
};