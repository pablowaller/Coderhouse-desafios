const Joi = require('joi')
const validateRequest = require('./validateRequest')

module.exports = {
    saveProductValidator: (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string()
                .min(5)
                .max(45)
                .required(),
            price: Joi.number().required(),
            thumbnail: Joi.string().required(),
        })
        validateRequest(req, next, schema)
    },
    updateProductValidator: (req, res, next) => {
        const schema = Joi.object({
            title: Joi.string()
                .min(5)
                .max(45),
            price: Joi.number()
                .min(0),
            thumbnail: Joi.string(),
        })
        validateRequest(req, next, schema)
    }
}