<template>
  <section id="Login" class="login">
    <div class="container">
      <div class="section-title">
        <h1>{{ recipe.title }}</h1>
        <img v-bind:src="recipe.image_url" :alt="recipe.title" />
        <p>Description: {{ recipe.description }}</p>
        <p>Ingredients: {{ recipe.ingredients }}</p>
        <p>Instructions: {{ recipe.instructions }}</p>
        <router-link v-bind:to="`/beers/${recipe.beers[0].id}`">
          <p>Beer Pairing: {{ recipe.beers[0].name }}</p>
        </router-link>

        <router-link to="/recipes">Back to all recipes</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      recipe: {},
      title: [],
      beers: [],
    };
  },
  created: function () {
    axios.get("/recipes/" + this.$route.params.id).then((response) => {
      this.recipe = response.data;
      console.log(response.data.beers[0].id);
    });
  },
};
</script>
