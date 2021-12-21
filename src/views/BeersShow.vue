<template>
  <section id="Login" class="login">
    <div class="container">
      <div class="section-title">
        <h1>{{ beer.name }}</h1>
        <img v-bind:src="beer.image_url" :alt="beer.name" />
        <!-- <img v-bind:src="recipe.image_url" :alt="recipe.title" /> -->
        <p>Style: {{ beer.style }}</p>
        <p>Description: {{ beer.description }}</p>
        <router-link v-bind:to="`/recipes/${beer.recipes[0].id}`">
          <p>Recipe Pairing: {{ beer.recipes[0].title }}</p>
        </router-link>

        <router-link to="/beers">Back to all beers</router-link>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      beer: {},
      title: [],
      recipes: [],
    };
  },
  created: function () {
    axios.get("/beers/" + this.$route.params.id).then((response) => {
      this.beer = response.data;
    });
    // this.getRecipes();
  },
  // methods: {
  //   getRecipes: function () {
  //     axios.get("/recipes/").then((response) => {
  //       response.data.forEach((item) => {
  //         // console.log("Tag:", item);
  //         var object = {};
  //         object["title"] = item.title;
  //         object["id"] = item.id;
  //       });
  //       this.recipes = response.data;
  //       console.log("Recipes:", this.recipes);
  //     });
  //   },
  // },
};
</script>
