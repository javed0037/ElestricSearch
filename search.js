var express = require('express');
var app =  express()
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Database');
const User = require('./user');


app.get('/data',(req,res)=>{
  console.log(new Date());
  User.search(
    {query_string: {query: 'Javed'}},
     {
       hydrate: true,
       hydrateWithESResults: true,
     },(err, results)=> {
       if(err){
         console.log("there are the error",err);
       }else
    console.log(new Date());
     console.log("results",results);
    res.send(results)
  });
})

app.listen(4000,()=>{
  console.log("app is listen on the port",4000);
})
