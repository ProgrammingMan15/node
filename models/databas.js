const mongoose=require("mongoose")
mongoose.connect('mongodb://127.0.0.1:27017/test');
const Data=mongoose.Schema({
    name:{
        require:true,
        type:String
    },
    email:{
        require:true,
        type:String
    },
    password:{
        require:true,
        type:String
    }
})
module.exports=new mongoose.model("Data",Data)