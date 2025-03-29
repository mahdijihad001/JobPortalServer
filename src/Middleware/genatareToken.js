const { userModel } = require("../User/userModel")

const genarateToken = async(userId) =>{
    const findUser = await userModel.findById(userId);
    
    

}