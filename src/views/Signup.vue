<template>
  <section id="Login" class="login">
    <div class="container">
      <div class="section-title">
        <form v-on:submit.prevent="submit()">
          <h1>Signup</h1>
          <ul>
            <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
          </ul>

          <div class="col-lg-4 col-md-6 form-group mt-3">
            <input
              type="text"
              v-model="newUserParams.name"
              class="form-control"
              name="name"
              id="name"
              placeholder="Your Name"
            />
            <div class="validate"></div>
          </div>

          <div class="col-lg-4 col-md-6 form-group mt-3">
            <input
              type="email"
              v-model="newUserParams.email"
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
              v-model="newUserParams.password"
              class="form-control"
              name="password"
              id="password"
              placeholder="Your Password"
              data-rule="password"
              data-msg="Please enter a valid password"
            />
            <div class="validate"></div>
            <small v-if="newUserParams.password.length > 0 && newUserParams.password.length < 6" class="text-danger">
              Must be at least 6 charactes
            </small>
            <small v-if="newUserParams.password.length > 20" class="text-danger">
              Password cannot exceed 20 characters
            </small>
          </div>

          <div class="col-lg-4 col-md-6 form-group mt-3">
            <input
              type="password"
              v-model="newUserParams.password_confirmation"
              class="form-control"
              name="password"
              id="password"
              placeholder="Confirm Password"
              data-rule="password"
              data-msg="Please enter a valid password"
            />
            <div class="validate"></div>
            <small
              v-if="newUserParams.password !== '' && newUserParams.password !== newUserParams.password_confirmation"
              class="text-danger"
            >
              Passwords must match
            </small>
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
      newUserParams: { name: "", password: "" },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
