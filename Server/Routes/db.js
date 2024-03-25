const mongoose = require('mongoose')
mongoose.connect("mongodb+srv://ragnar20-03:Rshn_mongodbatlast@mycluster.iqg3hbo.mongodb.net/Mailer").then((response) => {
    console.log("connection to DataBAse is Succesfull");
})


const userSchema = new mongoose.Schema({
    username : {type : String , required : true} ,
    appPass : {type : String , required:true} ,
    password : {type : String , required : true} ,
})

const User = mongoose.model("user" , userSchema)
module.exports = User