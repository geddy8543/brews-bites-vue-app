<template>
  <section id="hero" class="d-flex align-items-center welcome-image">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-8">
          <h1>
            <span class="gold">Welcome to the Brews + Bites App!</span>
          </h1>
          <h2>{{ message }}</h2>
          <div class="btns mt-6">
            <router-link to="/recipes" class="btn-menu animated fadeInUp">Recipes Index</router-link>
            <router-link to="/beers" class="btn-book animated fadeInUp">Beers Index</router-link>
          </div>
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
h1 {
  color: saddlebrown;
}
h2 {
  color: saddlebrown;
}
img {
  width: 250px;
}
.margin {
  padding-top: 25%;
  background-image: url("https://images.pexels.com/photos/10156907/pexels-photo-10156907.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500");
  background-size: cover;
  position: relative;
}
/* .words {
  padding-bottom: 100px;
} */
</style>
