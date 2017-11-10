'use strict';
module.exports = function(app) {
  var call= require('../controller/controller');

  // todoList Routes
  app.route('/user')
    .get(call.get_all)
    .post(call.create_user);

  app.route('/user/:name')
    .get(call.get_user)
    .put(call.update_user)
    .delete(call.delete_user);

  
 app.route('/tvseries')
    .get(call.get_tvseries)
    .post(call.create_tvseries);

 app.route('/tvseries/:category')
    .get(call.get_tvseries_category)
     
 app.route('/tvseries/:name')
    .delete(call.delete_tvseries)


 app.route('/movies')
    .get(call.get_movies)
    .post(call.create_movies);

 app.route('/movies/:category')
    .get(call.get_movies_category)
     
 app.route('/movies/:name')
    .delete(call.delete_movies)
     

};