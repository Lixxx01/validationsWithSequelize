const { validationResult } = require('express-validator');
const { User } = require('../db/models');
const bcrypt = require('bcryptjs');

module.exports = {
    register (req, res) {
        return res.render('register');
    },
    async processRegister (req, res) {
        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()){
            return res.render('register', { errors: validationErrors.mapped()});
        }

        let { email, password } = req.body;
        
        password = bcrypt.hashSync(password, 10);

        await User.create({
            email,
            password
        });
        
        return res.redirect('/login');
    },
    login (req, res) {
        return res.render('login');
    },
    processLogin(req, res) {
        const validationErrors = validationResult(req);

        if (!validationErrors.isEmpty()) {
            return res.render('login', { errors: validationErrors.mapped() });
        }
        
        return res.send('Loguea3');
    }
};