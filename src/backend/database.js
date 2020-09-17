const mongoose = require('mongoose');
const connection = 'mongodb+srv://team4:AUTteam4@cluster0.w1pr9.mongodb.net/seer?retryWrites=true&w=majority';
mongoose.connect(connection,{ useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false})
    .then(() => console.log("Database Connected Successfully"))
    .catch(err => console.log(err));

// mongoose.connect('mongodb+srv://team4:AUTteam4@cluster0.w1pr9.mongodb.net/todos?retryWrites=true&w=majority', { useNewUrlParser: true });
// const connection = mongoose.connection;

// connection.once('open', function() {
//     console.log("MongoDB database connection established successfully");
// })