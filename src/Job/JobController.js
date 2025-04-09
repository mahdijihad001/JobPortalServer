const jobModel = require("./jobModel")

const createJobController = async (req, res) => {
    try {
        const result = await jobModel({ ...req.body });
        await result.save();

        if (!result) {
            return res.status(400).send({ success: false, message: "Job posted faild" })
        };

        res.status(200).send({ success: true, message: "Job Posted success" });

    } catch (error) {
        return res.status(400).send({
            status: false,
            message: "Job created faild!"
        });
    }
};


const findAllJob = async (req, res) => {
    try {

        const { page = 1 , department , authore} = req.query;

        const filter = {};
        if(department){
            filter.jobType = department
        }
        if(authore){
            filter.authore = authore
        }

        const skip = (parseInt(page) - 1) * 10;

        const totalJob = await jobModel.countDocuments(filter);

        const findJob = await jobModel.find(filter).skip(skip).limit(10);
        const totalpage = Math.ceil(totalJob / 10);

        if (!findJob) {
            return res.status(404).send({ success: false, message: "Job not found" });
        };

        res.status(200).send({ success: true, message: "Job found success.", data: {
            totalJob,
            totalpage,
            findJob
        }});

    } catch (error) {
        return res.status(400).send({
            success: false, message: "Job not found",
        });
    }
}

module.exports = { createJobController, findAllJob }