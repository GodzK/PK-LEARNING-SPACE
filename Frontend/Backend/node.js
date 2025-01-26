const app = require("express")();
port = 7777


app.get("/",(req,res)=>{
    res.json("docker is easy")
})
app.listen(port,(req,res)=>{
    console.log("app start")
})