const mongoose = require('mongoose');
const { Schema } = mongoose;

const formSchema = new Schema({
    name: String,
    phone: String
});

mongoose.model('forms', formSchema);