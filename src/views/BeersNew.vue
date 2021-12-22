<template>
  <section id="Login" class="login">
    <div class="container">
      <div class="section-title">
        <img v-if="status" :src="`https://http.cat/${status}`" alt="" />
        <form v-on:submit.prevent="createBeer()">
          <h1>New Beer!</h1>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div class="col-lg-4 col-md-6 form-group mt-3">
            <input
              type="text"
              v-model="newBeerParams.name"
              class="form-control"
              name="name"
              id="name"
              placeholder="Name"
            />
          </div>
          <div class="col-lg-4 col-md-6 form-group mt-3">
            <input
              type="text"
              v-model="newBeerParams.style"
              class="form-control"
              name="style"
              id="style"
              placeholder="Style"
            />
          </div>
          <div class="col-lg-4 col-md-6 form-group mt-3">
            <input
              type="text"
              v-model="newBeerParams.description"
              class="form-control"
              name="description"
              id="description"
              placeholder="Description"
            />
          </div>

          <div class="col-lg-4 col-md-6 form-group mt-3">
            <input
              type="text"
              v-model="newBeerParams.image_url"
              class="form-control"
              name="image_url"
              id="image_url"
              placeholder="Photo"
            />
          </div>
          <input type="submit" value="Submit" class="mt-3 opaque-button" />
        </form>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newBeerParams: {},
      errors: [],
      status: "",
    };
  },
  methods: {
    createBeer: function () {
      axios
        .post("/beers", this.newBeerParams)
        .then((response) => {
          console.log("Making a new Beer!", response);
          this.$router.push("/beers");
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
  },
};
</script>
