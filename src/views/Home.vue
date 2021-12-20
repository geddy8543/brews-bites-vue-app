<template>
  <!-- ======= Hero Section ======= -->
  <section id="hero" class="d-flex align-items-center">
    <div class="container position-relative text-center text-lg-start" data-aos="zoom-in" data-aos-delay="100">
      <div class="row">
        <div class="col-lg-8">
          <h1>
            Welcome to
            <span>Brews + Bites</span>
          </h1>
          <h2>Everything's Better With Beer</h2>

          <div class="btns">
            <a href="/login" class="btn-menu animated fadeInUp scrollto">Login</a>
            <a href="/signup" class="btn-book animated fadeInUp scrollto">Signup</a>
          </div>
        </div>
      </div>
      <div id="map"></div>
    </div>
  </section>
  <!-- End Hero -->
</template>

<style>
img {
  width: 250px;
}
</style>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Brews + Bites",
    };
  },
  mounted: function () {
    this.setUpMap();
  },
  methods: {
    submit: function () {
      axios
        .post("/sessions", this.newSessionParams)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$parent.flashMessage = "Successfully logged in!";
          this.$router.push("/");
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
