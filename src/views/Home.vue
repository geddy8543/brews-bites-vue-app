<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <h1>New Recipe</h1>
    Title:
    <input type="text" v-model="newRecipeParams.title" />
    Description:
    <input type="text" v-model="newRecipeParams.description" />
    Ingredients:
    <input type="integer" v-model="newRecipeParams.ingredients" />
    Instructions:
    <input type="text" v-model="newRecipeParams.instructions" />
    ImageUrl:
    <input type="text" v-model="newRecipeParams.image_url" />
    <button v-on:click="createRecipe()">Create Recipe</button>
    <h2>All recipes:</h2>
    <div v-for="recipe in recipes" :key="recipe.id">
      <h3>{{ recipe.title }}</h3>
      <img :src="recipe.image_url" :alt="recipe.title" />
      <p>Chef: {{ recipe.chef }}</p>
      <button v-on:click="showRecipe(recipe)">More Info</button>
    </div>
    <dialog id="recipe-details">
      <form method="dialog">
        <h1>Recipe Info:</h1>
        <p>
          Title:
          <input type="text" v-model="currentRecipe.title" />
        </p>
        <p>
          Description:
          <input type="text" v-model="currentRecipe.description" />
        </p>
        <p>
          Ingredients:
          <input type="text" v-model="currentRecipe.ingredients" />
        </p>
        <p>
          Instructions:
          <input type="text" v-model="currentRecipe.instructions" />
        </p>
        <button v-on:click="updateRecipe(currentRecipe)">Update Recipe</button>
        <!-- <button v-on:click="destroyRecipe(currentRecipe)">Delete</button> -->
        <button>close</button>
      </form>
    </dialog>
  </div>
</template>

<style>
img {
  width: 250px;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Brews + Bites!!",
      recipes: [],
      newRecipeParams: {},
      currentRecipe: {},
    };
  },
  created: function () {
    this.indexRecipes();
  },
  methods: {
    indexRecipes: function () {
      axios.get("/recipes").then((response) => {
        this.recipes = response.data;
        console.log("All recipes", this.recipes);
      });
    },
    createRecipe: function () {
      console.log("Makin a new recipe!");
      axios
        .post("/recipes", this.newRecipeParams)
        .then((response) => {
          console.log("Success!", response.data);
          this.recipes.push(response.data);
        })
        .catch((error) => console.log(error.response));
    },
    showRecipe: function (recipe) {
      console.log(recipe);
      this.currentRecipe = recipe;
      document.querySelector("#recipe-details").showModal();
    },
    updateRecipe: function (recipe) {
      axios.patch("/recipes/" + recipe.id, recipe).then((response) => {
        console.log("Success", response.data);
      });
    },
    // destroyRecipe: function (recipe) {
    //   axios.delete("/recipes/" + recipe.id).then((response) => {
    //     console.log("Success!", response.data);
    //     var index = this.recipes.indexOf(recipe);
    //     this.recipes.splice(index, 1);
    //   });
    // },
  },
};
</script>
