module.exports = function(str) {
  if (typeof str !== 'string')
    return false;
  if (str.length <= 5 || str.length > 20)
    return false;
  return true;
}
