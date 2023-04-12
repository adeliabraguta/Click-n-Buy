<script setup>
import {Icon} from "@iconify/vue";
</script>

<template>
    <div class="nav-bar">

        <div class="nav">

            <h1 class="title">Shop Now</h1>
            <icon class="icon" icon="uil:shopping-cart"></icon>
        </div>
    </div>
</template>


<style scoped lang="scss">
.nav-bar {
    width: 100%;
    position: fixed;
    z-index: 2;
    background-color: white;
    border-bottom: solid #102A43;

  .nav {


      padding:12px  48px;
    display: flex;
    justify-content: space-between;
    align-items: center;


    .title {
        color: #102A43;
      margin: 0;
      font-size: 24px;

    }

    .icon {
        color: #102A43;
      width: 24px;
      height: 24px;
    }
  }
}
</style>