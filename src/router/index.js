import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';

Vue.use(VueRouter);

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/About.vue'),
    },
    {
        path: '/data',
        name: 'Data',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Data.vue'),
    },
    {
        path: '/memorabilia',
        name: 'Memorabilia',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Memorabilia.vue'),
    },
    {
        path: '/paper',
        name: 'Paper',
        component: () =>
            import(/* webpackChunkName: "about" */ '../views/Paper.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
