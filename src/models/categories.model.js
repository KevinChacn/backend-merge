const mongoose = require('mongoose');
const { Schema } = mongoose;

const categorySchema = new Schema({
    name: { type: Schema.Types.String, require: true, maxlength: 50 },
    description: { type: Schema.Types.String, require: true, maxlength: 100 },
});

module.exports = mongoose.model('category', categorySchema);