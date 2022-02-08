import Vue from 'vue';
import Vuex from 'vuex';

import Art from '@/store/Art';
import Mobile from '@/store/Mobile';
import Navigation from '@/store/Navigation';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        Art,
        Mobile,
        Navigation,
    },
});
