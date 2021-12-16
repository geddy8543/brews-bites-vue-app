<template>
  <div>
    <h1>{{ message }}</h1>
    <h2>All beers:</h2>
    <div v-for="beer in beers" :key="beer.id">
      <h3>{{ beer.name }}</h3>
      <img :src="beer.image_url" :alt="beer.name" />
      <p>Description: {{ beer.description }}</p>
      <a :href="'/beers/' + beer.id">More Info</a>
    </div>

    Search by title:
    <input type="text" v-model="titleFilter" list="titles" />
    <datalist id="titles">
      <option v-for="beer in beers" :key="beer.id">{{ beer.title }}</option>
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
      message: "The beers",
      beers: [],
      currentBeer: {},
      titleFilter: "",
      sortAttribute: "title",
    };
  },
  created: function () {
    this.indexbeers();
  },
  methods: {
    indexbeers: function () {
      axios.get("/beers").then((response) => {
        this.beers = response.data;
        console.log("All Beers", this.beers);
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
