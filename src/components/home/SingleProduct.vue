<script setup lang="ts">
import type {IProduct } from '@/features/main/interfaces'
import { cartStore } from '@/features/main/stores/cart.store';

interface Props{
    product: IProduct;
}

const { addToCart } = cartStore();
const props = withDefaults(defineProps<Props>(), {});
</script>

<template>
    <RouterLink 
        :to="{
            name:'detailPage', 
            params:{
                id: product.id
            }
        }" 
        class="custom-router-link"
    >
        <div class="wrapper shadow-sm">
            <div class="row">
                <div class="col-xl-3 col-md-6 img-star">
                    <!-- <img src="../../assets/images/product/laptop1.png" alt="" class="pro-img"> -->
                    <img :src="props.product.image" alt="" class="pro-img">
                    <div class="star-review">
                        <img src="../../assets/icons/star-icon.svg" alt="">
                        <img src="../../assets/icons/star-icon.svg" alt="">
                        <img src="../../assets/icons/star-icon.svg" alt="">
                        <img src="../../assets/icons/star-icon.svg" alt="">
                        <img src="../../assets/icons/gray-star.svg" alt="">
                        <p class="review">Review (4)</p>
                    </div>
                </div>
                <div class="col-xl-4 col-md-6 name-des-price-cart">
                    <!-- <p class="name">SKU D5515AI</p> -->
                    <p class="name">{{ product.name }}</p>
                    <!-- <p class="des">MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop</p> -->
                    <p class="des">{{ product.des }}</p>
                    <div class="price">
                        <!-- <p class="old-price">$499.00</p> -->
                        <p class="old-price">${{ product.oldPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
                        <!-- <p class="new-price">$499.00</p> -->
                        <p class="new-price">${{ product.newPrice.toFixed(2).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",") }}</p>
                    </div>
                    <button @click.prevent="addToCart(product.id)" class="add-cart"><img src="../../assets/icons/blue-cart-icon.svg" alt=""> Add To Cart</button>
                </div>
                <div class="col-xl-3 col-md-8 moreFt">
                    <table class="table">
                        <tr>
                            <td><p>CPU</p></td>
                            <td><p>N/A</p></td>
                        </tr>
                        <tr class="table-active">
                            <td><p>Featured</p></td>
                            <td><p>N/A</p></td>
                        </tr>
                        <tr>
                            <td><p>I/O Ports</p></td>
                            <td><p>N/A</p></td>
                        </tr>
                    </table>
                </div>
                <div class="col-xl-2 col-md-4 another-function">
                    <!-- <img src="../../assets/icons/instock.png" alt="" class="instock"> -->
                    <div class="circle-button">
                        <img src="../../assets/icons/letter-circle.svg" alt="">
                        <img src="../../assets/icons/chart-circle.svg" alt="">
                        <img src="../../assets/icons/heart-circle.svg" alt="">
                    </div>
                </div>
                <img src="../../assets/icons/instock.png" alt="" class="instock"/>
            </div>
        </div>
    </RouterLink>
</template>

<style scoped lang="scss">
p{
    margin: 0px;
}
.custom-router-link{
    text-decoration: none;
    color: unset;
}
.wrapper{
    /* background-color: aquamarine; */
    width: 100%;
    padding: 8px 30px 36px 50px;
    margin: 15px 0px 0px 6px;
}
.img-star{
    .pro-img{
        width: 100%;
        height: auto;
    }
}
.star-review{
    margin-top: 11px;
    display: flex;
    .review{
        margin-left: 10px;
        font-size: 12px;
        color: #A2A6B0;
    }
}
.name-des-price-cart{
    padding-top: 40px;
    padding-left: 20px;
    .name{
        font-size:  12px;
    }
    .des{
        margin-top: 20px;
        font-size:  13px;
        font-weight:  500;
    }
    .price{
        margin-top: 20px;
        display: flex;
        .old-price{
            font-size: 14px;
            color: #666666;
            text-decoration: line-through;
            line-height: 30px;
        }
        .new-price{
            font-size: 18px;
            font-weight: 700;
            margin-left: 5px;
        }
    }
    .add-cart{
        font-size:  14px;
        font-weight: 600;
        color: #0156FF;
        border: 2px solid #0156FF;
        border-radius: 99px;
        padding: 8px 20px;
        margin-top: 35px;
    }
}
.moreFt{
    font-size: 12px;
    font-weight: 500;
    padding-top: 70px;
}
.another-function{
    position: relative;
    .circle-button{
        position: absolute;
        bottom: 0;
        right: 0;
    }
    .circle-button{
        img{
            margin-left: 5px;
        }
    }
}
.row{
    position: relative;
}
.instock{
    position: absolute;
    top: 10px;
    right: 10px;
    width: 90px;
    height: auto;
}
</style>