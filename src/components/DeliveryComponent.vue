<script setup>
import {Icon} from "@iconify/vue";
import {computed, onBeforeMount, ref} from "vue";
import {useInfo, useProductsStore} from "./Products.js";

const info = useInfo()
onBeforeMount(() => {
    info.fetchInfo()
})

// const validName = computed(() => {
//     return  && !!info.name
// })
const validForm = computed(() => {
    return !!info.email && !!info.name && !!info.phone && !!info.location
        && !!info.street && !!info.houseNumber && !!info.entrance && !!info.apartment
})

function handleSubmit() {
    if (validForm.value) {
        console.log('valid')
    } else {
        console.log("invalid")
    }
}


</script>

<template>
    <div>
        <div class="delivery">
            <h2 class="title">
                <icon class="icon" icon="carbon:delivery-parcel"/>
                Delivery
            </h2>
            <form @submit.prevent="handleSubmit" class="form">
                <input class="input" placeholder="E-mail*" type="email" v-model.trim="info.email">
                <input class="input" placeholder="Name and Surname*" type="text" v-model="info.name">
                <input class="input" placeholder="Phone*" type="text" v-model.trim="info.phone">
                <p class="address">Delivery address</p>
                <input class="input" placeholder="Location*" type="text" v-model.trim="info.location">
                <input class="input" placeholder="Street*" type="text" v-model.trim="info.street">
                <div class="address-details">
                    <input class="input input-details" placeholder="House Number*" type="text"
                           v-model.trim="info.houseNumber">
                    <input class="input input-details" placeholder="Entrance*" type="text"
                           v-model.trim="info.entrance">
                    <input class="input input-details" placeholder="Apartment*" type="text"
                           v-model.trim="info.apartment">
                </div>
                <p class="info">Fields marked with * are required</p>
                <button @click="$router.push('/ReviewPayments')" :class="{ 'submit-disabled': !validForm }"
                        :disabled="!validForm" class="submit">NEXT
                </button>
            </form>
        </div>

    </div>
</template>

<style scoped lang="scss">
.delivery {
  padding-top: 64px;
  display: flex;
  flex-direction: column;
  gap: 32px;
  align-items: center;
  justify-content: center;
  padding-bottom: 96px;

  .title {
    margin: 0;
    font-size: 24px;
    letter-spacing: 1px;
    padding-top: 32px;
    display: flex;
    gap: 16px;
    align-items: center;
    color: #102A43;

    .icon {
      height: 24px;
      width: 24px;
    }
  }

  .form {
    display: flex;
    flex-direction: column;
    width: 45vw;
    gap: 32px;

    .info {
      color: #40C3F7;
        font-size: 16px;
    }

    .submit {
      border: none;
      background-color: #38BEC9;
      padding: 24px;
      color: white;
      font-size: 16px;
      width: 250px;
      margin: 24px auto;
      text-align: center;
      letter-spacing: 1px;
      cursor: pointer;
      transition: 0.3s ease;

      &:hover {
        background-color: #14919B;
      }

    }

    .submit-disabled {
      background-color: #829AB1;
      cursor: not-allowed;

      &:hover {
        background-color: #829AB1;
      }
    }


    .input {
      color: #102A43;
      font-size: 16px;
      border: none;
      padding: 24px;

      &::placeholder {
        font-size: 16px;
        letter-spacing: 1px;
        font-weight: 400;
        opacity: 0.5;
        color: #334E68;

      }

      &:focus {
        border: 1px solid #102A43;
      }
    }

    .address {
      font-size: 18px;
      color: #102A43;

    }

    .address-details {
      display: flex;
      gap: 32px;

      .input-details {
        width: 100%;
      }
    }
  }
}
</style>