const express= require("express")
console.log(typeof express)

const app = express()

/**
 * see a ner request and response cycle
 **/
app.get("/",(req,res)=>{
    res.send("Hello from the express server")
})
/**
 * starting express server 
*/
 app.listen(8000,()=>{
    console.log("server got started");
 })