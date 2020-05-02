const jwt = require('jsonwebtoken');

function validateUser(req, res, next) {
  let decoded;
  const token = req.headers['x-access-token'];
  const secret = req.app.get('secretKey');

  try {
    decoded = jwt.verify(token, secret);
    req.body.noteId = decoded.id;
    next();
  } catch (err) {
    res.status(400).send({ status: 'error', message: err.message });
  }
}

module.exports = {
  validateUser
};
