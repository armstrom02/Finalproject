'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var userprofile = new Schema({

name: {type: String, required: true , unique: true},
email: {type: String,required: true},
mobile: {type: Number,},
admin: {type: Boolean,default: "false"},
dob: {type: Date,required: true},
password: {type: String,required: true},
created_date: {type: Date,default: Date.now},
});



var tvseries = new Schema({

name: {type: String,required: true,unique: true},
category: {type: String,required: true},
season: {type: Number,required: true},
series: {type: String,required: true},
episode: {type: Number,required: true},  
description: {type: String},
length: {type: Number,required: true},
url: {type: String,required: true},


});


var movies = new Schema({

name: {type: String,unique: true,required: true},
category: {type: String,required: true},
description: {type: String,},
length: {type: Number,required: true},
url: {type: String,required: true}, 

});




module.exports = mongoose.model('userp', userprofile);
module.exports = mongoose.model('tvseries', tvseries);
module.exports = mongoose.model('movies', movies);
