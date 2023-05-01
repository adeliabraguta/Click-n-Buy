<script setup>

import {computed, ref} from "vue";
import {useRoute} from "vue-router";
import {useProductsStore} from "./Products.js";
import {Icon} from "@iconify/vue";

const destinationsData = useProductsStore()
const destinationId = computed(() => parseInt(useRoute().params.id));
const destination = computed(() => destinationsData.products.find(destination => destination.id === destinationId.value))
let buttonAdd = ref(false);

</script>

<template>
    <div>
        <div class="product">
            <div class="img-div">
                <img class="img" :src="destination.images[0]"
                     alt="product image"/>
                <img class="img" :src="destination.images[1]" alt="product image"/>
            </div>
            <div class="info">
                <div class="info-2">
                    <h2 class="title">{{ destination.name }}</h2>
                    <p class="category">{{ destination.category }} </p>
                    <p class="price">${{ destination.price }}</p>
                </div>

                <div class="chart" :class="{active: destination.inChart}"
                     @click="destinationsData.toggleChart(destination.id), buttonAdd = !buttonAdd ">
                    {{ buttonAdd ? 'REMOVE' : 'ADD TO CHART' }}
                    <icon class="icon" icon="material-symbols:add-shopping-cart"/>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.product {
  padding: 128px 96px;
  display: grid;
  column-gap: 64px;
  grid-template-columns: 1fr 2fr;

  .img-div {
    display: flex;
    gap: 12px;
    position: relative;

    .img {
      height: 75vh;
      width: 25vw;
      object-fit: cover;

    }
  }

  .info {
      height: 75vh;

    color: #102A43;
    display: flex;
      flex-direction: column;
    gap: 64px;
    width: 30vw;
      justify-content: end;
    .info-2{
        display: grid;
        gap: 12px;

    .title {
      margin: 0;
    }

    .category {
      margin: 0;
      letter-spacing: 1px;


    }
  }


  .price {
    color: #0A6C74;
    letter-spacing: 1px;
    font-weight: 700;
    font-size: 20px;
    margin: 0;

  }
  }



  .chart {
    cursor: pointer;
    transition: 0.3s all ease;
    display: flex;
    gap: 8px;
    align-items: center;
    color: white;
    padding: 18px;
    background-color: #40C3F7;
    letter-spacing: 1px;
    width: 170px;
      height: 30px;
    justify-content: center;

    &:hover {
      background-color: #1992D4;
    }

    .icon {
      height: 24px;
      width: 24px;
    }
  }
}

</style>