const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validators = require('../validators');

const saltRounds = 10;
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  email: {
    type: String,
    trim: true,
    required: true,
    unique: true,
    validate: {
      validator: validators.email,
      message: 'Invalid email format.'
    }
  },
  password: {
    type: String,
    trim: true,
    required: true
  },
  noteId: {
    type: String,
    trim: true,
    default: ''
  }
});

UserSchema.pre('save', function(next) {
  if (this.isNew) {
    this.password = bcrypt.hashSync(this.password, saltRounds);
  }
  next();
});

UserSchema.methods.comparePassword = async function(password) {

    // console.log('START')
    // console.log(password)
    // console.log(this.password)
    // console.log('STOP')
    return await bcrypt.compare(password, this.password)
}

module.exports = mongoose.model('User', UserSchema);
