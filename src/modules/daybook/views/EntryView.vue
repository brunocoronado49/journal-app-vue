<template>
  <div class="entry-title d-flex justify-content-between p-2">
    <div>
      <span class="text-success fs-3 fw-bold">15</span>
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
    <textarea placeholder="What happened today?"></textarea>
  </div>

  <Fab icon="fa-save" />

  <img class="img-thumbnail" src="https://media.vogue.mx/photos/5e2ce4880fe3b40009e410a6/master/w_1600%2Cc_limit/margot-robbie-como-harley-quinn.jpg" alt="entry-picture">
</template>

<script>
import { defineAsyncComponent } from 'vue'
export default {
  components: {
    Fab: defineAsyncComponent(() => import(
      /* webpackChunkName: Fab */
      '../components/Fab.vue'
    )),
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