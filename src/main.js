import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import ChartComponent from "./components/ChartComponent.vue";
import DeliveryComponent from "./components/DeliveryComponent.vue";
import ReviewPayments from "./components/ReviewPayments.vue";
import CloseOrder from "./components/CloseOrder.vue";
import CatalogComponent from "./components/CatalogComponent.vue";
import ProductComponent from "./components/ProductComponent.vue";

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: HomeComponent,
            component: HomeComponent
        },
        {
            path: '/ChartComponent',
            name: ChartComponent,
            component: ChartComponent
        },
        {
            path: '/DeliveryComponent',
            name: DeliveryComponent,
            component: DeliveryComponent
        },
        {
            path: '/ReviewPayments',
            name: ReviewPayments,
            component: ReviewPayments
        },
        {
            path: '/CloseOrder',
            name: CloseOrder,
            component: CloseOrder
        },
        {
            path: '/CatalogComponent',
            name: CatalogComponent,
            component: CatalogComponent
        },
        {
            path: '/product/:id/:slug',
            name: 'product.component',
            component: () => import('./components/ProductComponent.vue')

        }
    ],
    scrollBehavior(to, from, savedPosition) {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve({left: 0, top: 0})
            }, 400)
        })
    }
})


createApp(App).use(createPinia()).use(router).mount('#app')
