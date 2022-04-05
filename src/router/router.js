import { createWebHistory, createRouter } from "vue-router";

import HomePage from '@/components/home/HomePage.vue';

const routes = [
    {
        path: '/',
        name: 'HomePage',
        component: HomePage,
    },
];

const router = new createRouter({
    history: createWebHistory(),
    routes: routes,
});

export default router;
