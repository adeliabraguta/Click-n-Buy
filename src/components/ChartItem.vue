<script setup>
defineProps({
    "product": {
        type: Object,
        required: true
    }
})
</script>

<template>
<div>
    <div class="item">
        <img class="img" :src="product.image"/>
        <div class="desc">
            <h2 class="name">{{product.name}}</h2>
            <p class="category">{{product.category}}</p>
        </div>

        <p class="price">${{product.price}}</p>
    </div>
</div>
</template>


<style scoped lang="scss">
.item{
    display: grid;
    gap: 32px;
    grid-template-columns: 1fr 1fr 2fr;
    align-items: center;
  .img{
    height: 150px;
    width: 100px;
  }
    .desc{
        .name{
            font-size: 18px;
            margin: 0;

        }
        .category{
            letter-spacing: 1px;
        }
    }
    .price{
        padding-left: 64px;
        font-size: 24px;
        color: #0A6C74;
        font-weight: 700;
        justify-self: end;
    }
}
</style>