const { genarateToken } = require("../Middleware/genatareToken");
const { userModel } = require("./userModel");

const createUserController = async(req , res) =>{
   try {
    const result = await userModel({...req.body});
    await result.save();

    res.status(201).send({
        success : true,
        message : "User resistraction success"
    })

   } catch (error) {
    return res.status(400).send({
        success : false,
        message : "Invalid Data",
        error : error.message
    })
   }
};

const postUserLoginController = async(req , res) =>{
    try {
        
        const {username , password} = req.body;
        // Find User
        const findUser = await userModel.findOne({username : username});
        const sendUser = await userModel.findOne({username : username} , {password : 0 , __v : 0});

        if(!findUser){
            return res.status(404).send({
                success : false,
                message : "User not valid"
            })
        };
       
        // Match password
       const matchPassword = await findUser.compairePassword(password);

       if(!matchPassword){
        return res.status(400).send({
            success : false,
            message : "Please type valid information!"
        })
       }
    //    Genarate Token    
       const token = await genarateToken(findUser._id)
    //    Set Cookie
       res.cookie("token" , token , {
        httpOnly: true,
        sameSite: 'None',
        secure: true,
       })

        res.status(200).send({
            success : true,
            message : "Login Success!",
            token,
            user : sendUser
        })




    } catch (error) {
        return res.status(400).send({
            success : false,
            message : "User not valid"
        })
    }
}

const getAllUserController = async(req , res) =>{
    try {
        const result = await userModel.find({});

        res.status(200).send({
            success : true,
            message : "Get all user",
            data : result
        })

    } catch (error) {
        return res.status(404).send({
            success : false,
            message : "No user found"
        })
    }
}


module.exports = {createUserController , getAllUserController , postUserLoginController};