<template>
  <div>
    <h1>{{ message }}</h1>
    <div>
      Search by title:
      <input type="text" v-model="titleFilter" list="titles" />
      <datalist id="titles">
        <option v-for="recipe in recipes" :key="recipe.id">{{ recipe.title }}</option>
      </datalist>
    </div>

    <div>
      <button v-on:click="setSortAttribute('title')">Sort by Title</button>
    </div>
    <div
      v-for="recipe in orderBy(filterBy(recipes, titleFilter, 'title'), sortAttribute)"
      v-on:click="currentRecipe = recipe"
      v-bind:class="{ selected: recipe === currentRecipe }"
      :key="recipe.id"
    >
      <div class="card" style="width: 18rem">
        <img :src="recipe.image_url" class="card-img-top" alt="oops" />
        <div class="card-body">
          <h5 class="card-title">{{ recipe.title }}</h5>
          <p class="card-description">Description: {{ recipe.description }}</p>
          <p class="card-text">Added: {{ relativeDate(recipe.created_at) }}</p>
          <p class="card-text">Updated: {{ relativeDate(recipe.updated_at) }}</p>
          <router-link :to="`/recipes/${recipe.id}`">
            <a class="btn btn-primary">More info</a>
          </router-link>
        </div>
      </div>
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
    showRecipe: function (recipe) {
      console.log(recipe);
      this.currentRecipe = recipe;
      document.querySelector("#recipe-details").showModal();
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
