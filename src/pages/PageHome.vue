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
    <q-list separator>
      <q-item class="q-py-md" v-for="memo in memos" :key="memo.memo_date">
        <q-item-section avatar top>
          <q-avatar>
            <q-icon name="fa-solid fa-user" size="lg" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label class="text-subtitle1"
            ><strong>{{ memo.fullname }}</strong
            ><span class="text-grey-7 q-mx-sm">
              {{ memo.username }}
            </span></q-item-label
          >
          <q-item-label class="memo-cap text-body1">
            {{ memo.caption }}
          </q-item-label>
          <div class="row q-mt-md justify-between">
            <q-btn color="grey" icon="far fa-comment" size="sm" flat round />
            <q-btn color="grey" icon="fas fa-retweet" size="sm" flat round />
            <q-btn color="grey" icon="far fa-heart" size="sm" flat round />
            <q-btn color="grey" icon="fas fa-trash" size="sm" flat round />
          </div>
        </q-item-section>

        <q-item-section side top> {{ memo.memo_date }} </q-item-section>
      </q-item>
    </q-list>
  </q-page>
</template>

<script>
import axios from "axios";
export default {
  name: "PageHome",
  data() {
    return {
      memoCap: "",
      memos: [],
    };
  },
  mounted() {
    const usersAPI = "http://localhost:3000/users";
    axios
      .get(usersAPI)
      .then((res) => {
        this.memos = res.data;
        console.log("Number of memos: " + this.memos.length);
      })
      .catch((err) => console.log("Nope, error: " + err));
  },
};
</script>

<style lang="sass">
.memoInput
  textarea
    font-size: 20px
    line-height: 1.3 !important
.custom-separator
  border-top: 1px $grey-4 solid
  border-bottom: 1px $grey-4 solid
.memo-cap
  white-space: pre-line
</style>
