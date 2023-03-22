<script setup lang="ts">
import { ref } from 'vue'
import {detailPageStore} from '@/features/main/stores/detailPage.store';
import { storeToRefs } from 'pinia';
import { cartStore } from '@/features/main/stores/cart.store';
import { productAndFilterStore } from '@/features/main/stores/productsAndFilter.store';

const props = defineProps({
    id: Number,
});
const { products } = productAndFilterStore();
const currentProduct = products[props.id as number];

const {currentTab} = storeToRefs(detailPageStore());
currentTab.value = 1;
const numberWantAdd = ref(1);

const { addToCart } = cartStore();
</script>

<template>
    <div class="container-fluid border-bottom">
        <div class="container-lg wrapper">
            <div class="row">
                <div class="block-left col-12 col-md-5 col-xl-7 order-2 order-md-1">
                    <v-tabs v-model="currentTab">
                        <v-tab value="one">About Products</v-tab>
                        <v-tab value="two">Details</v-tab>
                        <v-tab value="three">Specs</v-tab>
                    </v-tabs>
                </div>
                <div class="block-right col-12 col-md-7 col-xl-5 order-1 order-md-2 d-flex align-items-center">
                    <div>
                        <p class="on-sale-from d-inline">On Sale from </p><p class="price d-inline">${{ currentProduct.newPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
                        <input type="number" class="d-inline input-add-to-card" min="1" v-model="numberWantAdd">
                        <button @click.prevent="addToCart(currentProduct.id, numberWantAdd)" class="d-inline btn-add-to-cart">Add to Cart</button>
                    </div> 
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper {
    padding: 0px;
}

.block-left {
    margin: 0px 0px;
    display: flex;
    :deep(.v-tabs) {
        margin: 10px 0px 20px 0px;

        .v-tab {
            .v-tab__slider {
                background-color: #0156FF;
                bottom: 10px;
            }

            .v-btn__content {
                text-transform: none;
                font-weight: 600;
                font-size: 14px;
                color: #666666;
            }

            &:hover>.v-btn__overlay {
                opacity: 0;
            }
        }

        .v-tab--selected {
            .v-btn__content {
                color: black
            }
        }
    }
}
.block-right{
    display: flex;
    .on-sale-from{
        font-size: 14px;
    }
    .price{
        font-size: 14px;
        font-weight: 600;
    }
    .input-add-to-card{
        background: #F5F7FF;
        border-radius: 6px;
        padding: 9px 12px;
        width: 70px;
        margin-left: 10px;
    }
    .btn-add-to-cart{
        margin-left: 20px;
        background-color: #0156FF;
        width: 150px;
        height: 50px;
        border-radius: 99px;
        font-size: 14px;
        font-weight: 600;
        color: white;
        letter-spacing: 1px;
    }
}

@media screen and (max-width: 767px) {
    .block-left{
        justify-content: center;
    }
    .block-right{
        justify-content: center;
        margin-top: 10px;
    }
}
</style>