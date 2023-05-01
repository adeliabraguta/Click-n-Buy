<template>
    <div>
        <div class="close">
            <h2 class="title">Thank you for order!</h2>
            <p class="info">You will be contacted by our operator soon.</p>
            <router-link class="home" to="/">
                <icon class="icon" icon="material-symbols:arrow-back"/>
                Back to Home Page
            </router-link>
        </div>
    </div>
</template>

<script setup>
import {Icon} from "@iconify/vue";

</script>

<style scoped lang="scss">
.close {
  height: calc(100vh - 264px);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-top: 96px;
  gap: 32px;

  .title {
    color: #102A43;
    letter-spacing: 1px;
    font-size: 24px;
    margin: 0;
  }

  .info {
    color: #102A43;
    margin: 0;

  }

  .home {
    text-decoration: none;
    color: #38BEC9;
    font-size: 20px;
    display: flex;
    align-items: center;
    gap: 16px;
      transition: 0.3s ease;
      &:hover{
          color: #14919B;
      }
  }
}
</style>