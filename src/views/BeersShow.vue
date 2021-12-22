<template>
  <section id="Login" class="login">
    <div class="container">
      <div class="section-title">
        <h1>{{ beer.name }}</h1>
        <div class="d-flex">
          <img class="show-image" v-bind:src="beer.image_url" :alt="beer.name" />
          <div class="d-flex flex-wrap flex-row flex-sm-column justify-content-between-show-content">
            <p>
              <span class="gold">Style:</span>
              {{ beer.style }}
            </p>
            <p>
              <span class="gold">Description:</span>
              {{ beer.description }}
            </p>
            <router-link v-bind:to="`/recipes/${beer.recipes[0].id}`">
              <p>Recipe Pairing: {{ beer.recipes[0].title }}</p>
            </router-link>
            <div class="btns mt-4">
              <a href="/recipes/new" class="btn-menu animated fadeInUp scrollto">Recommend a Recipe for this Beer</a>
            </div>

            <div class="btns mt-4">
              <a href="/beers" class="btn-menu animated fadeInUp scrollto">Back to all beers</a>
            </div>
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
