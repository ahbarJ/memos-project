<template>
  <q-page>
    <div class="q-my-lg q-mx-md">
      <q-input
        bottom-slots
        v-model="newMemo"
        placeholder="What's on your mind?"
        counter
        maxlength="250"
        :dense="dense"
      >
        <template v-slot:before>
          <q-avatar>
            <q-icon name="fa-solid fa-user" size="lg" />
          </q-avatar>
        </template>

        <template v-slot:after>
          <q-btn unelevated rounded color="primary" label="Send" no-caps />
        </template>
      </q-input>
    </div>
  </q-page>
</template>

<script>
export default {
  name: "PageHome",
  data() {
    return {
      newMemo: "",
    };
  },
};
</script>
