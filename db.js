
var mongoose     = require('mongoose')
  // , mongoosastic = require('mongoosastic')
  , Schema       = mongoose.Schema

var User = new Schema({
  name : {type : String},
  status : {type : Boolean, default : true},
  createdat : {type : Number,default : Date.now()},
  address  : {type : String ,default : "gugrat"},
  salary  : {type : Number ,default : 65000},
  section  : {type : String ,default : "G"},
  friends  : {type : String ,default : "Thirty"},
  location  : {type : String ,default : "RavidasNangar"},
  indexing  : {type : String ,default : "Firkey"},
  delition  : {type : String ,default : "Bakbas"}
},
{
        timestamps: true,
        collection: 'user',
        strict: true,
        versionKey: false
    });
// User.createIndex({Type: 'B'});
User.index({name: 1});

// User.plugin(mongoosastic

module.exports = mongoose.model('user',User);
