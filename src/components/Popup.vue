<template>
  <div class="thumbnail__container" @click="$emit('lol')">
    <div class="thumbnail">
        <div class="thumbnail__mediaContainer">
            <slot class="thumbnail__media" name="media"/>
        </div>
        <div class="thumbnail__descriptionContainer">
        <div class="thumbnail__description">
            <slot name="description"/>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'thumbnail',
  methods: {
  },
};
</script>

<style scoped lang="scss">
    .thumbnail__container {
        position: fixed;
        z-index: 1;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        background-color: rgba(7, 9, 10, 0.685);
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    .thumbnail {
        height: 50rem;
        width: 50rem;

        &__mediaContainer {
            height: 40rem;
            width: 100%;
        }

        &__media {
            height: 100%;
        }

        &__descriptionContainer {
            bottom: 0;
            height: 10rem;
            width: 100%;
            background-color: #4a4c50;
        }

        &__description {
            display: flex;
            flex-direction: column;
            height: inherit;
            font-size: 1.6rem;
            padding: 1rem;
            color: white;
            box-sizing: border-box;
            overflow-y: hidden;
            text-overflow: ellipsis;
        }
    }
</style>
