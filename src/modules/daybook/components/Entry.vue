<template>
  <div
    class="entry-container mb-3 pointer p-2"
    @click="$router.push({ name: 'entry', params: { id: 10 } })">
    <!-- Title -->
    <div class="entry-title d-flex">
      <span class="text-success fs-5 fw-bold">Domingo, 14</span>
      <span class="mx-1 fs-5">Enero</span>
      <span class="mx-2 fw-light">2024</span>
    </div>

    <div class="entry-description">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus ullam cumque veniam, sequi facilis consequuntur temporibus deserunt, sint facere aliquid culpa dicta hic voluptas rerum cupiditate doloremque dolorem voluptatem quisquam!
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.entry-container {
  border-bottom: 1px solid rgb(16, 14, 14);
  transition: 0.2s all ease-in;
  &:hover {
    background-color: lighten($color: grey, $amount: 43);
  }
}

.entry-description {
  font-size: 12px;
}
</style>