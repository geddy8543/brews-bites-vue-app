<template>
  <div class="home">
    <h1>{{ message }}</h1>

    <router-link to="/signup">Signup</router-link>
    |
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data: function () {
    return {
      message: "Brews + Bites",
    };
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

<style>
img {
  width: 250px;
}
</style>
