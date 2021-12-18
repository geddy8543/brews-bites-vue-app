<template>
  <section id="Login" class="login">
    <div class="container">
      <div class="section-title">
        <img v-if="status" :src="`https://http.cat/${status}`" alt="" />
        <form v-on:submit.prevent="createRecipe()">
          <h1>New Recipe!</h1>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>
          <div>
            <label>Title:</label>
            <input type="text" v-model="newRecipeParams.title" />
          </div>
          <div>
            <label>Description:</label>
            <input type="text" v-model="newRecipeParams.description" />
          </div>
          <div>
            <label>Ingredients:</label>
            <input type="text" v-model="newRecipeParams.ingredients" />
          </div>
          <div>
            <label>Instructions:</label>
            <input type="text" v-model="newRecipeParams.instructions" />
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
      newRecipeParams: {},
      errors: [],
      status: "",
    };
  },
  methods: {
    createRecipe: function () {
      console.log("Making a new recipe!");
      axios
        .post("/recipes", this.newRecipeParams)
        .then(() => {
          this.$router.push("/recipes");
        })
        .catch((error) => {
          this.status = error.response.status;
          console.log(error.response);
        });
    },
  },
};
</script>
