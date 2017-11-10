'use strict';


var mongoose = require('mongoose'),
  Task = mongoose.model('userp'),
  moviesdb = mongoose.model('movies'),
  tvseriesdb = mongoose.model('tvseries');



exports.get_tvseries= function(req, res) {
  tvseriesdb.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.get_tvseries_category= function(req, res) {
  var category=req.params.category;
  tvseriesdb.find({category:category}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
 }; 

exports.create_tvseries = function(req, res) {
  var new_task = new tvseriesdb(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_tvseries = function(req, res) {
  tvseriesdb.remove({
    name: req.params.name
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};




exports.get_movies= function(req, res) {
  moviesdb.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};

exports.get_movies_category= function(req, res) {
  var category=req.params.category;
  moviesdb.find({category:category}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
 }; 

exports.create_movies = function(req, res) {
  var new_task = new moviesdb(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_movies = function(req, res) {
  moviesdb.remove({
    name: req.params.name
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};






exports.get_all= function(req, res) {
  Task.find({}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};



exports.create_user = function(req, res) {
  var new_task = new Task(req.body);
  new_task.save(function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.get_user = function(req, res) {
  Task.findOne({name: req.params.name}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.update_user = function(req, res) {
  Task.findOneAndUpdate({_id: req.params.userId}, req.body, {new: true}, function(err, task) {
    if (err)
      res.send(err);
    res.json(task);
  });
};


exports.delete_user = function(req, res) {


  Task.remove({
    _id: req.params.userId
  }, function(err, task) {
    if (err)
      res.send(err);
    res.json({ message: 'Task successfully deleted' });
  });
};


