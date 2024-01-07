import {createRouter,createWebHashHistory } from 'vue-router'

export const routes = [
    {
        path: '/',
        redirect: '/blog',
    },
    {
        path: '/blog',
        name:'blog',
        component: () => import('../page/BlogList.vue'),
    },
    {
        path: '/blogDetail',
        name:'blogDetail',
        component: () => import('../page/BlogDetail.vue'),
    },
    {
        path: '/other',
        name:'other',
        component: () => import('../page/OtherPage.vue'),
    },
];
const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
});
export default router;
