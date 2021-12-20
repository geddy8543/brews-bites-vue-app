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
          <div>
            <label>Name:</label>
            <input type="text" v-model="newBeerParams.name" />
          </div>
          <div>
            <label>Style:</label>
            <input type="text" v-model="newBeerParams.style" />
          </div>
          <div>
            <label>Prep Time:</label>
            <input type="text" v-model="newRecipeParams.prep_time" />
          </div>
          <div>
            <label>Ingredients:</label>
            <input type="text" v-model="newRecipeParams.ingredients" />
          </div>
          <div>
            <label>Directions:</label>
            <input type="text" v-model="newRecipeParams.directions" />
          </div>
          <div>
            <label>Image Url:</label>
            <input type="text" v-model="newRecipeParams.image_url" />
          </div>
          <input type="submit" value="Submit" />
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
      console.log("Making a new Beer!");
      axios
        .post("/beers", this.newBeerParams)
        .then(() => {
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
