<template>
  <div>
    <main id="main">
      <!-- ======= Why Us Section ======= -->
      <section id="why-us" class="why-us">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <br />
            <br />
            <h1>The Recipes</h1>
          </div>

          <div class="row">
            <div class="col-lg-4 mt-4 mt-lg-0" v-for="recipe in recipes" :key="recipe.id">
              <div class="box" data-aos="zoom-in" data-aos-delay="100">
                <span>{{ recipe.title }}</span>
                <h4>{{ recipe.description }}</h4>
                <p><a :href="'/recipes/' + recipe.id">More Info</a></p>
              </div>
            </div>
            <div class="btns mt-4">
              <a href="/recipes/new" class="btn-menu animated fadeInUp scrollto">Create a Recipe</a>
            </div>

            <!-- <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box" data-aos="zoom-in" data-aos-delay="200">
                <span>02</span>
                <h4>Repellat Nihil</h4>
                <p>
                  Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para
                  dest
                </p>
              </div>
            </div>

            <div class="col-lg-4 mt-4 mt-lg-0">
              <div class="box" data-aos="zoom-in" data-aos-delay="300">
                <span>03</span>
                <h4>Ad ad velit qui</h4>
                <p>Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis</p>
              </div>
            </div> -->
          </div>
        </div>
      </section>
      <!-- End Why Us Section -->
    </main>
    <!-- <h1>{{ message }}</h1>
    <h2>All recipes:</h2>
    <div v-for="recipe in recipes" :key="recipe.id">
      <h3>{{ recipe.title }}</h3>
      <img :src="recipe.image_url" :alt="recipe.title" />
      <p>Description: {{ recipe.description }}</p>
      <a :href="'/recipes/' + recipe.id">More Info</a>
    </div> -->
  </div>
</template>

<script>
import axios from "axios";
import moment from "moment";
import Vue2Filters from "vue2-filters";
export default {
  mixins: [Vue2Filters.mixin],
  data: function () {
    return {
      message: "The Recipes",
      recipes: [],
      currentRecipe: {},
      titleFilter: "",
      sortAttribute: "title",
    };
  },
  created: function () {
    this.indexRecipes();
  },
  methods: {
    indexRecipes: function () {
      axios.get("/recipes").then((response) => {
        this.recipes = response.data;
        console.log("All recipes", this.recipes);
      });
    },

    relativeDate: function (date) {
      return moment(date).fromNow();
    },
    setSortAttribute: function (inputAttribute) {
      this.sortAttribute = inputAttribute;
    },
  },
};
</script>
