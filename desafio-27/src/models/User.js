const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const UserSchema = mongoose.Schema({

    username: { 
        type: String,
        required: true,
        unique: true,
        index:true,
        },
    password: {
        type: String,
        required: true,
    }
})


UserSchema.pre('save',async function(next){
    const salt = await bcrypt.genSalt(10)
    const hash = await bcrypt.hash(this.password, salt)
    this.password = hash
    next()
})

UserSchema.methods.verifyPassword = function (password) {
    return bcrypt.compareSync(password, this.password)
}

module.exports =  mongoose.model('User',UserSchema)