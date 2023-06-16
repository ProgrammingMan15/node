const express=require("express")
const app=express()
const port=process.env.PORT || 2000
const route=require("./routes/index")
app.use(route)
app.set("view engine","ejs")
app.use(express.static("public"))
app.listen(port,()=>{
     console.log("ok")
})