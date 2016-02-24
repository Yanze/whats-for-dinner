var mongoose = require('mongoose');

var IngredientSchema = new mongoose.Schema({
  like: [String],
});

// register schema as a model;
mongoose.model('Ingredient', IngredientSchema);
