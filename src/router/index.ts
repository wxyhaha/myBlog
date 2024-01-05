import {createRouter,createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        redirect: '/blog',
    },
    {
        path: '/blog',
        component: () => import('../page/BlogPage.vue'),
    },
    {
        path: '/other',
        component: () => import('../page/OtherPage.vue'),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});
export default router;
