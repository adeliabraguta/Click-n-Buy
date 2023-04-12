<script setup>
import {computed, onBeforeMount, onMounted, ref} from 'vue'
import AnimationComponent from '../components/AnimationComponent.vue'
import {useProductsStore} from "./Products.js";
import ProductComponent from "./ProductComponent.vue";

const animationsNumber = ref(3)
const store = useProductsStore()
onBeforeMount(() => {
    store.fetchProducts()
})
</script>

<template>
    <div>
        <div class="home">
            <div class="title">
                <div class="title-2">
                    <h1 class="banner">Shop Now</h1>
                    <p class="desc">lore asd frgvgme fery gmsme adlia denpure </p>
                </div>

            </div>
            <div class="image">
                <img class="img" src="../assets/Asset%201.png"/>
                <!--                <div class="animation">-->
                <!--                    <AnimationComponent/>-->
                <!--                </div>-->
            </div>
        </div>
        <div class="grid">

            <div class="class best" v-for="(product,index) in store.products.slice(0,3)" :key="product.id">
                <div>
                    <ProductComponent :product ="product" />
                </div>
            </div>
        </div>

    </div>
</template>

<style scoped lang="scss">
.home {
    padding-bottom: 96px;
  .image {
    position: relative;
    height: 100vh;

    .img {
      position: absolute;
      height: 80vh;
      right: 0;
      bottom: 0;
      z-index: 1;
    }
  }

  .title {
      width: 100%;
      padding-top: 250px;
    display: grid;
    grid-template-columns: 1fr 1fr;
      justify-items: end;
      position: absolute;
      .title-2{
          display: flex;
          flex-direction: column;
          align-items: center;

    .banner {
      color: #14919B;
      margin: 0;
      grid-column: 1;
      font-size: 74px;
      letter-spacing: 5px;

    }

    .desc {
      color: #27241D;
      grid-column: 1;
    }
      }
  }
}

.grid {
    padding: 96px 96px;

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
    column-gap: 48px;
    row-gap: 96px;
    justify-items: center;
}

.best {
  //background-color: #E8E6E1;
  h1 {
    color: #27241D;
  }

  img {
    height: 100px;
  }
}
</style>
