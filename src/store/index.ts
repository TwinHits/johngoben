import Vue from 'vue';
import Vuex from 'vuex';

import Art from '@/store/Art';
import Navigation from '@/store/Navigation';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Art,
        Navigation,
    },
});
