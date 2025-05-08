const jwt = require('jsonwebtoken');

const generateToken = (userData) => {
  return jwt.sign(
    { id: userData.id, role: userData.role },
    process.env.JWT_SECRET,
    { expiresIn: '1d' }
  );
}

const verifyToken = (token) => {
  return jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=>{
    if (err) return err;
    return decoded
  });
}

module.exports = {
  generateToken,
  verifyToken,
}