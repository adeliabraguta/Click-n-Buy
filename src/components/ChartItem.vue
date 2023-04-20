<script setup>
import {Icon} from "@iconify/vue";
import {useProductsStore} from "./Products.js";
import {onBeforeMount} from "vue";
import DeleteComponent from "./DeleteComponent.vue";
import {ref} from "vue";
defineProps({
    "product": {
        type: Object,
        required: true
    }
})
const store = useProductsStore()
onBeforeMount(() => {
    store.fetchProducts()
})

const popupTrigger=ref({
    buttonTrigger:false,
    timedTrigger: false
})
const togglePopup = (trigger) => {
    popupTrigger.value[trigger] =! popupTrigger.value[trigger]
}
</script>

<template>
<div>
    <div class="item">
        <!-- `greet` is the name of the method defined above -->

        <img class="img" :src="product.image"/>
        <div class="desc">
            <h2 class="name">{{product.name}}</h2>
            <p class="category">{{product.category}}</p>
            <div class="close-div">
                <div @click="() => togglePopup('buttonTrigger')"  class="close">
                    <h2 class="text"><icon class="icon" icon="material-symbols:delete-outline"/>Delete</h2>
                </div>
                <DeleteComponent v-if="popupTrigger.buttonTrigger" :togglePopup = "() => togglePopup('buttonTrigger') " :product="product">
                    <h2 class="atention">Are you sure you want to delete the item?</h2>
                </DeleteComponent>
            </div>
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
  .img{
    height: 150px;
    width: 120px;
  }
    .desc{
        .name{
            font-size: 18px;
            margin: 0;

        }
        .category{
            letter-spacing: 1px;
        }
        .close-div{
            .atention{
                font-size: 20px;
                color: #102A43;
            }
            .close{

                .text{
                    display: flex;
                    align-items: center;
                    gap: 8px;
                    cursor: pointer;
                    font-size: 16px;
                    color: #38BEC9;
                    letter-spacing: 1px;
                    font-weight: 400;
                    transition: 0.3s ease;

                    &:hover{
                        color: #14919B;
                    }

                    .icon{
                        height: 16px;
                        width: 16px;
                    }
                }
            }
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