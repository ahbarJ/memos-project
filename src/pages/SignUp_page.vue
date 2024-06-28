<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
          <q-icon
            name="fa-solid fa-dove"
            size="lg"
            color="primary"
            class="q-pa-md absolute-center"
          ></q-icon>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card
          class="q-pa-md shadow-2 my_card"
          bordered
          style="min-width: 400px; margin: auto"
        >
          <q-card-section class="text-center">
            <div class="dark text-h5 text-weight-bold">Sign up</div>
            <div class="text-grey-8">Sign up below to access the website</div>
          </q-card-section>
          <q-card-section>
            <q-input
              dense
              outlined
              v-model="fullname"
              type="text"
              Placeholder="Your name"
              class="q-pa-sm"
            ></q-input>
            <q-input
              dense
              outlined
              v-model="username"
              Placeholder="Username"
              :pattern="usernamePattern"
              class="q-pa-sm"
            />
            <q-input
              dense
              outlined
              v-model="email"
              type="email"
              Placeholder="Email Address"
              class="q-pa-sm"
            ></q-input>
            <q-input
              dense
              outlined
              class="q-pa-sm q-mb-md"
              v-model="password"
              :type="isPwd ? 'password' : 'text'"
              hint="Enter Password"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-input
              dense
              v-model="password_conf"
              outlined
              class="q-pa-sm q-mb-md"
              :type="isPwd ? 'password' : 'text'"
              hint="Confirm Password"
            >
              <template v-slot:append>
                <q-icon
                  :name="isPwd ? 'visibility_off' : 'visibility'"
                  class="cursor-pointer"
                  @click="isPwd = !isPwd"
                />
              </template>
            </q-input>
            <q-input
              dense
              outlined
              v-model="date"
              type="date"
              class="q-pa-sm"
            ></q-input>
          </q-card-section>
          <q-card-section>
            <q-btn
              @click="onSubmit"
              style="border-radius: 8px"
              color="primary"
              rounded
              size="md"
              label="Sign Up"
              caps
              class="full-width"
              type="submit"
            ></q-btn>
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-grey-8">
              Already have an account?
              <a
                href="#"
                class="text-dark text-weight-bold"
                style="text-decoration: none"
                >Sign in</a
              >
            </div>
          </q-card-section>
        </q-card>
      </q-page>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      isPwd: true,
      fullname: "",
      username: "",
      email: "",
      date: "",
      password: "",
      password_conf: "",
      usernamePattern: /^[a-zA-Z0-9_-]{3,16}$/,
    };
  },
  name: "SignUp",
  computed: {
    passwordFieldType() {
      return this.showPassword ? "text" : "password";
    },
    toggleIcon() {
      return this.showPassword ? "visibility_off" : "visibility";
    },
  },
  methods: {
    async onSubmit() {
      if (this.password == this.reenteredPassword) {
        alert("Passwords do not match. Try again.");
        return;
      }
      const API = "http://localhost:3000/register";

      var cred = new FormData();
      cred.append("name", this.fullname);
      cred.append("username", this.username);
      cred.append("email", this.email);
      cred.append("password", this.password);
      cred.append("birthday_date", this.date);
      cred.append("password_conf", this.password_conf);
      cred.append("user_profile", new File([""], "filename"));
      for (let pair of cred.entries()) {
        console.log(pair[0] + ": " + pair[1]);
      }
      axios({
        method: "post",
        url: API,
        data: cred,
        headers: { "Content-Type": "multipart/form-data" },
      })
        .then((res) =>
          console.log("Data sent. response: " + JSON.stringify(res))
        )
        .catch((err) => console.log("Nope, error: " + JSON.stringify(err)));
    },
  },
};
</script>
