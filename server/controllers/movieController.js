const movieModel = require('../models/movieModel.js');
const mongodb = require('mongodb');

module.exports = {
    getMovies: async (req, res) => {
        const movies = await movieModel.loadMoviesCollection();
        res.send(await movies.find({}).toArray());
    },

    getMovie: async (req, res) => {
        const movie = await movieModel.loadMoviesCollection();
        res.send(await movie.findOne({_id: new mongodb.ObjectID(req.params.id)}));
    },

    addMovie: async (req, res) => {
        const movies = await movieModel.loadMoviesCollection();
        await movies.insertOne({
            name: req.body.name,
            price: req.body.price
        });
        res.status(201).send();
    },

    deleteMovie: async (req, res) => {
        const movies = await movieModel.loadMoviesCollection();
        await movies.deleteOne({_id: new mongodb.ObjectID(req.params.id)});
        res.status(200).send();
    }
}

