
<script setup>
defineProps({
    "product":{
        type: String,
        required: true
    }
})
</script>
<template>
<div>
    <div class="product">
        <img class="img" :src="product.images[0]"/>
        <h2 class="title">{{product.title}}</h2>
        <p class="price">{{product.price}} $ </p>
    </div>
</div>
</template>

<style scoped lang="scss">
.product{
    height: 400px;
    width: 25vw;
    border: 2px solid #102A43;
    display: grid;
    justify-items: center;
    .title{
        margin: 0;
        font-size: 20px;
        color: #14919B;
    }
    .img{
        height: 250px;
        width: 100%;
        object-fit: cover;
    }
    .price{
        margin: 0;
    }
}
</style>