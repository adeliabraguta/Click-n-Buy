import {defineStore} from "pinia";

export const useProductsStore = defineStore('products', {
    state: () => ({
        products: [],
    }),
    getters: {
        chart() {
            return this.products.filter(product => product.inChart)
        },
        chartCount() {
            return this.products.reduce((prev, curr) => {
                return curr.inChart ? prev + 1 : prev;
            },0)
        },
        chartCountTotal(id,price){
            return this.products.reduce((prev, curr)=>{
                return curr.inChart ? prev + curr.price : prev;
            },0)
        }
    },
    actions: {
        async fetchProducts() {
            const res = await fetch("http://localhost:3000/products")
            const data = await res.json();
            this.products = data;
        },
        async toggleChart(id) {
            const like = this.products.find(product => product.id === id)
            like.inChart = !like.inChart;

            const res = await fetch("http://localhost:3000/products/" + id,{
                method: 'PATCH',
                body: JSON.stringify({inChart: like.inChart}),
                headers: {'Content-Type': 'application/json'}
            })
            if(res.error){
                console.log(res.error)
            }
        }
    },
})