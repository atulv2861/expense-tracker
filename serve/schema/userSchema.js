const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const userSchema = mongoose.Schema({
    name: { type: String, trim :true, required: [true,"Name is required"]},
    email: { type: String,trim:true, required: [true,"Email is required"], unique: [true,"Duplicate email not allowed"] },
    password: { type: String, required: [true,"Password is required"]}
},{
    timestamps: true,
})


userSchema.pre('save', async function(next) {
    if(!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password.trim(), salt);

    next();
});

 
module.exports = mongoose.model('User', userSchema);