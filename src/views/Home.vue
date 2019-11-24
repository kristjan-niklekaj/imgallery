<template>
  <div class="grid__thumbnails">
    <Thumbnail v-for="image in images"
      :key="image.id">
      <template v-if="!(image.images && image.images[0].mp4)" v-slot:media>
        <img style="width: inherit; height: inherit;"
          :src="image.cover ? `//i.imgur.com/${image.cover}.jpg` : image.link"/>
      </template>
      <template v-else v-slot:media>
        <video style="width: inherit; height: inherit;" type="video/mp4"
          :src="`https://i.imgur.com/${image.cover}.mp4`" controls>
        </video>
      </template>
      <template v-slot:description>
        {{image.title}}
      </template>
    </Thumbnail>
  </div>
</template>

<script>
import Thumbnail from '@/components/Thumbnail.vue';

export default {
  name: 'home',
  data() {
    return {
      myClientId: 'adb3ff1e7f8b93d',
      requestUrl: 'https://api.imgur.com/3/gallery/hot/0.json',
    };
  },
  components: {
    Thumbnail,
  },
  computed: {
    images() {
      return this.$store.state.imagesList;
    },
  },
  methods: {
  },
  mounted() {
    this.$store.dispatch('requestImages');
  },
};
</script>

<style scoped lang="scss">
  .grid__thumbnails {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: .5rem;
  }

</style>
