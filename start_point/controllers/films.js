//since we don't have a database we'll use our front end models at the moment
var express = require('express');
var films = require('../client/src/models/films')();
var Film = require('../client/src/models/film');
var Review = require('../client/src/models/review');
var filmRouter = express.Router();

// var films = new Films();
// var newFilm = new Film("Harry Potter and the Goblet of Fire", ["Daniel Radcliffe", "Emma Watson", "Rupert Grint"]);
// var newReview = new Review("Dragons and broomsticks and goblets, oh my", 70, "Claire");
// newFilm.addReview(newReview);

//Index
filmRouter.get('/api/films', function(req, res){
  res.json(films);
});

//Show
filmRouter.get('/api/films/:id', function(req, res){
  res.json({data: films[req.params.id]}); 
});

//Create
filmRouter.post('/api/films', function(req, res){
  films.push(req.body.film);
  res.json({data: films});
});

//Update
filmRouter.put('/api/films/:id', function(req, res){
  films[req.params.id] = req.body.film;
  res.json({data: films});
});

//Delete
filmRouter.delete('/api/films/:id', function(req, res){
  films.splice(req.params.id, 1);
  res.json({data: films});
});

module.exports = filmRouter;