const express = require("express");
const morgan = require("morgan");


const app = express();

app.use(morgan('dev'))

app.get('/',(req,res)=>{
    res.status(200).send({data:'hola',error:false})
})

app.use('/profiles',express.static(__dirname+'/profiles'))

app.use('*',(req,res)=>{
    res.status(404).send({error:true,message:'not found :c'})
})


module.exports = app;