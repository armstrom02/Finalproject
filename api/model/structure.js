'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var userprofile = new Schema({

name: {type: String},
email: {type: String,},
mobile: {type: Number,},
admin: {type: Boolean},
dob: {type: Date,},
password: {type: String,},
created_date: {type: Date,default: Date.now},
});



var tvseries = new Schema({

name: {type: String},
category: {type: String},
series: {type: String},
episode: {type: Number},  
description: {type: String},
length: {type: Number},
url: {type: String},


});


var movies = new Schema({

name: {type: String,},
category: {type: String,},
description: {type: String,},
length: {type: Number,},
url: {type: String,}, 

});




module.exports = mongoose.model('userp', userprofile);
module.exports = mongoose.model('tvseries', tvseries);
module.exports = mongoose.model('movies', movies);
