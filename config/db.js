const mongoose = require('mongoose');

const connection = mongoose.createConnection('mongodb+srv://ikennasimonbusiness:Collins1999@cluster0.yfagbm6.mongodb.net/?retryWrites=true&w=majority'
).on('open',()=>{
    console.log('Database connection created');
}).on('error',()=>{
    console.log('Error occured connecting to server');
});

module.exports = connection;

// mongoose.connect('mongodb://localhost:27017/test', {
//     useNewUrlParser: true,
//     useUnifiedTopology: true
// });