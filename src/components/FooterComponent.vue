<script setup>
</script>

<template>
<div>
    <div class="footer">
        <img class="img" src="../assets/shopping-bag%20(1).png" alt="Shop Icon"/>
        <div class="desc">
            <p class="copy">&#169; Copyright 2023</p>
            <p class="name">BY ADELIA BRAGUTA</p>
        </div>
    </div>
</div>
</template>



<style scoped lang="scss">
.footer{
    border-top: 1px solid #D9E2EC ;
    padding: 48px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .img{
        height: 48px;
        width: 48px;
    }
    .desc{
        font-size: 14px;
        color: #102A43;
        display: flex;
        gap: 12px;
    }
}
</style>