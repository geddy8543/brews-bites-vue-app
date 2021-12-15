<template>
  <div class="recipes-show">
    <h1>{{ recipe.title }}</h1>
    <img :src="recipe.image_url" :alt="recipe.title" />
    <p>Description: {{ recipe.description }}</p>
    <p>Ingredients: {{ recipe.ingredients }}</p>
    <p>Instructions: {{ recipe.instructions }}</p>
    |
    <router-link to="/recipes">Back to all recipes</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      recipe: {},
    };
  },
  created: function () {
    axios.get("/recipes/" + this.$route.params.id).then((response) => {
      this.recipe = response.data;
    });
  },
};
</script>
