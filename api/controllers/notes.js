const User = require('../models/users');
const Note = require('../models/notes');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const controller = {
  async getData(req, res, next) {
    let note;
    let noteId = req.body.noteId;

    try {
      note = await Note.findById(noteId);
      if (!note)
        throw new Error();
    } catch (e) {
      let err = new Error('Note not found.');

      err.status = 404;
      return next(err);
    }

    res.send({ status: 'success', note: note.textdata });
  },

  async update(req, res, next) {
    let note;
    let noteId = req.body.noteId;
    let newData = req.body.data;

    try {
      note = await Note.findById(noteId);
      if (!note || typeof newData !== 'string')
        throw new Error();
      note.textdata = newData;
      await note.save();
    } catch (e) {
      let err = new Error('Note not found.');

      err.status = 404;
      return next(err);
    }

    res.send({ status: 'success' });
  }
};

module.exports = controller;
