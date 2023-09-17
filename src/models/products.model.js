const mongoose = require('mongoose');
const { Schema } = mongoose;

const productsSchema = new Schema({
    date_create: { type: Date, require: true },
    name: { type: Schema.Types.String, require: true, maxlength: 100 },
    valor: { type: Schema.Types.Number, require: true, maxlength: 30 },
    stock: { type: Schema.Types.Number, require: true, maxlength: 5 },
    id_category: { type: Schema.ObjectId, ref: "category", required: true},
});

module.exports = mongoose.model('products', productsSchema);