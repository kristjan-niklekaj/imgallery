<template>
  <div class="thumbnail" @click="$emit('popup')">
    <div class="thumbnail__mediaContainer">
      <slot class="thumbnail__media" name="media"/>
    </div>
    <div class="thumbnail__descriptionContainer">
      <div class="thumbnail__description">
        <slot name="description"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thumbnail',
  props: {
    popup: {
      type: Boolean,
      default: false,
    },
  },
  methods: {
  },
};
</script>

<style scoped lang="scss">
  .thumbnail {
    position: relative;
    width: 24rem;
    height: 24rem;
    margin: .5rem;
    background-color:black;

    &__mediaContainer {
      height: 17rem;
      width: 100%;
    }

    &__media {
      height: 100%;
      width: 100%;
    }

    &__descriptionContainer {
      position: absolute;
      bottom: 0;
      height: 7rem;
      width: 100%;
      background-color: #4a4c50;
    }

    &__description {
      width: inherit;
      height: inherit;
      font-size: 1.6rem;
      padding: 1rem;
      color: white;
      border: 1px solid red;
      box-sizing: border-box;
      overflow-y: hidden;
      text-overflow: ellipsis;
    }
  }
</style>
