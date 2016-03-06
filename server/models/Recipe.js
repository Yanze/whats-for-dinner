var pg = require('pg');
var bcrypt = require('bcrypt-nodejs');
var dbconfig = require('../config/database');


module.exports = (function(){

  function Recipe(){
    //  this.recipeName = recipeName;
    //  this.ingredients = [
    //    {name:"", category:"", qty:"", cal:""},
    //    {name:"", category:"", qty:"", cal:""}
    //  ];
    //
    // //  this.quantity = quantity;
    // //  this.calories = calories;
    //  this.imgLink = imgLink;
   }

   Recipe.prototype.getById = function(id){
     var recipe = new Recipe();

     //SQL Queries....
     res = SQL.exec

     recipe.name = res[0].name;



     return recipe;
   };

   Recipe.prototype.getAll = function(){
     var recipes = {};
     pg.connect(dbconfig.connectString, function(err, client, done){
       if(err){
        return console.error('error fetching client from pool', err);
      }
      var sql = "SELECT * FROM recipe";
      client.query(sql, function(err, res){
        recipes.name = res.rows;
      });
     });
   };


   return {
     Recipe: Recipe
   };
})();
