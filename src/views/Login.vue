<template>
  <div id="login">
    <main id="main">
      <br />
      <section id="Login" class="login">
        <div class="container">
          <div class="section-title">
            <h1>Login</h1>
            <ul>
              <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
            </ul>
          </div>

          <form
            v-on:submit.prevent="submit()"
            action="/welcome"
            role="form"
            class="php-email-form"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="email"
                v-model="newSessionParams.email"
                class="form-control"
                name="email"
                id="email"
                placeholder="Your Email"
                data-rule="email"
                data-msg="Please enter a valid email"
              />
              <div class="validate"></div>
            </div>
            <div class="col-lg-4 col-md-6 form-group mt-3">
              <input
                type="password"
                v-model="newSessionParams.password"
                class="form-control"
                name="password"
                id="password"
                placeholder="Your Password"
                data-rule="password"
                data-msg="Please enter a valid password"
              />
              <input type="submit" value="Submit" class="mt-3 opaque-button" />
            </div>
          </form>

          <!-- <div class="login">
    <h1>Login</h1>
    <ul>
      <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
    </ul>
    <div>
      <label>Email:</label>
      <input type="email" v-model="newSessionParams.email" />
    </div>
    <div>
      <label>Password:</label>
      <input type="password" v-model="newSessionParams.password" />
    </div>
    <input type="submit" value="Submit" />
  </div> -->
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newSessionParams: {},
      errors: [],
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
          this.$router.push("/welcome");
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
