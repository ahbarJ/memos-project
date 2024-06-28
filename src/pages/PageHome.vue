<template>
  <q-page class="relative-position">
    <q-scroll-area class="absolute fullscreen">
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
            @click="addMemo"
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
        <q-item class="q-py-md" v-for="memo in memos" :key="memo.id">
          <q-item-section avatar top>
            <q-avatar>
              <q-icon name="fa-solid fa-user" size="lg" />
            </q-avatar>
          </q-item-section>

          <q-item-section>
            <q-item-label class="text-subtitle1"
              ><strong>Akbar</strong
              ><span class="text-grey-7 q-mx-sm">
                @ahbar.j <br class="lt-md" />&bull;
                {{ formattedDate(memo.memo_date) }}
              </span></q-item-label
            >
            <q-item-label class="memo-cap text-body1">
              {{ memo.caption }}
            </q-item-label>
            <div class="row q-mt-md justify-between">
              <q-btn color="grey" icon="far fa-comment" size="sm" flat round />
              <q-btn color="grey" icon="fas fa-retweet" size="sm" flat round />
              <q-btn
                @click="memo.liked = memo.liked ? false : true"
                :color="memo.liked ? 'pink' : 'grey'"
                :icon="memo.liked ? 'fas fa-heart' : 'far fa-heart'"
                size="sm"
                flat
                round
              />
              <q-btn
                color="grey"
                @click="deleteMemo(memo.id)"
                icon="fas fa-trash"
                size="sm"
                flat
                round
              />
            </div>
          </q-item-section>
        </q-item>
      </q-list>
    </q-scroll-area>
  </q-page>
</template>

<script>
import axios from "axios";
import { formatDistance } from "date-fns";
export default {
  name: "PageHome",
  data() {
    return {
      memoCap: "",
      memos: [],
      lastID: 0,
    };
  },
  methods: {
    formattedDate(currentTimestamp) {
      return formatDistance(currentTimestamp, Date.now());
    },
    likeMemo(id) {
      console.log("Memo to be liked id: " + id);
    },
    addMemo() {
      let newMemo = {
        id: this.lastID,
        caption: this.memoCap,
        memo_date: Date.now(),
        liked: false,
      };
      this.lastID += 1;
      console.log("Adding memo: " + newMemo);
      // post the memo
      this.memos.unshift(newMemo);
      this.memoCap = "";
    },
    deleteMemo(id) {
      // post to server
      console.log("Deleting memo with id: " + id);
      let index = this.memos.find((m) => m.id === id);
      this.memos.splice(index, 1);
    },
  },
  /*mounted() {
    const usersAPI = "http://localhost:3000/users";
    axios
      .get(usersAPI)
      .then((res) => {
        this.memos = res.data;
        console.log("Number of memos: " + this.memos.length);
      })
      .catch((err) => console.log("Nope, error: " + err));
  },*/
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
