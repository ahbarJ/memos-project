<template>
  <q-page class="q-px-lg">
    <div class="q-my-lg q-mx-md row items-end q-col-gutter-md">
      <div class="col">
        <q-input
          class="memoInput"
          bottom-slots
          v-model="memoCap"
          placeholder="What's on your mind?"
          counter
          maxlength="250"
          :dense="dense"
          autogrow
        >
          <template v-slot:before>
            <q-avatar>
              <q-icon name="fa-solid fa-user" size="lg" />
            </q-avatar>
          </template>
        </q-input>
      </div>
      <div class="col col-shrink">
        <q-btn
          class="q-mb-lg"
          unelevated
          rounded
          color="primary"
          label="Send"
          no-caps
          :disable="!memoCap"
        />
      </div>
    </div>
    <q-separator size="10px" color="grey-2" class="custom-separator" />
  </q-page>
</template>

<script>
export default {
  name: "PageHome",
  data() {
    return {
      memoCap: "",
    };
  },
};
</script>

<style lang="sass">
.memoInput
  textarea
    font-size: 19px
    line-height: 1.3 !important
.custom-separator
  border-top: 1px $grey-4 solid
  border-bottom: 1px $grey-4 solid
</style>
