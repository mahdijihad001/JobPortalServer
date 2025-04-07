const jobModel = require("./jobModel")

const createJobController = async(req , res) =>{
    try {
        const result = await jobModel({...req.body});
        await result.save();

        if(!result){
            return res.status(400).send({ success : false, message : "Job posted faild" })
        };

        res.status(200).send({success : true , message : "Job Posted success"});

    } catch (error) {
        return res.status(400).send({
            status : false,
            message : "Job created faild!"
        });
    }
};

module.exports = {createJobController}