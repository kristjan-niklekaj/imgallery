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
    requestImages({ commit }, item) {
      return new Promise((resolve, reject) => {
        const myClientId = 'adb3ff1e7f8b93d';
        let requestUrl;
        if (item) {
          requestUrl = `https://api.imgur.com/3/gallery/${item}/0.json`;
        } else {
          requestUrl = 'https://api.imgur.com/3/gallery/hot/0.json';
        }
        const req = new XMLHttpRequest();
        req.open('GET', requestUrl, true);
        req.setRequestHeader('Authorization', `Client-ID ${myClientId}`);

        req.onload = function () {
          if (req.readyState === 4 && req.status === 200) {
            const imagesArrow = JSON.parse(req.responseText);
            resolve(commit('acquireImages', imagesArrow));
          } else {
            reject(Error(req.statusText));
          }
        };
        req.onerror = () => reject(Error('Error with Imgur request'));
        req.send();
      });
    },
  },
});
