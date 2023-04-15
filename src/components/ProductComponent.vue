
<script setup>
import {Icon} from "@iconify/vue";
import {useProductsStore} from "./Products.js";
import {onBeforeMount} from "vue";

defineProps({
    "product":{
        type: Object,
        required: true
    },

})
const store = useProductsStore()
onBeforeMount(() => {
    store.fetchProducts()
})
</script>
<template>
<div>
    <div class="product">
        <img class="img" :src="product.image"/>
        <div class="info">
            <h2 class="title">{{product.name}}</h2>
                <p class="price">${{product.price}}</p>
            <div class="icon-div">
                <icon :class="{active: product.inChart}" @click="store.toggleChart(product.id)" class="icon" icon="material-symbols:add-shopping-cart"/>
            </div>
        </div>

    </div>
</div>
</template>

<style scoped lang="scss">
.product{
    background-color: white;
    height: 450px;
    width: 20vw;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    display: grid;
    .img{
        height: 350px;
        width: 100%;
        object-fit: cover;
    }
    .info{
        padding: 24px;
        display: grid;
        grid-template-columns: 5fr 0.5fr;
        align-items: center;
        .title{
            margin: 0;
            font-size: 18px;
            color: #102A43;
            font-weight: 400;
        }
        .price{
            margin: 0;
            color: #829AB1;
            font-weight: 400;
            letter-spacing: 1px;
            grid-column: 1;
        }
        .icon-div{
            grid-row: 1 ;
            grid-column: 2;
            display: flex;
            position: relative;


        .icon{
            justify-self: end;
            height: 24px;
            width: 24px;
            color: #2CB1BC;

            &:hover{
                color: #0E7C86;
            }
        }

        }
        .icon-div:before {
            content: "Add to chart";
            visibility: hidden;
            opacity: 1;
            width: 140px;
            background-color: #102A43;
            color: #fff;
            text-align: center;
            border-radius: 5px;
            padding: 6px 0;
            transition: opacity 1s ease-in-out;
            position: absolute;
            z-index: 1;
            left: -250%;
            top: -180%;
        }

        .icon-div:hover:before {
            opacity: 1;
            visibility: visible;
        }

.icon.active{
    color: #0A6C74;
}
    }



}
</style>