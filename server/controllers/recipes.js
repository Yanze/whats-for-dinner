var recipe = require('../models/Recipe');


module.exports = (function(){
  return{
    getById: function(req, res) {
      var current_recipe = new recipe.Recipe();
      current_recipe.loadById(req.params.id,function(){
        res.json(current_recipe);
      });

      },
    getAll: function(req, res) {

      var current_recipe = new recipe.Recipe();
      current_recipe.getAll(function(recipes){
        res.json(recipes);
      });

      },

      getNewRecipe: function(req, res){
        var current_recipe = new recipe.Recipe();
        current_recipe.getNewRecipe(req.body, function(){
          res.json(current_recipe);
        });
      },

      getCurrentRecipesByIds: function(req, res){
        var current_recipes = new recipe.Recipe();
        current_recipes.getCurrentRecipesByIds(req.body, function(recipes){
          res.json(recipes);
        });
      }



 };
})();
