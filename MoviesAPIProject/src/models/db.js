const mongoose  = require('mongoose');
const MongoUrl = 'mongodb://localhost:27017/MovieDB';
mongoose.connect(MongoUrl, {     
    useNewUrlParser: true,     
    useUnifiedTopology: true,   })   
    .then(() => {     
    console.log("Connected to MongoDB");   
    })   
    .catch((err) => { 
        console.log(err);   
});