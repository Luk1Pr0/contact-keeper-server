const mongoose = require('mongoose');
const config = require('config');
const db = config.get('mongoURI');

const connectDB = () => {
    mongoose.connect(db, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
        .then(() => console.log('MongoDB connected'))
        .catch(err => {
            console.log('Error connecting to DB:', err.message);
            process.exit(1);
        });
}

module.exports = connectDB;