<script setup lang="ts">
import { cartStore } from '@/features/main/stores/cart.store';
import { storeToRefs } from 'pinia';

const {totalProductInCart} = storeToRefs(cartStore());
</script>

<template>
    <div class="header">
        <div class="wrp container-lg">
            <div class="row">
                <div class="col-10 hdr-left">
                    <img src="../../assets/icons/mobile-menu.svg" alt="" class="mobile-menu">
                    <RouterLink to="/"><img src="../../assets/icons/logo-icon.svg" alt="" class="logo" /></RouterLink>
                    <div class="list">
                        <p class="option">Laptops</p>
                        <p class="option">Desktop PCs</p>
                        <p class="option">Networking Devices</p>
                        <p class="option">Printers & Scanners</p>
                        <p class="option">PC Parts</p>
                        <p class="option">All Other Products</p>
                        <p class="option">Repairs</p>
                        <button class="my-btn">Our Deals</button>
                    </div>
                </div>
                <div class="col-2 hdr-right">
                    <div><img src="../../assets/icons/search-icon.svg" alt="" class="icon"></div>
                    <RouterLink to="/cart">
                        <div class="cart-icon">
                            <img src="../../assets/icons/cart-icon.svg" alt="" class="icon">
                            <p
                                v-if="totalProductInCart > 0"
                                class="cart-count"
                            >{{ totalProductInCart }}</p>
                        </div>
                    </RouterLink>
                    <div><img src="../../assets/images/avatar1.png" alt="" class="avatar"></div>
                </div>
            </div>
        </div>
    </div>
</template>


<style scoped lang="scss">
p{
    margin-bottom: 0px;
}
.header{
    border-bottom: 1px solid #CACDD8;
}
.wrp{
    padding: 14px 0px;
}
.logo{
    margin-left: 15px;
}
.hdr-left{
    display: flex;
    justify-content: flex-start;
}
.list{
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    font-size: 14px;
    font-weight: 500;
}
.list{ 
    .option{
        margin-left: 20px;
        &:hover{
            font-weight: 600;
        }
    }
    .my-btn{
        margin-left: 20px;
        color: #0156FF;
        border: 2px solid #0156FF;
        border-radius: 99px;
        padding: 4px 13px;
        &:hover{
            background-color: #0156FF;
            color: white;
        }
    }
}
.hdr-right{
    display: flex;
    justify-content: flex-end;
    align-items: center;
    .avatar{
        width: 26px;
        height: 26px;
    }
    .icon{
        width: 16px;
        height: 16px;
        margin-right: 26px;
    }
    .cart-icon{
        position: relative;
        .cart-count{
            position: absolute;
            top:-4px;
            left: 9px;
            font-size: 10px;
            font-weight: 700;
            color: white;
            background-color: #0156FF;
            border-radius: 99px;
            min-width: 15px;
            text-align: center;
        }
    }
}
.mobile-menu{
    display: none;
}

@media screen  and (max-width: 767px){
    .list{
        display: none;
    }
    .mobile-menu{
        display: block;
        width: 40px;
        margin-left: 10px;
    }
}
</style>