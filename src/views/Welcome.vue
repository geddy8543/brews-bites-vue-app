<template>
  <section id="Login" class="login">
    <div class="container">
      <div class="section-title">
        <h1>Welcome to the Brews + Bites App!</h1>
        <h2>{{ message }}</h2>
        <div class="btns mt-3">
          <router-link to="/recipes" class="btn-menu animated fadeInUp">Recipes Index</router-link>
          <router-link to="/beers" class="btn-book animated fadeInUp">Beers Index</router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data: function () {
    return {
      message:
        "You can find awesome recipes and the beers to go with them! Browse the recipes posted, or create your own to add to the list.",
    };
  },
};
</script>

<style>
img {
  width: 250px;
}
</style>
