
const DB = require('./db');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/Records', { useNewUrlParser: true });
// Get the collection
var Arr = [];
for(let i = 0;i<10000;i++){
  Arr.push({name : "amit"})
}
DB.insertMany(Arr,function(err, record){
            if(err){
                   console.log(err)
                 }else{
                   console.log(record)
               }

            })
