<template>
  <div>
    <main id="main">
      <!-- ======= Why Us Section ======= -->
      <section id="why-us" class="why-us">
        <div class="container" data-aos="fade-up">
          <div class="section-title">
            <h1>The Beers</h1>
          </div>

          <div class="row">
            <div class="col-lg-4 mt-4 mt-lg-0" v-for="beer in beers" :key="beer.id">
              <div class="box" data-aos="zoom-in" data-aos-delay="100">
                <!-- <router-link v-bind:to="`/beers/${beer.id}`"> -->
                <span>{{ beer.name }}</span>
                <!-- </router-link> -->
                <h4>{{ beer.description }}</h4>
                <p><a :href="'/beers/' + beer.id">More Info</a></p>
              </div>
            </div>
            <div class="btns mt-4">
              <a href="/beers/new" class="btn-menu animated fadeInUp scrollto">Add a Beer</a>
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
    <h2>All beers:</h2>
    <div v-for="beer in beers" :key="beer.id">
      <h3>{{ beer.name }}</h3>
      <img :src="beer.image_url" :alt="beer.name" />
      <p>Description: {{ beer.description }}</p>
      <a :href="'/beers/' + beer.id">More Info</a>
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
      message: "The beers",
      beers: [],
      currentBeer: {},
      titleFilter: "",
      sortAttribute: "title",
    };
  },
  created: function () {
    this.indexbeers();
  },
  methods: {
    indexbeers: function () {
      axios.get("/beers").then((response) => {
        this.beers = response.data;
        console.log("All Beers", this.beers);
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
