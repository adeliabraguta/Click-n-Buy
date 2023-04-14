import {defineStore} from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
    }),
    getters: {
        chart() {
            return this.products.filter(product => product.chart())
        },
        chartCount() {
            return this.products.reduce((prev, curr) => {
                return curr.chart ? prev + 1 : prev;
            },0)
        },
        chartCountTotal(id,price){
            return this.products.reduce((prev, curr)=>{
                return curr.chart ? prev + curr.price : prev;
            },0)
        }
    },
    actions: {
        async fetchProducts() {
            const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
            const data = await res.json();
            this.products = data;
        },
        toggleChart(id) {
            const like = this.products.find(product => product.id === id)
            like.chart = !like.chart;
        }
    },
})