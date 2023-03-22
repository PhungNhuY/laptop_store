import { type RouteRecordRaw } from 'vue-router';
import MainLayout from '../../layouts/MainLayout.vue';
import HomePage from './pages/HomePage.vue';
import DetailPage from './pages/DetailPage.vue';
import CartPage from './pages/CartPage.vue';

const mainRouters: Array<RouteRecordRaw> = [
    {
        path: '',
        component: MainLayout,
        children: [
            {
                path: '',
                name: 'homePage',
                component: HomePage,
            },
            {
                path: '/product/:id',
                name: 'detailPage',
                component: DetailPage,
                props: true,
            },
            {
                path: '/cart',
                name: 'cartPage',
                component: CartPage,
            }
        ],
    },
];

export default mainRouters;