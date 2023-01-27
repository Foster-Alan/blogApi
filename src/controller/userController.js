const userServicer = require('../service/userService');

const addUser = async (request, response) => {
    const person = request.body;

    const { token, error } = await userServicer.addUser(person);

    if (error) return response.status(409).json({ message: error });

    response.status(201).json({ token });
};

const getAllUser = async (request, response) => {
    const users = await userServicer.getAllUser();
    response.status(200).json(users);
};

module.exports = {
    addUser,
    getAllUser,
};