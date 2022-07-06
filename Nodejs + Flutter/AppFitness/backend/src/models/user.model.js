const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');
const userSchema = new Schema({
    nombre: String,
    email: String,
    password: String,
})
userSchema.methods.hashPass = async(password) => {
    const salt = await bcrypt.genSalt(10)
    const hash = bcrypt.hash(password, salt)
    return hash
};
userSchema.methods.matchPass = async function(password) {
    return await bcrypt.compare(password, this.password)
}

module.exports = model('User', userSchema);