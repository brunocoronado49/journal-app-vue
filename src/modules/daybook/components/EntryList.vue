<template>
  <div class="entry-list-container">
    <div class="px-2 pt-2">
      <input type="text" class="form-control" placeholder="Search entry">
    </div>

    <div class="entry-scrollarea">
      <Entry v-for="item in  50" :key="item" />
    </div>
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  name: 'EntryList',
  components: {
    Entry: defineAsyncComponent(() => import(
      /* webpackChunkName: "Entry" */
      './Entry.vue'
    )),
  }
}
</script>

<style lang="scss" scoped>
.entry-list-container {
  border-right: 1px solid rgb(16, 14, 14);
  height: calc(100vh - 56px);
}

.entry-scrollarea {
  height: calc(100vh - 115px);
  overflow: scroll;
}
</style>