const { body } = require('express-validator');

module.exports = {
    registerValidation: [
        body('email')
            .notEmpty()
                .withMessage('Campo obligatorio')
                .bail()
            .isEmail()
                .withMessage('Formato de email incorrecto')
                .bail()
            .custom((value) => {
                /*
                    Definición de producto:
                    
                    Si el email fue registrado anteriormente en el sistema se quiere mostrar un error con el mensaje: "Email registrado".
                */
            })
            ,
        body('password')
            .notEmpty()
                .withMessage('Campo obligatorio')
                .bail()
            .isLength({ min:4 })
                .withMessage('La contraseña debe tener al menos 4 caracteres')
                .bail()
            .custom((value, { req }) => req.body.retype && req.body.retype === value)
                .withMessage('Las contraseñas no coinciden')
                .bail()
    ],
    loginValidation: [
        body('email')
            .notEmpty()
                .withMessage('Ambos campos son obligatorios')
                .bail()
            .custom((value, { req }) => {
                /*
                    Definición de producto:
                    
                    Si el usuario no se encuentra en la DB o si existe pero su contraseña no coincide con la contraseña ingresada se quiere mostrar un error con el mensaje: "El email y la contraseña no coinciden".
                */
            })
    ]
};