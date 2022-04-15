const jwt = require('jsonwebtoken');

module.exports = function checkToken(req, res, next) {
    
    const token = req.header('Authorization').replace('Bearer ','');
    console.log(token);

    if (!token) return res.status(403).json({message:'JWT Token not found'});

    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.user = decoded;
    console.log('je suis passée dans le middleware');
    next();
  };