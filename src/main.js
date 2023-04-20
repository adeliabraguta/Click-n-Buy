import {createApp} from 'vue'
import './style.css'
import App from './App.vue'
import {createPinia} from "pinia";
import {createRouter, createWebHistory} from "vue-router";
import HomeComponent from "./components/HomeComponent.vue";
import ChartComponent from "./components/ChartComponent.vue";
import DeliveryComponent from "./components/DeliveryComponent.vue";
import ReviewPayments from "./components/ReviewPayments.vue";

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
