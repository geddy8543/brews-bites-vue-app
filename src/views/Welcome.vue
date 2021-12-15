<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <router-link to="/recipes">RecipesIndex</router-link>
    |
    <router-link to="/beers">BeersIndex</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message:
        "Welcome to the Brews + Bites app where you can find awesome recipes and the beers to go with them! Browse the recipes posted, or create your own to add to the list.",
    };
  },
  methods: {
    indexRecipes: function () {
      axios.get("/recipes").then((response) => {
        this.recipes = response.data;
        console.log("All recipes", this.recipes);
      });
    },
    indexBeers: function () {
      axios.get("/beers").then((response) => {
        this.beers = response.data;
        console.log("All beers", this.beers);
      });
    },
  },
};
</script>

<style>
img {
  width: 250px;
}
</style>
