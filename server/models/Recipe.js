var pg = require('pg');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('../config/database');
var ingredientInRecipe = require('../models/IngredientInRecipe');

// var reci = new Recipe();
// reci.loadById(8, function(){
//   console.log(reci.name);
// });
module.exports = (function() {

  function Recipe() {
    this.id = 0;
    this.name = "";
    this.ingredients = [];
    this.imgLink = "";
  }

  Recipe.prototype.loadById = function(id, callback) {

    var current_recipe = this;

    pg.connect(dbconfig.connectString, function(err, client) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }

      var sql = 'SELECT ' +
        'recipe.id as recipe_id ' +
        ', recipe.name as recipe_name ' +
        ', recipe.img_link ' +
        ', recipe.description as recipe_description' +
        ', ingredient.name as ingredient_name ' +
        ', ingredient.category ' +
        ', ri.quantity ' +
        ', ri.calories ' +
        'FROM ' +
        'recipe ' +
        'INNER JOIN ' +
        'recipe_ingredient AS ri ' +
        'ON ri.recipe_id = recipe.id ' +
        'INNER JOIN ' +
        'ingredient ' +
        'ON ri.ingredient_id = ingredient.id ' +
        'WHERE ' +
        'recipe.id = $1';

      client.query(sql, [id], function(err, res) {
        if (!res.rows || res.rows.length === 0) {
          return;
        }

        for (var index in res.rows) {
          var row = res.rows[index];

          current_recipe.id = row.recipe_id;
          current_recipe.name = row.recipe_name;
          current_recipe.description = row.recipe_description;
          current_recipe.imgLink = row.img_link;

          var ingredient = new ingredientInRecipe.IngredientInRecipe(row.ingredient_name,
            row.category,
            row.quantity,
            row.calories);

          current_recipe.ingredients.push(ingredient);

        }
        callback();

      });
    });
  };

  Recipe.prototype.getAll = function(callback) {
    var recipes = [];

    pg.connect(dbconfig.connectString, function(err, client) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }

      var sql = 'SELECT ' +
        'recipe.id as recipe_id ' +
        ', recipe.recipe_num ' +
        ', recipe.name as recipe_name ' +
        ', recipe.img_link ' +
        ', recipe.description as recipe_description' +
        ', ingredient.name as ingredient_name ' +
        ', ingredient.category ' +
        ', ri.quantity ' +
        ', ri.calories ' +
        'FROM ' +
        'recipe ' +
        'INNER JOIN ' +
        'recipe_ingredient AS ri ' +
        'ON ri.recipe_id = recipe.id ' +
        'INNER JOIN ' +
        'ingredient ' +
        'ON ri.ingredient_id = ingredient.id ' +
        'ORDER BY ' +
        'recipe_id';

      client.query(sql, [], function(err, res) {
        if (!res.rows || res.rows.length === 0) {
          return;
        }

        // Create first recipe (for the list)
        var current_recipe = new Recipe();
        current_recipe.id = res.rows[0].recipe_id;

        for (var index in res.rows) {

          var row = res.rows[index];

          // if current_row is from a different recipe.
          if (row.recipe_id !== current_recipe.id && recipes.length < 5) {

            // push current_recipe to the list because we have a new one!
            recipes.push(current_recipe);

            // create new instance to store the new recipe.
            current_recipe = new Recipe();
          }

          current_recipe.id = row.recipe_id;
          current_recipe.name = row.recipe_name;
          current_recipe.recipe_num = row.recipe_num;
          current_recipe.description = row.recipe_description;
          current_recipe.imgLink = row.img_link;

          var ingredient = new ingredientInRecipe.IngredientInRecipe(row.ingredient_name,
            row.category,
            row.quantity,
            row.calories);

          current_recipe.ingredients.push(ingredient);

        }

        // push last recipe in the list!
        recipes.push(current_recipe);

        callback(recipes);

      });
    });
  };

  Recipe.prototype.getNewRecipe = function(excludedRecipes, callback) {
    var current_recipe = this;
    var ids = [];
    var recipe;
    pg.connect(dbconfig.connectString, function(err, client) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }

      var sql = 'SELECT recipe.id ' +
        'FROM ' +
        'recipe';

      client.query(sql, [], function(err, res) {
        for (var index in res.rows) {
            ids.push(res.rows[index].id);
          }

        for(var i in excludedRecipes){
          var indexNum = ids.indexOf(excludedRecipes[i]);

          if(indexNum > -1){
            ids.splice(indexNum, 1);
          }
        }

        var id = ids[Math.floor(Math.random()*ids.length)];

        current_recipe.loadById(id, function(){
        callback();
        });

      });
    });

  };

  Recipe.prototype.getCurrentRecipesByIds = function(ids, callback){
    var recipes = [];
    pg.connect(dbconfig.connectString, function(err, client) {
      if (err) {
        return console.error('error fetching client from pool', err);
      }

      var sql = 'SELECT * ' +
        'FROM ' +
        'recipe ' +
        'WHERE id = ANY ($1::int[])';


      client.query(sql, [ids], function(err, res) {

        var recipes = [];
        for(var i in ids){
          var id = ids[i];

          for(var j in res.rows){
            if(id == res.rows[j].id){
              recipes.push(res.rows[j]);
              break;
            }
          }

        }

        callback(recipes);
      });

    });

  };



  return {
    Recipe: Recipe
  };
})();
