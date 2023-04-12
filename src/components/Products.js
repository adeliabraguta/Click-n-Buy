import {defineStore} from "pinia";
export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
    }),
    actions: {
        async fetchProducts() {
            const res = await fetch("https://api.escuelajs.co/api/v1/products?offset=0&limit=20")
            const data = await res.json();
            this.products = data;
        },
    },
})