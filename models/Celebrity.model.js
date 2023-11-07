//  Add your code here
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const recipeSchema = new Schema({
    name: {
        type: String,
    },
    occupation: {
        type: String,
    },
    catchPhrase: {
        type: String,
        required: true
    }
})

const Celebrity = mongoose.model('Celebrity',recipeSchema);
module.exports = Celebrity;