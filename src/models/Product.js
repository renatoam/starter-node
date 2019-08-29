// Schema: campos/atributos e valor

const mongoose = require('mongoose');
const mongoosePaginate = require('mongoose-paginate');

const ProductSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

ProductSchema.plugin(mongoosePaginate);

// Informa para a aplicação que temos um model chamado Product que tem como estrutura o ProductSchema
mongoose.model('Product', ProductSchema);