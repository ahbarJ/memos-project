<template>
  <q-layout view="lhr lpR lFr">
    <q-header bordered class="bg-white text-black">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title class="text-weight-bold"> Memos </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" :width="270">
      <q-icon
        name="fa-solid fa-dove"
        size="lg"
        color="primary"
        class="q-pa-md"
      ></q-icon>
      <q-list>
        <q-item clickable v-ripple to="/">
          <q-item-section avatar>
            <q-icon name="home" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold">Home</q-item-section>
        </q-item>
        <q-item clickable v-ripple to="/about">
          <q-item-section avatar>
            <q-icon name="help" size="md" />
          </q-item-section>

          <q-item-section class="text-h6 text-weight-bold"
            >About</q-item-section
          >
        </q-item>
      </q-list>
    </q-drawer>

    <q-drawer show-if-above v-model="rightDrawerOpen" side="right">
      <q-input
        outlined
        rounded
        class="q-ma-md"
        placeholder="Search Memos"
        dense
      >
        <template v-slot:prepend>
          <q-icon name="search" />
        </template>
      </q-input>
      <q-list padding separator>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey"
              >2024 Election</q-item-label
            >
            <q-item-label class="text-weight-bold"
              >Trump getting re-elected?</q-item-label
            >
            <q-item-label caption
              >Initial report from trusted sources indicate that Trump might
              have a shot at presidency.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>5 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Oil Price</q-item-label>
            <q-item-label class="text-weight-bold"
              >Heated exchange between Iran and Israel</q-item-label
            >
            <q-item-label caption
              >Oil prices on the rise as the two sworn enemies start to exchange
              missiles.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>17 min ago</q-item-label>
          </q-item-section>
        </q-item>
        <q-item class="q-pa-md">
          <q-item-section>
            <q-item-label overline class="text-grey">Student Debt</q-item-label>
            <q-item-label class="text-weight-bold"
              >Biden pays the student debt</q-item-label
            >
            <q-item-label caption
              >President Biden pays for the college intuition of many students
              in debt, declaring that the education in America should be free
              for all.</q-item-label
            >
          </q-item-section>

          <q-item-section side top>
            <q-item-label caption>23 min ago</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { ref } from "vue";

export default {
  setup() {
    const leftDrawerOpen = ref(false);
    const rightDrawerOpen = ref(false);

    return {
      leftDrawerOpen,
      toggleLeftDrawer() {
        leftDrawerOpen.value = !leftDrawerOpen.value;
      },

      rightDrawerOpen,
      toggleRightDrawer() {
        rightDrawerOpen.value = !rightDrawerOpen.value;
      },
    };
  },
};
</script>
