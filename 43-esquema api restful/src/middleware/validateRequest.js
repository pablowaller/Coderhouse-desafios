function validateRequest(req, next, schema){
    const options = {
        abortEarly: false,
        allowUnknown: true,
        stripUnknow: true
    }
    const { error, value } = schema.validate(req.body, options);
    if (error){
        const validationError = new Error()
        validationError.name = "Validation error"
        validationError.message = error.details.map(x => x.message).join(', ')
        next(validationError)
    } else {
        req.body = value;
        next();
    }
}


module.exports = validateRequest