<template>
  <q-layout view="hHh lpR fFf">
    <q-header elevated class="bg-white text-black">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold">
          <q-icon name="fa-solid fa-dove" size="lg" color="primary" class="q-pa-md, absolute-center"></q-icon>
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <q-card-section class="text-center">
            <div class="dark text-h5 text-weight-bold">Sign in</div>
            <div class="text-grey-8">Sign in below to access the website</div>
          </q-card-section>
          <q-card-section>
            <q-input dense outlined v-model="username" Placeholder="Username" :pattern="usernamePattern"
              class="q-pa-sm" />
            <q-input dense outlined v-model="password" type="password" Placeholder="Password" class="q-pa-sm">
            </q-input>
          </q-card-section>
          <q-card-section>
            <q-btn style="border-radius: 8px" color="primary" rounded size="md" label="Sign In" caps class="full-width"
              type="submit"></q-btn>
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-grey-8">
              New to our website?
              <a href="#" class="text-dark text-weight-bold" style="text-decoration: none">Sign up</a>
              .
            </div>
          </q-card-section>
        </q-card>
      </q-page>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<script>
export default {
  data() {
    return {
      password: '',
      reenteredPassword: '',
      username: '',
      usernamePattern: /^[a-zA-Z0-9_-]{3,16}$/
    };
  },
  name: "SignIn",

};
/*methods: {
  submit() {
    if (this.password === this.reenteredPassword) {
      // Passwords match, proceed with form submission or other action
    } else
  };
};*/
</script>
