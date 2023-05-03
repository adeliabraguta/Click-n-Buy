<script setup>

import {Icon} from "@iconify/vue";
import ProductComponent from "./ProductItem.vue";
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
                <div v-if="store.chartCount == 0">
                    <div class="no-items">No items yet</div>
                </div>
                <div v-else>
                    <div class="best" v-for="(product,index) in store.chart" :key="product.id">
                        <div>
                            <ChartItem :product="product"/>
                        </div>
                    </div>
                </div>

            </div>
            <div class="sum">
                <p class="delivery">Delivery</p>
                <p class="delivery-price">$5</p>
                <h2 class="desc">Total</h2>
                <p class="total">${{ store.chartCountTotal + 5 }}</p>
            </div>
            <router-link class="delivery" to="/DeliveryComponent">
                <div class="order">
                    COMPLETE THE ORDER
                </div>
            </router-link>
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
        padding: 32px 32px 0px 32px;
        .no-items{
            color: #102A43;
            text-align: center;
        }
        .best{
            padding-bottom: 32px;
        }

    }

    .sum {
        display: grid;
        grid-template-columns: 1fr 1fr;
        width: 50vw;

        .delivery {
            color: #102A43;
            font-size: 16px;
        }

        .delivery-price {
            color: #102A43;
            justify-self: end;
            font-size: 18px;
        }

        .desc {
            color: #102A43;
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

    .delivery {
        text-decoration: none;

        .order {
            text-align: center;
            background-color: #40C3F7;
            padding: 24px;
            color: white;
            letter-spacing: 1px;
            cursor: pointer;
            transition: 0.3s ease;
            margin-bottom: 96px;
            font-size: 16px;

            &:hover {
                background-color: #1992D4;
            }
        }
    }

}
</style>