import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';
import About from '@/views/About.vue';
import Code from '@/views/Code.vue';
import Art from '@/views/Art.vue';
import Resume from '@/views/Resume.vue';

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
    {
        path: '/resume',
        name: 'Resume',
        component: Resume,
    },
];

const router = new VueRouter({
    routes,
    scrollBehavior() {
        // always scroll to top
        return { x: 0, y: 0 };
    },
});

export default router;
