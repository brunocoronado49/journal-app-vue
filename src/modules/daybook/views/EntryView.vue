<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">{{ day }}</span>
      <span class="mx-1 fs-3">January</span>
      <span class="mx-2 fs-3 fw-light">2024, Sunday</span>
    </div>

    <div>
      <button class="btn btn-danger mx-2 text-light">
        Delete
        <i class="fa fa-trash-alt"></i>
      </button>

      <button class="btn btn-primary mx-2 text-light">
        Upload photo
        <i class="fa fa-upload"></i>
      </button>
    </div>
  </div>

  <hr>

  <div class="d-flex flex-column px-3 h-75">
    <textarea
      placeholder="What happened today?"
      v-model="entry.text"></textarea>
  </div>

  <Fab icon="fa-save" />

  <img class="img-thumbnail" src="https://w0.peakpx.com/wallpaper/815/16/HD-wallpaper-jinx-arcane-thumbnail.jpg" alt="entry-picture">
</template>

<script>
import { defineAsyncComponent } from 'vue'
import { mapGetters } from 'vuex'
import getDayMonthYear from '../helpers/getDayMonthYear'

export default {
  props: {
    id: {
      type: String,
      required: true
    }
  },
  components: {
    Fab: defineAsyncComponent(() => import(
      /* webpackChunkName: Fab */
      '../components/Fab.vue'
    )),
  },
  data() {
    return {
      entry: null,
    }
  },
  computed: {
    ...mapGetters('journal', ['getEntryById']),
    day() {
      const { day } = getDayMonthYear(this.entry.date)
      return day
    }
  },
  methods: {
    loadEntry() {
      const entry = this.getEntryById(this.id)
      if (!entry) this.$router.push({ name: 'no-entry' })

      this.entry = entry
    }
  },
  created() {
    this.loadEntry()
  }
}
</script>

<style lang="scss" scoped>
textarea {
  font-size: 20px;
  border: none;
  height: 100%;

  &:focus {
    outline: none;
  }
}

img {
  width: 300px;
  position: fixed;
  bottom: 150px;
  right: 20px;
  box-shadow: 0px 5px 10px rgba($color: #000000, $alpha: 0.2);
}
</style>