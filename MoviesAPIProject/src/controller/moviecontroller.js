const { response, request } = require('express');
const Movie = require('../models/movie')

require('../models/db');

async function movieList(req,res){   
    console.log("Movie list api called");
    try{
        const response = await Movie.find();  
        res.status(200).send(response);
    } catch(error){
        res.status(400).send(error);
    }
}

async function addMovie(req, res){
    console.log("Add Movie Api called")
    const addMovie = new Movie({
        id: req.body.id,
        title: req.body.title,
        genre: req.body.genre,
        rating: req.body.rating,
        streamingLink: req.body.streamingLink,
        role: req.body.role
    })
    try{
        if(addMovie.role=='admin'){
            const response = await addMovie.save({$eq: {'role':'admin'}});
            res.status(200).send("Movie added successfully");
        } else {
            res.status(403).send('Dont have permissin to add movies');
        }
    } catch(error){
        if (error.code === 11000) {
            return res.status(400).send({'Error' : 'movie id must be unique'});
          }
        res.status(400).send(error);
    }
}

async function deleteMovie(req,res){   
    try{
        const id = req.params.id;
        const role = req.body.role;
        if(role=='admin'){
            const response = await Movie.find({'id':id}); 
            res.status(200).send({'Response':'Movie Deleted Successfully'});
        } else {
            res.status(403).send('Dont have permissin to delete movies');
        }
    } catch(error){
        res.status(400).send(error);
    }
}

async function updateMovie(req,res){   
    try{
        const id = req.params.id;
        const role = req.body.role;
        if(role=='admin'){
            const response = await Movie.findOneAndUpdate({'id':id}, {
                title: req.body.title,
                genre: req.body.genre,
                rating: req.body.rating,
                streamingLink: req.body.streamingLink
            });  
            res.status(200).send({'Response':'Movie Updated Successfully'});
        } else {
            res.status(403).send('Dont have permissin to update movies');
        }
    } catch(error){
        res.status(400).send(error);
    }
}

async function searchMovie(req,res){   
    try{
        console.log(req)
        const title = req.query.title;
        const genre = req.query.genre;
        console.log(title,genre)
        const response = await Movie.find({$or:[{'title': title},{'genre':genre}]})
        res.status(200).send({'Response': response});
    } catch(error){
        res.status(400).send(error);
    }
}

module.exports = {
movieList : movieList,
addMovie : addMovie,
updateMovie : updateMovie,
deleteMovie : deleteMovie,
searchMovie : searchMovie,
}