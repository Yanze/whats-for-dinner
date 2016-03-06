module.exports = (function(){

  function IngredientInRecipe(name, category, quantity, calories){
     this.name = name;
     this.category = category;
     this.quantity = quantity;
     this.calories = calories;
     
   }

   return {
     IngredientInRecipe: IngredientInRecipe
   };
})();
