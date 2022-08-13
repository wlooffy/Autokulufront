import Dashboard from './components/DashBoard.vue'
import ListAutot from './components/ListAutot.vue'
import ListTankkaukset from './components/ListTankkaukset.vue'
import ListHuollot from './components/ListHuollot.vue'
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
    {
        name: 'DashBoard',
        component: Dashboard,
        path: '/'
    },
    {
        name: 'ListAutot',
        component: ListAutot,
        path: '/autot'
    },
    {
        name: 'ListTankkaukset',
        component: ListTankkaukset,
        path: '/tankkaukset'
    },
    {
        name: 'ListHuollot',
        component: ListHuollot,
        path: '/huollot'
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;
