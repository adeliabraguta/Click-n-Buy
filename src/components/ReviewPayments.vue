<script setup>
import {useInfo, useProductsStore} from "./Products.js";
import {onBeforeMount} from "vue";
import ChartItem from "./ChartItem.vue";
import {Icon} from "@iconify/vue";

const store = useProductsStore()
onBeforeMount(() => {
    store.fetchProducts()
})
const info = useInfo()
onBeforeMount(() => {
    info.fetchInfo()
})
</script>

<template>
    <div>
        <div class="checkout">
            <h2 class="title">
            <icon class="icon " icon="material-symbols:shopping-cart-checkout"/>
            Checkout
                </h2>
        <div class="review">

            <div class="personal-info">
                <div class="info">
                    <div class="desc-div">
                        <h2 class="desc">Personal Info</h2>
                        <p class="datas">{{ info.name }}</p>
                        <p class="datas">{{ info.email }}</p>
                        <p class="datas">{{ info.phone }}</p>
                        <router-link class="link-edit" to="/DeliveryComponent">
                            <p class="edit"><icon class="icon" icon="material-symbols:edit-outline"/> Edit</p>
                        </router-link>
                    </div>
                    <div class="desc-div">
                        <h2 class="desc">Delivery Address</h2>
                        <p class="datas">{{ info.location }}</p>
                        <p class="datas">Street {{ info.street }}</p>
                        <p class="datas">House Number {{ info.houseNumber }}</p>
                        <p class="datas">Entrance {{ info.entrance }}</p>
                        <p class="datas">Apartment {{ info.apartment }}</p>
                        <router-link class="link-edit" to="/DeliveryComponent">
                            <p class="edit"><icon class="icon" icon="material-symbols:edit-outline"/>Edit</p>
                        </router-link>
                    </div>

                </div>
                <div class="payment-div">
                    <div class="payment" v-for="(product,index) in store.chart" :key="product.id">
                        <img class="img" :src="product.image"/>
                        <div class="desc">
                            <h2 class="name">{{ product.name }}</h2>
                            <p class="category">{{ product.category }}</p>
                        </div>
                        <p class="price">${{ product.price }}</p>
                    </div>
                </div>
           <div class="final">
               <textarea v-model="info.comments" placeholder="Add a comment" class="comments" style=" height: 100%;"></textarea>
            <div class="sum">
                <p class="delivery">Delivery</p>
                <p class="delivery-price">$5</p>
                <h2 class="desc">Total</h2>
                <p class="total">${{ store.chartCountTotal + 5 }}</p>
            </div>
            <router-link class="delivery" to="/DeliveryComponent">
                <div class="order">
                    ORDER
                </div>
            </router-link>
        </div>
        </div>
        </div>
        </div>

    </div>
</template>


<style scoped lang="scss">
.checkout {
  color: #102A43;
  display: flex;
    flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 32px;
  padding-top: 96px;

  .title{
      margin: 0;
      font-size: 24px;
      letter-spacing: 1px;
      display: flex;
      align-items: center;
      gap: 16px;
      .icon {
          height: 24px;
          width: 24px;
      }
  }
.review {
    display: flex;
    justify-content: center;
    color: #102A43;

    .personal-info {
        margin: 0 96px;
        display: grid;
        grid-template-columns: 1fr 2fr 1fr;
        justify-content: center;
        gap: 48px;

        .info {
            display: flex;
            flex-direction: column;
            gap: 48px;
            border-right: 1px solid #102A43;

            .desc-div {
                display: flex;
                flex-direction: column;
                gap: 4px;

                .desc {
                    margin: 0;
                    font-size: 20px;
                    letter-spacing: 1px;
                }

                .datas {
                    margin: 0;
                    font-size: 16px;
                }

                .link-edit {
                    text-decoration: none;
                }

                .edit {
                    font-size: 16px;
                    color: #38BEC9;
                    transition: 0.3s ease;
                    letter-spacing: 1px;
                    display: flex;
                    align-items: center;
                    gap: 8px;

                    &:hover {
                        color: #14919B;
                    }

                    .icon {
                        height: 16px;
                        width: 16px;
                    }
                }
            }
        }

        .payment-div {
            display: flex;
            flex-direction: column;
            gap: 32px;
            border-right: 1px solid #102A43;
            padding-right: 48px;


            .payment {
                display: grid;
                gap: 12px;
                grid-template-columns: 1fr 1fr 1.5fr;

                .img {
                    height: 150px;
                    width: 120px;
                }

                .desc {
                    .name {
                        font-size: 18px;
                        margin: 0;

                    }

                    .category {
                        letter-spacing: 1px;
                    }
                }

                .price {
                    padding-left: 64px;
                    font-size: 20px;
                    color: #0A6C74;
                    font-weight: 700;
                    justify-self: end;
                }
            }
        }

    }
}
    .final{
        padding: 32px;
        background-color: white;
        display: grid;
        gap: 48px;
        justify-self: end;
        .comments{
            color: #102A43;
            font-size: 16px;
            border: 1px solid #102A43;
            resize: none;
            outline: none;
            padding: 12px;
            &::placeholder {
                font-size: 16px;
                letter-spacing: 1px;
                font-weight: 400;
                opacity: 0.5;
                color: #334E68;
            }
            &::-webkit-scrollbar{
                width: 0;
            }

            &:focus {
                border: 1px solid #102A43;
            }
        }
    .sum {
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 8px;
        //background-color: #F0F4F8;

        .delivery {
            margin: 0;
            color: #102A43;
            font-size: 16px;
        }

        .delivery-price {
            margin: 0;
            color: #102A43;
            justify-self: end;
            font-size: 18px;
        }

        .desc {
            color: #102A43;
            margin: 0;
        }

        .total {
            margin: 0;
            padding-left: 64px;
            font-size: 24px;
            color: #044E54;
            font-weight: 700;
            justify-self: end;
        }
    }
        .delivery {
            text-decoration: none;
            .order {
                text-align: center;
                background-color: #40C3F7;
                padding: 24px;
                color: white;
                letter-spacing: 1px;
                cursor: pointer;
                transition: 0.3s ease;

                &:hover {
                    background-color: #1992D4;
                }
            }
        }
    }
}
</style>