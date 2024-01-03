const mongoose = require('mongoose');
const movieSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
        unique: [true,'movie id should be unique'],
        
    },
    title: {
        type: String,
        required: 'This field is required'
    },
    genre: {
        type: String,
    },
    rating: {
        type: Number,
    },
    streamingLink: {
        type: String,
    },
    role: {
        type: String,
        enum: ["admin", "tester", "dev"],
    }
})

module.exports = mongoose.model('Movie', movieSchema)
