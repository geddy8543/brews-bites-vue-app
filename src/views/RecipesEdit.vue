<template>
  <div class="recipes-new">
    <form v-on:submit.prevent="updateRecipe()">
      <h1>Edit Recipe!</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Title:</label>
        <input type="text" v-model="currentRecipeParams.title" />
      </div>
      <div>
        <label>Description:</label>
        <input type="text" v-model="currentRecipeParams.description" />
      </div>
      <div>
        <label>Ingredients:</label>
        <input type="text" v-model="currentRecipeParams.ingredients" />
      </div>
      <div>
        <label>Instructions:</label>
        <input type="text" v-model="currentRecipeParams.instructions" />
      </div>
      <div>
        <label>Image Url:</label>
        <input type="text" v-model="currentRecipeParams.image_url" />
      </div>
      <input type="submit" value="Submit" />
    </form>
    <!-- <button v-on:click="destroyRecipe()">Delete</button> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      currentRecipeParams: {},
      errors: [],
    };
  },
  created: function () {
    axios.get(`/recipes/${this.$route.params.id}`).then((response) => {
      console.log("Recipe Info:", response.data);
      this.currentRecipeParams = response.data;
    });
  },
  methods: {
    updateRecipe: function () {
      console.log("Fixing that recipe!");
      axios
        .patch(`/recipes/${this.$route.params.id}`, this.currentRecipeParams)
        .then((response) => {
          this.$router.push(`/recipes/${response.data.id}`);
        })
        .catch((error) => console.log(error.response));
    },
    // destroyRecipe: function () {
    //   axios.delete(`/recipes/${this.$route.params.id}`).then((response) => {
    //     console.log("Good job!", response.data);
    //     this.$router.push("/recipes");
    //   });
  },
};
</script>
