const mongoose = require('mongoose');

const URL = `mongodb+srv://backend_merge:kevin123@cluster0.eqecbbt.mongodb.net/`

/**
 * @description CONNECT TO DB
*/
mongoose.set('strictQuery', false);
mongoose.connect(URL)
    .then(db => console.log(`DB is connected`))
    .catch(err => console.log(err))

module.exports = mongoose;