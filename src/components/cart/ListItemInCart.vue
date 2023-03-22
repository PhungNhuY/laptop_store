<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { cartStore } from '@/features/main/stores/cart.store';
import { productAndFilterStore } from '@/features/main/stores/productsAndFilter.store';

const { products } = productAndFilterStore();
const { cart } = storeToRefs(cartStore());
const {removeFromCart, clearCart, updateProductInCart} = cartStore();
</script>

<template>
    <div class="wrapper">
        <div class="row table-head">
            <div class="col-3 col-md-5">Item</div>
            <div class="col-2 col-md-2">Price</div>
            <div class="col-3 col-md-2">Qty</div>
            <div class="col-3 col-md-2">Subtotal</div>
            <div class="col-1 col-md-1"></div>
        </div>
        <div
            v-for="[productId, numberInCart] in cart"
            :key="productId"
            class="row g-2 item-row"
        >
            <div class="col-3 col-md-5 item">
                <div class="row g-2">
                    <div class="col-md-4 col-12">
                        <img :src="products[productId].image" alt="" class="product-image">
                    </div>
                    <div class="col-md-8 col-12 destop-des">
                        <p class="description">MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD,
                            Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
                    </div>
                </div>
            </div>
            <div class="col-2 col-md-2 price">${{ products[productId].newPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</div>
            <div class="col-3 col-md-2 qty">
                <input 
                    type="number"
                    class="d-inline input-add-to-card"
                    :value="numberInCart"
                    min="1"
                    @input="updateProductInCart(productId, $event.target.value)"
                >
            </div>
            <div class="col-3 col-md-2 subtotal">${{ (products[productId].newPrice * numberInCart).toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</div>
            <div class="col-1 col-md-1 delete-edit d-flex flex-column align-items-end">
                <button @click="removeFromCart(productId)"><img src="@/assets/icons/x-circle-gray.svg" alt="" class="icon"></button>
                <button><img src="@/assets/icons/pen-circle-gray.svg" alt="" class="icon"></button>
            </div>
            <div class="col-12 mobile-des">
                <p class="description">MSI MEG Trident X 10SD-1012AU Intel i7 10700K, 2070 SUPER, 32GB RAM, 1TB SSD,
                    Windows 10 Home, Gaming Keyboard and Mouse 3 Years Warranty</p>
            </div>
        </div>
        <div class="button-in-bottom">
            <div class="two-button">
                <RouterLink to="/"><button class="single-button btn-gray btn">Continue Shopping</button></RouterLink>
                <button @click="clearCart()" class="single-button btn-black btn">Clear Shopping Cart</button>
            </div>
            <button class="single-button btn-black btn one-button">Update Shopping Cart</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
.table-head {
    padding: 12px;
    font-weight: 600;
    font-size: 14px;
    border-bottom: 1px solid #CACDD8;
}

.item-row {
    padding-top: 25px;
    border-bottom: 1px solid #CACDD8;
    .mobile-des{
        display: none;
    }
    .item {
        .product-image {
            width: 100%;
            height: auto;
        }

        .description {
            font-size: 14px;
            font-weight: 400;
        }
    }
    .price{
        font-size: 16px;
        font-weight: 600;
    }
    .qty{
        .input-add-to-card{
            background: #F5F7FF;
            border-radius: 6px;
            padding: 9px 12px;
            width: 70px;
            margin-left: 10px;
        }
    }
    .subtotal{
        font-size: 16px;
        font-weight: 600;
    }
    .delete-edit{
        .icon{
            width: 27px;
            height: auto;
            padding-bottom: 6px;
        }
    }
}
.button-in-bottom{
    margin-top: 25px;
    display: flex;
    justify-content: space-between;
    .btn{
        height: 37px;
        border-radius: 99px;
        width: 200px;
        font-size: 14px;
        font-weight: 600;
    }
    .btn-gray{
        color: #A2A6B0;
        border: 2px solid #A2A6B0;
        margin-right: 7px;
    }
    .btn-black{
        color: white;
        background-color: black;
    }
}

@media screen and (max-width: 991px) {
    .button-in-bottom{
        flex-direction: column;
        align-items: center;
        .one-button{
            margin-top: 15px;
        }
    }
}    
@media screen and (max-width: 767px) {
    .item-row{
        .destop-des{
            display: none;
        }
        .mobile-des{
            display: block;
        }
    }
    .button-in-bottom{
        flex-direction: column;
        align-items: center;
        .one-button{
            margin-top: 15px;
        }
        .two-button{
            display: flex;
            flex-direction: column;
            :last-child{
                margin-top: 15px;
            }
        }
    }
}
</style>
