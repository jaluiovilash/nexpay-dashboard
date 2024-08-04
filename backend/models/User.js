const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    apiKey: { type: String, unique: true },
    bankDetails: {
        bankName: String,
        accountNumber: String,
        ifscCode: String
    }
});

// Hash password before saving
userSchema.pre('save', async function (next) {
    if (!this.isModified('password')) return next();
    const salt = await bcrypt.genSalt(10);
    this.password = await bcrypt.hash(this.password, salt);
    if (!this.apiKey) {
        this.apiKey = crypto.randomBytes(16).toString('hex');
    }
    next();
});

const User = mongoose.model('User', userSchema);
module.exports = User;
