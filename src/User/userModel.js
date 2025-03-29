const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique : true
    },
    email: {
        type: String,
        required: true,
        unique : true
    },
    password: {
        type: String,
        required: true
    },
    image : {
        type : String
    },
    role: {
        type: String,
        enum : ["candidate" , "employer" , "admin"],
        default: "candidate"
    },
    jobTitle: {
        type: String
    },
    phone: {
        type: String
    },
    website: {
        type: String
    },
    expectedSalary: {
        type: String
    },
    exprience: {
        type: String,
        default: "0"
    },
    age: {
        type: Number
    },
    educationLevel: {
        type: String
    },
    language: {
        type: String
    },
    facebook: {
        type: String
    },
    twiter: {
        type: String
    },
    linkedin: {
        type: String
    },
    github : {
        type : String
    },
    country : {
        type : String
    },
    city : {
        type : String
    },
    completeAddress : {
        type : String
    },
    description : {
        type : String
    }
} , {
    timestamps : true
});

userSchema.pre("save", async function (next) {
    if (!this.isModified("password")) {
        return next();
    };
    this.password = await bcrypt.hash(this.password, 10);
});

userSchema.methods.compairePassword = async function(plaintextPassword){
    return await bcrypt.compare(plaintextPassword , this.password);
};

const userModel = mongoose.model("user" , userSchema);

module.exports = {userModel};