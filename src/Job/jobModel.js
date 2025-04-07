const mongoose = require("mongoose");

const jobSchema = new mongoose.Schema({
    companyName : {
        type : String,
        required : true
    },
    authore : {
        type : mongoose.Schema.Types.ObjectId,
        required : true,
        ref : "user"
    },
    logo : {
        type : String
    },
    companyEmail : {
        type : String,
        required : true
    },
    companyPhone : {
        type : String,
        required : true
    },
    companyWebsite : {
        type : String,
    },
    estSince : {
        type : String,
    },
    teemSize : {
        type : String,
    },
    companyFacebook : {
        type : String,
    },
    companyTwiter : {
        type : String,
    },
    companyLinkedin : {
        type : String,
    },
    companyGithub : {
        type : String,
    },
    companyCountry : {
        type : String,
    },
    cpmpanyCity : {
        type : String,
    },
    companyCompleteAddress : {
        type : String,
    },
    jobTitle : {
        type : String,
    },
    jobType : {
        type : String,
    },
    salary : {
        type : String,
    },
    exprience : {
        type : String,
    },
    gender : {
        type : String,
    },
    industry : {
        type : String,
    },
    dadline : {
        type : String,
    },
    description : {
        type : String,
    },
    keyResponsibilities : {
        type : String,
    },
    skillExperience : {
        type : String,
    }
} , {
    timestamps : true
});

const jobModel = mongoose.model("job" , jobSchema);


module.exports = jobModel