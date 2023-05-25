<script setup>
import {Icon} from "@iconify/vue";
import {useProductsStore} from "./Products.js";
import {onBeforeMount, ref} from "vue";
import ChartComponent from "./ChartComponent.vue";
import ProductComponent from "./ProductItem.vue";

const store = useProductsStore()
onBeforeMount(() => {
    store.fetchProducts()
})
const favs = ref(false);
</script>

<template>
    <div class="nav-bar">

        <div class="nav">
            <router-link class="router" to="/">
                <img class="img" src="../assets/shopping-bag%20(1).png">
                <h1 class="title">Click-n-Buy</h1>
            </router-link>

            <router-link class="router" to="/ChartComponent">
                <router-link class="catalog-link" to="/CatalogComponent">
                    <h1 class="catalog">Products</h1>
                </router-link>
                <div class="chart" @click="favs = !favs">
                    <icon class="icon" icon="uil:shopping-cart"></icon>
                    <h1 class="number">{{ store.chartCount }}</h1>
                </div>
            </router-link>


            <!--            <div class="position">-->
            <!--                <div v-if="favs" class="chart-component">-->
            <!--                    <ChartComponent/>-->
            <!--                </div>-->
            <!--                <div v-else></div>-->
            <!--            </div>-->


        </div>

    </div>
</template>


<style scoped lang="scss">
.nav-bar {
  height: 60px;
  width: 100%;
  position: fixed;
  z-index: 2;
  background-color: #F0F4F8;
  border-bottom: 2px solid #102A43;

  .nav {
    height: 60px;
    padding: 0 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .router {
      text-decoration: none;
      display: flex;
      align-items: center;
      gap: 12px;

      .img {
        height: 24px;
        width: 24px;
      }
    }

    .catalog-link {
      text-decoration: none;
      font-size: 24px;


      .catalog {
        color: #102A43;
        margin: 0;
        font-weight: 400;
        font-size: 20px;
        transition: 0.3s ease;
        padding-right: 42px;

        &:hover {
          color: #0A6C74;
        }
      }
    }

    .title {
      color: #102A43;
      margin: 0;
      font-size: 24px;
      font-weight: 400;
      transition: 0.3s ease;


      &:hover {
        color: #0A6C74;
      }

    }

    .chart {
      justify-self: end;
      cursor: pointer;
      position: relative;
      display: flex;
      height: 60px;
      align-items: center;
      transition: 0.3s;


      .number {
        font-size: 14px;
        align-self: start;
        color: #0A6C74;
      }

      .icon {
        color: #102A43;
        width: 24px;
        height: 24px;

        &:hover {
          color: #0A6C74;
        }
      }
    }

    .chart-component {
      right: 0;
      z-index: 1;
      position: absolute;
      top: 62px;
    }
  }
}
</style>