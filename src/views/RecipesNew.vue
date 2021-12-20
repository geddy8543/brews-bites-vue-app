<template>
  <section id="Login" class="login">
    <div class="container">
      <div class="section-title">
        <div>
          <img v-if="status" :src="`https://http.cat/${status}`" alt="" />
          <form v-on:submit.prevent="createRecipe()">
            <h1>New Recipe!</h1>
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                v-model="newRecipeParams.title"
                class="form-control"
                name="title"
                id="title"
                placeholder="Title"
              />
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                v-model="newRecipeParams.description"
                class="form-control"
                name="description"
                id="description"
                placeholder="Description"
              />
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                v-model="newRecipeParams.ingredients"
                class="form-control"
                name="ingredients"
                id="ingredients"
                placeholder="Ingredients"
              />
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                v-model="newRecipeParams.instructions"
                class="form-control"
                name="instructions"
                id="instructions"
                placeholder="Instructions"
              />
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="text"
                v-model="newRecipeParams.image_url"
                class="form-control"
                name="image_url"
                id="image_url"
                placeholder="Upload an Image"
              />
            </div>

            <input type="submit" value="Submit" class="mt-3 opaque-button" />
          </form>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newRecipeParams: {
        title: "",
        description: "",
        ingredients: "",
        instructions: "",
        image_url: "",
      },
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
