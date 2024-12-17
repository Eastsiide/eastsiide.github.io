// JavaScript for Multi-Ingredient Search

const ingredientInput = document.getElementById('ingredientInput');
const addIngredientButton = document.getElementById('addIngredient');
const ingredientsDiv = document.getElementById('ingredients');
const searchRecipesButton = document.getElementById('searchRecipes');

let ingredients = [];

// Add Ingredient
addIngredientButton.addEventListener('click', () => {
    const ingredient = ingredientInput.value.trim();
    if (ingredient && !ingredients.includes(ingredient)) {
        ingredients.push(ingredient);

        // Display Ingredient as a Tag
        const ingredientTag = document.createElement('span');
        ingredientTag.textContent = ingredient;
        ingredientsDiv.appendChild(ingredientTag);
    }
    ingredientInput.value = '';
});

document.addEventListener('DOMContentLoaded', () => {
  const ingredientsSpan = document.querySelector('#ingredients span');

  ingredientsSpan.addEventListener('click', (event) => {
    const xClickThreshold = 20; // Adjust this value based on the "x" width and spacing

    if (event.offsetX <= xClickThreshold) {
      ingredientsSpan.remove();
    }
  });
});

// Search Recipes
searchRecipesButton.addEventListener('click', () => {
    if (ingredients.length > 0) {
        const query = ingredients.join('+');

        // Redirect to Google Search for Orchids Sweet & Tea
        const orchidsURL = `https://www.google.com/search?q=site:orchidsandsweettea.com+${query}`;

        // Open both searches in new tabs
        window.open(orchidsURL, '_blank');
    } else {
        alert('Please add at least one ingredient before searching!');
    }
});