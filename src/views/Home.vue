<template>
  <div class="grid__thumbnails">
    <Thumbnail @popup="showPopupImage(image)" v-for="image in images"
      :key="image.id" :popup="popupVar">
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
    <Popup v-if="popupImage !== null" @lol="popupImage = null">
      <template v-if="!(popupImage.images && popupImage.images[0].mp4)" v-slot:media>
        <img style="width: inherit; height: inherit;"
          :src="popupImage.cover ? `//i.imgur.com/${popupImage.cover}.jpg` :
          popupImage.link"/>
      </template>
      <template v-else v-slot:media>
        <video style="width: inherit; height: inherit;" type="video/mp4"
          :src="`https://i.imgur.com/${popupImage.cover}.mp4`" controls>
        </video>
      </template>
      <template v-slot:description>
        {{popupImage.title}}
      </template>
    </Popup>
  </div>
</template>

<script>
import Thumbnail from '@/components/Thumbnail.vue';
import Popup from '@/components/Popup.vue';

export default {
  name: 'home',
  data() {
    return {
      myClientId: 'adb3ff1e7f8b93d',
      requestUrl: 'https://api.imgur.com/3/gallery/hot/0.json',
      popupImage: null,
    };
  },
  components: {
    Thumbnail,
    Popup,
  },
  computed: {
    images() {
      return this.$store.state.imagesList;
    },
  },
  methods: {
    showPopupImage(image) {
      this.popupImage = image;
    },
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
