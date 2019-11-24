import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    imagesList: [],
  },
  mutations: {
    acquireImages(state, imagesArrow) {
      state.imagesList = imagesArrow.data;
      console.log('IMAGES: ', state.imagesList);
    },
  },
  actions: {
    requestImages({ commit }) {
      return new Promise(() => {
        const myClientId = 'adb3ff1e7f8b93d';
        const requestUrl = 'https://api.imgur.com/3/gallery/hot/0.json';
        const req = new XMLHttpRequest();
        req.open('GET', requestUrl, true);
        req.setRequestHeader('Authorization', `Client-ID ${myClientId}`);

        req.onreadystatechange = function () {
          if (req.readyState === 4 && req.status === 200) {
            const imagesArrow = JSON.parse(req.responseText);
            commit('acquireImages', imagesArrow);
          } else {
            console.log('Error with Imgur Request.');
          }
        };
        req.send();
      });
    },
  },
});
