<template>
  <div class="home">
    <br />
    <br />
    <br />
    <br />

    <h1>{{ message }}</h1>

    <router-link to="/recipes">RecipesIndex</router-link>
    |
    <router-link to="/beers">BeersIndex</router-link>
  </div>
</template>

<script>
export default {
  data: function () {
    return {
      message:
        "Welcome to the Brews + Bites app where you can find awesome recipes and the beers to go with them! Browse the recipes posted, or create your own to add to the list.",
    };
  },
};
</script>

<style>
img {
  width: 250px;
}
</style>
