<template>
  <button class="btn btn-primary">
    <i class="fa fa-1x" :class="icon"></i>
  </button>
</template>

<script>
export default {
  props: {
    icon: {
      type: String,
      default: 'fa-plus'
    }
  }
}
</script>

<style lang="scss" scoped>
button {
  border-radius: 100%;
  bottom: 20px;
  height: 45px;
  position: fixed;
  right: 20px;
  width: 45px;
}
</style>