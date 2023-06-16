const express=require("express")
const route=express()
const dat=require("../models/databas")
const bodyparser=require("body-parser")
route.use(bodyparser.json())
route.use(bodyparser.urlencoded({extended:true}))
route.get("/",(req,res)=>{
    try{
        res.render("home")
    }catch(err){
        console.log(err)
    }
})
route.get("/signup",(req,res)=>{
    try{
        res.render("signup")
    }catch(err){
        console.log(err)
    }
})
route.get("/admin",(req,res)=>{
    try{
        res.render("admin")
    }catch(err){
        console.log(err)
    }
})
route.post("/signup",(req,res)=>{
    try{
       const Da=new dat({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password
       });
       Da.save()
       res.redirect("/")
    }catch(err){
        console.log(err)
    }
})
module.exports=route