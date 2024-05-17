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
            <div class="dark text-h5 text-weight-bold">Sign up</div>
            <div class="text-grey-8">Sign up below to access the website</div>
          </q-card-section>
          <q-card-section>
            <q-input dense outlined v-model="name" label="Your name" class="q-pa-sm"></q-input>
            <q-input dense outlined v-model="email" label="Email Address" class="q-pa-sm"></q-input>
            <q-input dense outlined v-model="date" type="date" class="q-pa-sm"></q-input>
          </q-card-section>
          <q-card-section>
            <q-btn style="border-radius: 8px;" color="primary" rounded size="md" label="Sign in" no-caps
              class="full-width"></q-btn>
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-grey-8">Already have an account?
              <a href="#" class="text-dark text-weight-bold" style="text-decoration: none">Sign
                in.</a>
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
  name: 'SignUp',
}
</script>
