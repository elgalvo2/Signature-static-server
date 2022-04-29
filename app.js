const express = require("express");

const app = express();

app.get('/',(req,res)=>{
    res.status(200).send({data:'hola',error:false})
})

app.use('/profiles',express.static(__dirname+'/profiles'))

app.use('*',(req,res)=>{
    res.status(404).send({error:true,message:'not found :c'})
})


module.exports = app;