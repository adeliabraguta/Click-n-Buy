<script setup>
import {computed, onBeforeMount, onMounted, ref} from 'vue'
import AnimationComponent from '../components/AnimationComponent.vue'
import {useProductsStore} from "./Products.js";
import ProductComponent from "./ProductItem.vue";
import ChartComponent from "./ChartComponent.vue";

const animationsNumber = ref(3)
const store = useProductsStore()
onBeforeMount(() => {
    store.fetchProducts()
})
</script>

<template>
    <div>
        <div class="component">

            <div class="home">
                <div class="title">
                    <div class="title-2">
                        <h1 class="banner"><span style="color: #0A6C74">GET YOURSELF</span> INTO THE RIGHT GEAR</h1>
                        <!--                    <p class="desc">lore asd frgvgme fery gmsme adlia denpure </p>-->
                    </div>

                </div>
                <div class="image">

                    <img class="img" src="../assets/Asset%201.png"/>
                    <!--                <div class="square"> ada</div>-->
                </div>

            </div>
            <div class="featured">
                <h2 class="desc">WE LOVE WHAT WE DO</h2>
                <div class="card">
                    <p><span><img src="../assets/pexels-anastasia-shuraeva-5704736.jpg"/></span></p>
                    <p><span><img src="../assets/pexels-cottonbro-studio-4004163.jpg"/></span></p>
                    <p><span><img src="../assets/pexels-gustavo-fring-4005031.jpg"/></span></p>
                    <p><span><img src="../assets/pexels-henry-&-co-1233648.jpg"/></span></p>
                    <p><span><img src="../assets/pexels-ketut-subiyanto-4247723.jpg"/></span></p>
                </div>
            </div>
            <div class="new">
                <div class="title">
                    <h2 class="title-1">NEWEST</h2>
                    <h2 class="title-2">PRODUCTS</h2>
                </div>
                <p class="info">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                    voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                <div class="grid">
                    <div class="class best" v-for="(product,index) in store.products.slice(0,6)" :key="product.id">
                        <div>
                            <ProductComponent :product="product"/>
                        </div>
                    </div>
                </div>
            </div>
            <div class="info-section">
                <div class="text">
                    <h2 class="title">Lorem ipsum dolor sit
                        amet, consectetur
                        adipiscing elit.</h2>
                    <p class="desc">Lorem ipsum dolor sit amet. consectetur
                        adipiscing elit. Sed auctor netus mauris velit
                        vulputate lectus aliquarn. Faucibus posuere
                        at euismod turpis feugiat porta vestibulum.</p>
                </div>
                <div></div>
                <img class="img" src="../assets/clothes3.jpg"/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.component {
  position: relative;
}

.home {
  padding-bottom: 96px;

  .image {
    position: relative;
    height: 100vh;

    .square {
      background-color: rgba(136, 235, 242, 0.7);
      position: absolute;
      color: transparent;
      height: 120px;
      width: 120px;
      top: 420px;
      right: 690px
    }

    .img {
      position: absolute;
      height: 100vh;
      right: 0;
      bottom: 0;
    }
  }

  .title {
    width: 70%;
    padding-top: 250px;
    left: 400px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    justify-items: end;
    position: absolute;
    z-index: 1;

    .title-2 {
      display: flex;
      flex-direction: column;
      align-items: center;

      .banner {
        color: #102A43;
        margin: 0;
        grid-column: 1;
        font-size: 62px;
        letter-spacing: 5px;

      }

      .desc {
        color: #27241D;
        grid-column: 1;
      }
    }
  }
}

.featured {
  background-color: #E0FCFF;
  padding: 48px 96px;
  margin-bottom: 48px;

  .desc {
    margin: 0;
    padding-bottom: 32px;
    font-weight: 400;
    font-size: 24px;
    color: #102A43;

  }

  .card {
    width: 100%;
    height: 400px;
    border-radius: 4px;
    display: flex;
    gap: 5px;
    padding: .4em;
    align-items: center;
  }

  .card p {
    height: 100%;
    flex: 1;
    overflow: hidden;
    cursor: pointer;
    border-radius: 2px;
    transition: all .5s;
    //border: 1px solid #102A43;
    display: flex;
    justify-content: center;
    align-items: center;

  }

  .card p:hover {
    flex: 2;
  }

  .card p span {
    min-width: 14em;
    padding: .5em;
    text-align: center;
    //transform: rotate(-90deg);
    transition: all .10s;
    text-transform: uppercase;
    color: #102A43;
    letter-spacing: .1em;
  }

  .card p span img {
    object-fit: cover;
    height: 100%;
    width: 100%;
    filter: grayscale(100%);

  }

  .card p:hover span img {
    filter: grayscale(0%);
  }
}

.new {
  .title {
    display: flex;
    flex-direction: column;
    padding: 0 500px;

    .title-1 {
      margin: 0;
      align-self: start;
      font-size: 62px;
      letter-spacing: 5px;

    }

    .title-2 {
      margin: 0;
      align-self: end;
      color: #0E7C86;
      font-size: 62px;
      letter-spacing: 5px;
    }
  }

  .info {
    width: 35vw;
    padding-left: 96px;
    font-weight: 400;

  }

}

.grid {
  padding: 96px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  row-gap: 64px;
  justify-items: center;
}

.info-section {
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0 96px 96px 96px;
  position: relative;

  .text {
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
    height: 40vh;
    width: 40vw;
    padding: 48px 32px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    position: absolute;
    background-color: #BEF8FD;
    bottom: 60px;
    left: 60px;


    .title {
      margin: 0;
      color: #102A43;
      font-size: 36px;
    }

    .desc {
      font-size: 18px;
      font-weight: 300;
    }
  }

  .img {
    height: 75vh;
    width: 100%;
    object-fit: cover;
  }
}
</style>
