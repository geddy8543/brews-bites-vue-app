<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>All recipes:</h2>
    <div v-for="recipe in recipes" :key="recipe.id">
      <h3>{{ recipe.title }}</h3>
      <img :src="recipe.image_url" :alt="recipe.title" />
      <p>Description: {{ recipe.description }}</p>
      <a :href="'/recipes/' + recipe.id">More Info</a>
    </div>

    Search by title:
    <input type="text" v-model="titleFilter" list="titles" />
    <datalist id="titles">
      <option v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</option>
    </datalist>

    <div>
      <button v-on:click="setSortAttribute('title')">Sort by Title</button>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "The Recipes",
      recipes: [],
      currentRecipe: {},
      titleFilter: "",
      sortAttribute: "title",
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

    relativeDate: function (date) {
      return moment(date).fromNow();
    },
    setSortAttribute: function (inputAttribute) {
      this.sortAttribute = inputAttribute;
    },
  },
};
</script>
