<template>
  <div class="thumbnail">
    <div class="thumbnail__imageContainer">
      <img class="thumbnail__image" :src="imgSrc" />
    </div>
    <div class="thumbnail__description">
    </div>
  </div>
</template>

<script>
export default {
  name: 'thumbnail',
  props: {
    imgSrc: {
      type: String,
      default: '',
    },
  },
};
</script>

<style scoped lang="scss">
  .thumbnail {
    position: relative;
    width: 24rem;
    height: 20rem;
    margin: .5rem;
    background-color:black;

    &__imageContainer {
      height: 14rem;
      width: 100%;
      background-color: yellow;
    }

    &__image {
      height: 100%;
      width: 100%;
    }

    &__description {
      position: absolute;
      bottom: 0;
      height: 5rem;
      width: 100%;
      background-color: blue;
    }
  }
</style>
