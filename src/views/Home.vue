<template>
  <div class="grid__thumbnails">
    <!-- so this v-for here is fucking something up. I HAVE TO USE VUEX :>D -->
    <Thumbnail v-for="image in images" :key="image.id"
      :imgSrc="image.link"/>
    <!-- Here exec the request -->
    <!-- {{requestPost()}} -->
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
      console.log('imagessssssssssssssssssssssssssss: ', this.$store.state.imagesList);
      return this.$store.state.imagesList;
    },
  },
  methods: {
    // requestPost() {
    //   return new Promise(() => {
    //     const req = new XMLHttpRequest();
    //     req.open('GET', this.requestUrl, true);
    //     req.setRequestHeader('Authorization', `Client-ID ${this.myClientId}`);

    //     req.onreadystatechange = function () {
    //       if (req.readyState === 4 && req.status === 200) {
    //         console.log(JSON.parse(req.responseText));
    //       } else {
    //         console.log('Error with Imgur Request.');
    //       }
    //     };
    //     req.send();
    //   });
    // },
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
    background-color: red;
  }

</style>
