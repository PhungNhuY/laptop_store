<script setup lang="ts">
import {ref} from 'vue';
import { storeToRefs } from 'pinia';
import { cartStore } from '@/features/main/stores/cart.store';

const { subTotal } = storeToRefs(cartStore());

const shipping = ref(21);
const tax = ref(1.91);
const gst = ref(1.91);
</script>

<template>
    <div class="wrapper">
        <p class="title">Summary</p>
        <v-expansion-panels class="custom-expansion">
            <v-expansion-panel bg-color="#F5F7FF">
                <v-expansion-panel-title>
                    <div class="">
                        <p class="text-title">Estimate Shipping and Tax</p>
                        <p class="text-bonus">Enter your destination to get a shipping estimate.</p>
                    </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p class="label">Country</p>
                    <v-select
                        :items="['VietNam', 'USA', 'Canada']"
                        variant="solo"
                    ></v-select>
                    <p class="label">State/Province</p>
                    <v-text-field variant="solo"></v-text-field>
                    <p class="label">Zip/Postal Code</p>
                    <v-text-field variant="solo"></v-text-field>
                    <p class="label">Standard Rate</p>
                    <v-radio-group class="custom-radio">
                        <v-radio label="Price may vary depending on the item/destination. Shop Staff will contact you. $21.00" value="1"></v-radio>
                    </v-radio-group>
                    <p class="label">Pickup from store</p>
                    <v-radio-group class="custom-radio">
                        <v-radio label="1234 Street Adress City Address, 1234 $0.00" value="1"></v-radio>
                    </v-radio-group>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        
        <v-expansion-panels class="custom-expansion">
            <v-expansion-panel bg-color="#F5F7FF">
                <v-expansion-panel-title>
                    <div class="">
                        <p class="text-title">Apply Discount Code</p>
                    </div>
                </v-expansion-panel-title>
                <v-expansion-panel-text>
                    <p class="label">Enter discount code</p>
                    <v-text-field variant="solo" label="Enter Discount code" single-line></v-text-field>
                    <button class="custom-button">Apply Discount</button>
                </v-expansion-panel-text>
            </v-expansion-panel>
        </v-expansion-panels>
        <hr/>
        <div class="bill">
            <div class="bill-item d-flex justify-content-between">
                <p>Subtotal</p>
                <p>${{subTotal.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</p>
            </div>
            <div class="bill-item d-flex justify-content-between">
                <div>
                    <p>Shipping</p>
                    <p class="short-description">(Standard Rate - Price may vary depending on the item/destination. TECS Staff will contact you.)</p>
                </div>
                <p>${{ shipping.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
            </div>
            <div class="bill-item d-flex justify-content-between">
                <p>Tax</p>
                <p>${{ tax.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
            </div>
            <div class="bill-item d-flex justify-content-between">
                <p>GST (10%)</p>
                <p>${{gst.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</p>
            </div>
            <div class="bill-item d-flex justify-content-between">
                <p>Order Total</p>
                <p>${{(subTotal + shipping + tax + gst).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}}</p>
            </div>
        </div>
        <button class="checkout">Proceed to Checkout</button>
    </div> 
</template>

<style scoped lang="scss">
p {
    margin: 0px;
}

.wrapper {
    background-color: #F5F7FF;
    padding: 18px 30px 200px !important;
}

.title {
    font-weight: 600;
    font-size: 24px;
}

.custom-expansion {
    :deep(.v-expansion-panel-title) {
        padding: 0px;
    }
    :deep(.v-expansion-panel__shadow) {
        box-shadow: none;
    }
    :deep(.v-expansion-panel-title__overlay) {
        opacity: calc(0.0 * var(--v-theme-overlay-multiplier));
    }
    :deep(.v-expansion-panel-text__wrapper) {
        padding: 0px;
    }
    :deep(.v-input__details){
        display: none;
    }
    .text-title {
        font-size: 18px;
        font-weight: 500;
        margin-bottom: 7px;
        margin-top: 20px;
    }
    .text-bonus {
        font-size: 14px;
        color: #666666;
    }
    .label{
        font-weight: 600;
        font-size: 13px;
        margin-bottom: 5px;
        margin-top: 10px;
    }
}
.custom-radio{
    :deep(.v-label){
        font-size: 14px;
        color: black;
        opacity: 1;
    }
    :deep(.v-selection-control__wrapper){
        color: #0156FF;
    }
}
.custom-button{
    width: 100%;
    margin-top: 20px;
    color: #0156FF;
    height: 50px;
    border-radius: 99px;
    border: 2px solid #0156FF;
    font-size: 14px;
    font-weight: 600;
    &:hover{
        color: white;
        background-color: #0156FF;
    }
}
.bill{
    font-size: 13px;
    font-weight: 600;
    .bill-item{
        margin: 10px 0px;
    }
    .short-description{
        font-size: 10px;
        color: #A2A6B0;
        font-weight: 400;
    }
}
.checkout{
    width: 100%;
    height: 50px;
    color: white;
    background-color: #0156FF;
    border-radius: 99px;
    font-size: 14px;
    font-weight: 500;
    &:hover{
        scale: 1.01;
    }
}
</style>