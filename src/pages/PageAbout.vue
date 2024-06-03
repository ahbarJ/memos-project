<template>
  <q-page class="q-ma-lg q-pa-md">
    <h4 class="text-weight-bold">About us</h4>
    <p>
      This is an assignment project for the Software Engineering 2, Spring 2024.
    </p>
    <h5>Supervisor: Dr. Ehsan Shoja</h5>
    <h6>Development team</h6>
    <q-list bordered>
      <q-item
        v-for="contact in contacts"
        :key="contact.id"
        clickable
        class="q-my-sm"
      >
        <q-item-section avatar>
          <q-avatar color="primary" text-color="white">
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ contact.name }}</q-item-label>
          <q-item-label caption lines="1">{{ contact.git }}</q-item-label>
        </q-item-section>

        <q-item-section side>
          <q-icon
            name="open_in_new"
            color="green"
            @click="openGithubPage(contact.git)"
          >
            <q-tooltip> {{ contact.name }}'s Github page </q-tooltip>
          </q-icon>
        </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
const contacts = [
  {
    id: 1,
    name: "Akbar Jalili",
    git: "https://github.com/ahbarJ",
    student_no: "1400442112",
    letter: "A",
    field: "front-end",
  },
  {
    id: 2,
    name: "Reza Sheikhlar",
    git: "https://github.com/rezdev-10",
    letter: "R",
  },
  {
    id: 3,
    name: "Farzan Khalili",
    git: "https://github.com/Farzan-Kh",
    letter: "F",
  },
  {
    id: 4,
    name: "Ali Birashk",
    git: "https://github.com/Seiedsi",
    letter: "A",
  },
  {
    id: 5,
    name: "Ali Balali",
    git: "https://github.com/callmealiw20",
    letter: "B",
  },
];

export default {
  name: "PageAbout",
  methods: {
    openGithubPage(gitPageAddress) {
      window.open(gitPageAddress, "_blank");
    },
  },
  setup() {
    return {
      contacts,
    };
  },
};
</script>
