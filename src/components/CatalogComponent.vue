<script setup>

import ProductComponent from "./ProductItem.vue";
import {useProductsStore} from "./Products.js";
import {onBeforeMount} from "vue";
const store = useProductsStore()
onBeforeMount(() => {
    store.fetchProducts()
})
</script>

<template>
    <div>
        <div class="products">

    <h2 class="title">All products</h2>
    <div class="grid">
        <div class="class best" v-for="(product,index) in store.products" :key="product.id">
            <div>
                <ProductComponent :product="product"/>
            </div>
        </div>
    </div>
    </div>
    </div>


</template>



<style scoped lang="scss">
.products{
  padding-top: 96px;
    padding-bottom: 96px;
  .title{
    color: #102A43;
    text-align: center;
      margin: 0;
      padding-bottom: 32px;
  }
.grid {
  padding: 0 96px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  //column-gap: 48px;
    row-gap: 64px;
  justify-items: center;
}
}

</style>