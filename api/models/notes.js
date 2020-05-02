const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const NoteSchema = new Schema({
  textdata: {
    type: String,
    trim: true,
    default: ''
  }
});

module.exports = mongoose.model('Note', NoteSchema);
