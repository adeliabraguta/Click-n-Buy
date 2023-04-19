<script setup>
import {useProductsStore} from "./Products.js";
import {onBeforeMount} from "vue";
import {Icon} from "@iconify/vue";

defineProps( ["togglePopup" , "product"])
const store = useProductsStore()
onBeforeMount(() => {
    store.fetchProducts()
})
</script>

<template>
    <div class="popup">
        <div class="delete-alert">
            <slot />
            <div class="btns">
                <p @click="togglePopup() " class="btn btn-keep"><icon class="icon" icon="ic:sharp-check"/>Keep</p>
                <p @click="store.toggleChart(product.id) " class="btn btn-delete"><icon class="icon" icon="material-symbols:delete-forever-outline-sharp"/> Delete</p>
            </div>

        </div>
    </div>
</template>


<style scoped lang="scss">
.popup {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  backdrop-filter: blur(5px);
  position: fixed;
  z-index: 1;
  display: flex;
  place-items: center;
  justify-content: center;

  .delete-alert {
    display: flex;
    flex-direction: column;
    align-items: center;
    align-content: center;
    background-color: white;
    padding: 48px 32px;
    .btns{
        display: flex;
        justify-content: space-between;
        width: 70%;
        .btn{
            cursor: pointer;
            transition: 0.3s ease;

            font-size: 20px;
            display: flex;
            align-items: center;
            gap: 4px;
        }
        .icon{
            height: 20px;
            width: 20px;
        }
        .btn-keep{
            color: #40C3F7;
            &:hover{
                color: #0B69A3;
            }
        }
        .btn-delete{
            color: #14919B;
            &:hover{
                color: #044E54;
            }
        }
    }
  }
}

</style>