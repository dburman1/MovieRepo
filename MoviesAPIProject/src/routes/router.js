const express = require('express');
const router = express.Router();
//Imported controller to our routes file
const movieController = require('../controller/moviecontroller');

/*Routes*/
router.get('/movies', movieController.movieList);

router.post('/movies', movieController.addMovie);

router.delete('/movies/:id', movieController.deleteMovie);

router.put('/movies/:id', movieController.updateMovie);

router.get('/search', movieController.searchMovie);



module.exports = router;