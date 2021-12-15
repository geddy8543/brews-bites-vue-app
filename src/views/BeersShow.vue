<template>
  <div class="beers-show">
    <h1>{{ beer.name }}</h1>
    <img :src="beer.image_url" :alt="beer.name" />
    <p>Style: {{ beer.style }}</p>
    <p>Description: {{ beer.description }}</p>
    |
    <router-link to="/beers">Back to all beers</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      beer: {},
    };
  },
  created: function () {
    axios.get("/beers/" + this.$route.params.id).then((response) => {
      this.beer = response.data;
    });
  },
};
</script>
