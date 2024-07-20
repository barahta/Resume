const db = require('../models');

exports.getAllUsers = async (req, res) => {
    try {
        const users = await db.User.findAll();
        res.json(users);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.createUser = async (req, res) => {
    try {
        const user = await db.User.create(req.body);
        res.json(user);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};