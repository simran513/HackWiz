const mongoose = require("mongoose")
// const validator = require("validator");
const bcrypt = require("bcryptjs")

const userSchema = new mongoose.Schema({
    username: {
        type : String,
        required : true, 
        minlength : 3
    },
    email: {
        type : String,
        required : true,
        unique : [true, "Email is is already present"]
    },
    password: {
        type: String,
        required: true
    }
})

// userSchema.pre("save", async(next) => {
//     // if(this.isModified("password")){
//         this.password = await bcrypt.hash(this.password, 10)
//         this.confirmpassword = undefined
//     // }
//     next()
// })

// we will create a new collection
const User = new mongoose.model('User', userSchema);

module.exports = User;