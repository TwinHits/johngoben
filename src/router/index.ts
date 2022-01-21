import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import About from '@/views/About.vue';
import Code from '@/views/Code.vue';
import Art from '@/views/Art.vue';
import Words from '@/views/Words.vue';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        redirect: '/about',
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/code',
        name: 'Code',
        component: Code,
    },
    {
        path: '/art',
        name: 'Art',
        component: Art,
    },
];

const router = new VueRouter({
    routes,
});

export default router;
