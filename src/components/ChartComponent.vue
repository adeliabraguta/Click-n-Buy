<script setup>

import {Icon} from "@iconify/vue";
import ProductComponent from "./ProductComponent.vue";
import {useProductsStore} from "./Products.js";
import {onBeforeMount} from "vue";
import ChartItem from "./ChartItem.vue";

const store = useProductsStore()
onBeforeMount(() => {
    store.fetchProducts()
})
</script>

<template>
    <div>
        <div class="chart">
            <div class="chart-div">
                <icon class="icon" icon="material-symbols:add-shopping-cart"/>
                <h2 class="your-chart">Your Chart</h2>
            </div>
            <div class="items">
                <div class=" best" v-for="(product,index) in store.chart" :key="product.id">
                    <div>
                        <ChartItem :product="product"/>
                    </div>
                </div>
            </div>
            <div class="sum">
                <h2 class="desc">Total</h2>
                <p class="total">${{ store.chartCountTotal }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
.chart {
    background-color: #F0F4F8;
    padding-top: 64px;
    color: #102A43;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 32px;

    .chart-div {
        padding-top: 32px;
        display: flex;
        gap: 16px;
        align-items: center;

        .icon {
            height: 24px;
            width: 24px;
        }

        .your-chart {
            margin: 0;
            font-size: 24px;
            letter-spacing: 1px;
        }
    }

    .items {
        width: 50vw;
        display: grid;
        gap: 32px;
        border-top: 1px solid #102A43;
        border-bottom: 1px solid #102A43;
        padding: 48px;
    }

    .sum {
        display: flex;
        align-items: center;
        justify-content: space-between;
        width: 50vw;
        padding-bottom: 96px;

        .desc {
            margin: 0;
        }

        .total {
            margin: 0;
            padding-left: 64px;
            font-size: 24px;
            color: #044E54;
            font-weight: 700;
            justify-self: end;
        }
    }
}
</style>