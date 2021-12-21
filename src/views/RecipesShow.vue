<template>
  <section id="Login" class="login">
    <div class="container">
      <div class="section-title">
        <h1>{{ recipe.title }}</h1>
        <div class="d-flex">
          <img class="show-image" v-bind:src="recipe.image_url" :alt="recipe.title" />
          <div class="d-flex flex-wrap flex-row flex-sm-column justify-content-between show-content">
            <p>
              <span class="gold">Description:</span>
              {{ recipe.description }}
            </p>
            <p>
              <span class="gold">Ingredients:</span>
              {{ recipe.ingredients }}
            </p>
            <p>
              <span class="gold">Instructions:</span>
              {{ recipe.instructions }}
            </p>
            <router-link v-bind:to="`/beers/${recipe.beers[0].id}`">
              <p>Beer Pairing: {{ recipe.beers[0].name }}</p>
            </router-link>

            <router-link to="/recipes">Back to all recipes</router-link>
          </div>
        </div>
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
      beers: [{ name: "", id: null }],
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
