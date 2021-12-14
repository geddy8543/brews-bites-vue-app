<template>
  <div class="recipes-show">
    <h1>{{ recipe.title }}</h1>
    <img :src="recipe.image_url" :alt="recipe.title" />
    <p>Description: {{ recipe.description }}</p>
    <p>Ingredients: {{ recipe.ingredients }}</p>
    <p>Instructions: {{ recipe.instructions }}</p>
    <p>image_url: {{ recipe.image_url }}</p>
    <div v-if="$parent.getUserId() == recipe.user_id">
      <router-link v-bind:to="`/recipes/${recipe.id}/edit`">Edit this recipe</router-link>
    </div>

    |
    <router-link to="/">Back to all recipes</router-link>
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
