var express = require('express');
var app =  express()

var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200',
  // log: 'trace'
});
//
// client.ping({
//   // ping usually has a 3000ms timeout
//   requestTimeout: 1000
// }, function (error) {
//   if (error) {
//     console.trace('elasticsearch cluster is down!');
//   } else {
//     console.log('All is well');
//   }
// });

app.get('/data',async(req,res)=>{
   // console.log(new Date());
   console.log("start",Date.now())
  try {

  const response = await client.search({
    "from" : 0, "size" : 400000,
    q:'javed'
  });

  console.log(Date.now(),response.hits.hits.length);
   return res.json(response.hits.hits.length)
  // console.log(response.hits.hits)
} catch (error) {
  console.trace(error.message)
}

})


app.listen(4009,()=>{
  console.log("app is listing on the port 4009");
})


// http://localhost:9200/users/_search?size=1000&from=10000
//http://localhost:9200/users/_count

// curl --header "content-type: application/JSON" -XPUT "http://localhost:9200/users/_settings" -d '{ "max_result_window" : 500000 }'







var express      = require('express');
var bodyParser   = require('body-parser');
var app          = express();
var mongoose     = require('mongoose');
var mongoosastic = require('mongoosastic');
var Schema       = mongoose.Schema;
var ObjectId     = mongoose.Types.ObjectId;
app.use(bodyParser());

// Model/Schema
mongoose.connect("mongodb://localhost/Records", function(err) {
  if (err) {
    console.error(err);
  }
  console.log('connected.... unless you see an error the line before this!');
});


var UserSchema = new Schema({
  name          : {type : String, es_indexed : true},
  email         : String,
  city          : {type : String, es_indexed : true}
});

UserSchema.plugin(mongoosastic, {
  host: "localhost",
  port: 9200
});

// var BookSchema = new Schema({
//   name: String
// });



// var User1 = mongoose.model('User', UserSchema)
//   , stream = User1.synchronize()
//   , count = 0;
//
// stream.on('data', function(err, doc){
//   count++;
// });
// stream.on('close', function(){
//   console.log('indexed ' + count + ' documents!');
// });
// stream.on('error', function(err){
//   console.log(err);
// });
// var stream = User1.synchronize({name: 'javed'})
//
//
//
// app.get('/test', function(req, res) {
//
//
//   var Arr = [];
//   for(let i = 0;i<5000;i++){
//     Arr.push({
// 	"name" : "javed",
//   "email" :"javedkhan19950gmail.com",
//   "city"  : "dfghdsg"
// })
// }
//
//
//   // var user = new UserModel(Arr);
//
//   UserModel.insertMany(Arr,function(err, user) {
//     if (err){
//       console.log(err);
//     }
//     if(user){
//     UserModel.on('es-indexed', function(err) {
//       if (err){
//         console.log(err);
//       }else {
//         console.log('user saved',user.length);
//         res.json({'message': 'user saved!', user});
//       }
//     });
//   }
//   });
// });
//
// app.listen(3001, function () {
//   console.log('Example app listening on port 3000!');
// });
//
// var UserModel = mongoose.model("User", UserSchema);


//https://github.com/sergiosdlima/simple-mongoosastic-example


// https://blog.cloudboost.io/sync-mongo-with-elastic-and-save-months-of-development-time-and-cost-d281e0ca8fe4
