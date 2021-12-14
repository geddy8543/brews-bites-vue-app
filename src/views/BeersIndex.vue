<template>
  <div>
    <h1>{{ message }}</h1>
    <div>
      Search by name:
      <input type="text" v-model="nameFilter" list="names" />
      <datalist id="names">
        <option v-for="beer in beers" :key="beer.id">{{ beer.name }}</option>
      </datalist>
    </div>

    <div>
      <button v-on:click="setSortAttribute('name')">Sort by Name</button>
      <button v-on:click="setSortAttribute('style')">Sort by Style</button>
    </div>
    <div
      v-for="beer in orderBy(filterBy(beers, nameFilter, 'name'), sortAttribute)"
      v-on:click="currentBeer = beer"
      v-bind:class="{ selected: beer === currentBeer }"
      :key="beer.id"
    >
      <div class="card" style="width: 18rem">
        <img :src="beer.image_url" class="card-img-top" alt="oops" />
        <div class="card-body">
          <h5 class="card-title">{{ beer.name }}</h5>
          <p class="card-text">Style: {{ beer.style }}</p>
          <p class="card-text">Added: {{ relativeDate(beer.created_at) }}</p>
          <p class="card-text">Updated: {{ relativeDate(beer.updated_at) }}</p>
          <router-link :to="`/beers/${beer.id}`">
            <a class="btn btn-primary">More info</a>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.selected {
  color: white;
  background-color: purple;
  transition: background-color 1s ease;
}
</style>

<script>
import axios from "axios";
import moment from "moment";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "Welcome to Brews",
      beer: [],
      currentBeer: {},
      nameFilter: "",
      sortAttribute: "name",
    };
  },
  created: function () {
    this.indexBeers();
  },
  methods: {
    indexBeers: function () {
      axios.get("/beers").then((response) => {
        this.beers = response.data;
        console.log("All beers", this.beers);
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
