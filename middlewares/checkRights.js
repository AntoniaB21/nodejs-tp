const jwt = require('jsonwebtoken');
const model = require('../models');


module.exports = async function checkToken(req, res, next) {
    const token = req.header('Authorization').replace('Bearer ','');

    if (!token) return res.status(403).json({message:'JWT Token not found'});

    const decoded = jwt.verify(token, process.env.JWTPRIVATEKEY);
    req.user = decoded;

    // check the role of the user
    const userInDB = await model.User.findOne({ where:{
        id: req.user.id,
    }});;

    console.log(userInDB.dataValues.roles);

    if (userInDB.dataValues.roles !== 'ADMIN'){
        if (!token) return res.status(403).json({message:'You are not an admin ! Cannot perform this operation'});
    }
    next();
  };