const mongoose = require('mongoose');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Please enter an email'],
        unique: true,
        lowercase: true,
        validate: [isEmail, 'Please enter a valid email']
    },
    password: {
        type: String,
        required: [true, 'Please enter an password'],
        minlength: [6, 'Minimum length of password is 6 characters'],
    }
});

// fire a function after doc saved to db
UserSchema.post('save', function(doc, next ) {
    console.log('new user was created & saved', doc);
    next();
})

// fire a function before doc saved to db
UserSchema.pre('save', function(next) {
    console.log('user about to be created & saved', this);
    next();
})

const User = mongoose.model('user', UserSchema);

module.exports = User;
