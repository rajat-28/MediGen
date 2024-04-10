const mongoose = require('mongoose');

const FormDataSchema = new mongoose.Schema({
    name : String,
    email: String,
    password: String
})

const FormDataModel = mongoose.model('Medigen_Users', FormDataSchema);

module.exports = FormDataModel;