

var mongoose     = require('mongoose')
  , mongoosastic = require('mongoosastic')
  , Schema       = mongoose.Schema
var UserSchema = new Schema({
  name : {type : String,es_indexed:true},
  status : {type : Boolean, default : true},
  createdat : {type : Number,default : Date.now()},
  address  : {type : String ,default : "gugrat"},
  salary  : {type : Number ,default : 65000},
  section  : {type : String ,default : "G"},
  friends  : {type : String ,default : "Thirty"},
  location  : {type : String ,default : "RavidasNangar"},
  indexing  : {type : String ,default : "Firkey"},
  delition  : {type : String ,default : "Bakbas"}
})

UserSchema.plugin(mongoosastic, {
  host: "localhost",
  port: 9200
});
module.exports = mongoose.model('user',UserSchema);
