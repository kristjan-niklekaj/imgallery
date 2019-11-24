<template>
  <div class="homepage">
    <Menu/>
    <div class="grid__thumbnails">
      <!-- Thumbnail -->
      <Thumbnail @popup="showPopupImage(image)" v-for="image in images"
        :key="image.id">
        <template v-if="!(image.images && image.images[0].mp4)" v-slot:media>
          <img class="fitMedia"
            :src="image.cover ? `//i.imgur.com/${image.cover}.jpg` : image.link"/>
        </template>
        <template v-else v-slot:media>
          <video class="fitMedia" :src="`https://i.imgur.com/${image.cover}.mp4`" type="video/mp4" controls>
          </video>
        </template>
        <template v-slot:description>
          {{image.title}}
        </template>
      </Thumbnail>
      <!-- Popup module -->
      <Popup v-if="popupImage !== null" @lol="popupImage = null">
        <template v-if="!(popupImage.images && popupImage.images[0].mp4)" v-slot:media>
          <img class="fitMedia" :src="popupImage.cover ? `//i.imgur.com/${popupImage.cover}.jpg` :
            popupImage.link"/>
        </template>
        <template v-else v-slot:media>
          <video class="fitMedia" :src="`https://i.imgur.com/${popupImage.cover}.mp4`" type="video/mp4" controls>
          </video>
        </template>
        <template v-slot:description>
          <div>
          {{popupImage.title}}
          </div>
          <div class="rating__container">
            <div class="rating">
              <i class="material-icons md-light">
                arrow_upward
              </i>
                {{ popupImage.ups }}
            </div>
            <div class="rating">
              <i class="material-icons md-light">
                arrow_downward
              </i>
                {{ popupImage.downs }}
            </div>
            <div class="rating">
              <i class="material-icons">
                score
              </i>
                {{ popupImage.score }}
            </div>
          </div>
          <div>
          </div>
        </template>
      </Popup>
    </div>
  </div>
</template>

<script>
import Thumbnail from '@/components/Thumbnail.vue';
import Popup from '@/components/Popup.vue';
import Menu from '@/components/Menu.vue';

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
    Menu,
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
  .homepage {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .grid__thumbnails {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    padding: .5rem;
    justify-content: center;
  }

  .rating__container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    margin-top: 2rem;
  }

  .rating {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .fitMedia {
    width: inherit;
    height: inherit;
    outline: none;
  }

  i {
    font-size: 1.6rem;
  }
</style>
