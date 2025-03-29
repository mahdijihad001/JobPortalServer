const { userModel } = require("../User/userModel");
const jwt = require("jsonwebtoken");

const genarateToken = async(userId) =>{
    const findUser = await userModel.findById(userId);
    const token = jwt.sign({user_id : findUser._id , role : findUser.role} , process.env.jwt_secrate_key , {expiresIn : "48h"})
    return token
};



module.exports = {genarateToken}