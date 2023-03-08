const mongoose = require('mongoose');
const { Schema, model } = mongoose;

const favouriteSchema = new Schema({
  title: String,
  id: Number,
});

const Favourite = model('Favourite', favouriteSchema);


module.exports = Favourite;