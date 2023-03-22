<script lang="ts" setup>

import { detailPageStore } from '@/features/main/stores/detailPage.store';
import { productAndFilterStore } from '@/features/main/stores/productsAndFilter.store';
import { storeToRefs } from 'pinia';

const props = defineProps({
    id: Number,
});

const { currentTab } = storeToRefs(detailPageStore());

const { products } = productAndFilterStore();
const currentProduct = products[props.id as number];
</script>

<template>
    <div class="container-lg wrapper">
        <div class="row">
            <div class="col-12 col-md-7">
                <div class="box-wrapper">
                    <span class="special-bg left"></span>
                    <div class="content">
                        <div class="mini-block">
                            <v-breadcrumbs :items="['Home', 'Laptops', 'MSI WS Series']" class="custom-brcr"
                                divider="&#8250;"></v-breadcrumbs>
                            <p class="product-name">MSI MPG Trident 3</p>
                            <a href="#" class="let-review">Be the first to review this product</a>

                            <v-window v-model="currentTab" class="windows">
                                <v-window-item value="one" class="window-one">
                                    <p>{{currentProduct.des}}</p>
                                </v-window-item>

                                <v-window-item value="two" class="window-two">
                                    <ul>
                                        <li>Intel Core i7-10700F</li>
                                        <li>Intel H410</li>
                                        <li>WHITE</li>
                                        <li>NVIDIA MSI GeForce RTX 2060 SUPER 8GB AERO ITX GDDR6</li>
                                        <li>SO-DIMM 16GB (16GB x 1) DDR4 2666MHz</li>
                                        <li>2 total slots (64GB Max)</li>
                                        <li>512GB (1 x 512GB) M.2 NVMe PCIe GEN3x4 SSD 2TB (2.5) 5400RPM</li>
                                        <li>Gaming Keyboard GK30 + Gaming Mouse GM11</li>
                                        <li>3.5 HDD (0/0), 2.5 HDD/SSD(1/0), M.2 (1/0)</li>
                                        <li>Intel WGI219Vethernet (10/100/1000M)</li>
                                        <li>AX200 (WIFI 6)+BT5.1</li>
                                        <li>PSU 330W</li>
                                        <li>Fan Cooler</li>
                                    </ul>
                                </v-window-item>

                                <v-window-item value="three" class="window-three">
                                    <table class="table">
                                        <tr>      
                                            <td>
                                                <p>CPU</p>
                                            </td>
                                            <td>
                                                <p>N/A</p>
                                            </td>
                                        </tr>
                                        <tr class="table-active">
                                            <td>
                                                <p>Featured</p>
                                            </td>
                                            <td>
                                                <p>N/A</p>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td>
                                                <p>I/O Ports</p>
                                            </td>
                                            <td>
                                                <p>N/A</p>
                                            </td>
                                        </tr>
                                    </table>
                                </v-window-item>
                            </v-window>
                            <div class="contact-and-type d-flex justify-content-between">
                                <p class="contact-us">Have a Question? <a href="#" class="contact-link">Contact Us</a></p>
                                <p class="type">{{currentProduct.name}}</p>
                            </div>
                        </div>
                        <p class="more-info">+ More information</p>
                    </div>
                </div>
            </div>
            <div class="col-12 col-md-5">
                <div class="box-wrapper">
                    <div class="product-image">
                        <div class="icons d-flex flex-column">
                            <img class="icon" src="@/assets/icons/heart-circle.svg" alt="">
                            <img class="icon" src="@/assets/icons/chart-circle.svg" alt="">
                            <img class="icon" src="@/assets/icons/letter-circle.svg" alt="">
                        </div>
                        <img class="main-image" :src="currentProduct.image" alt="">
                    </div>
                    <div class="zip d-flex justify-content-center">
                        <img src="@/assets/images/zip-logo.png" alt="" class="logo">
                        <p class="divider">|</p>
                        <p class="interest">own it now, up to 6 months interest free learn more</p>
                    </div>
                </div>
            </div>
        </div>
</div>
</template>

<style lang="scss" scoped>
p {
    margin: 0px;
}

.wrapper {
    padding: 0px;
}

.box-wrapper {
    position: relative;
    width: 100%;
}

.special-bg.left {
    position: absolute;
    top: 0px;
    right: 0px;
    bottom: 0px;
    width: 100vw;
    background: #F5F7FF;
}

.content {
    width: 100%;
    position: relative;
    padding-bottom: 60px;
}

.custom-brcr {
    margin: 0px;
    padding: 67px 0px 25px 0px;
    font-size: 12px;
    font-weight: 500;

    :deep(.v-breadcrumbs-divider) {
        color: blue;
    }

    :deep(.v-breadcrumbs-item.v-breadcrumbs-item--disabled) {
        color: gray;
    }
}

.product-name {
    font-weight: 500;
    font-size: 32px;
    margin-bottom: 13px;
}

.let-review {
    font-size: 12px;
    text-decoration: none;
}

.mini-block {
    padding-left: 120px;
    padding-right: 118px;
}

.windows {
    margin-top: 24px;

    .window-one {
        font-size: 18px;
    }

    .window-two {
        font-size: 14px;
    }

    .window-three {
        .table {
            background-color: white;
            border: 1px solid #CACDD8;

            tr {
                height: 40px;
            }
        }

        .table-active {
            background-color: #F5F7FF !important;
        }
    }
}

.contact-and-type {
    margin-top: 24px;
    font-size: 12px;

    .contact-us {
        font-weight: 600;

        .contact-link {
            font-weight: 400;
        }
    }
}

.more-info {
    font-size: 14px;
    font-weight: 700;
    margin-top: 80px;
}

.product-image {
    margin-top: 60px;
    position: relative;
    width: 100%;
    text-align: center;

    .icons {
        position: absolute;
        top: 30px;

        .icon {
            width: 30px;
            height: 30px;
            margin-top: 7px;
        }
    }
}

.zip {
    margin: 24px 0px;
    width: 100%;

    .logo {
        height: 27px;
    }

    .divider {
        color: #00AEB8;
        font-size: 28px;
        line-height: 25px;
        margin: 0px 10px;
    }

    .interest {
        font-size: 12px;
        width: 160px;
    }
}

@media screen and (max-width: 1199px) {
    .mini-block {
        padding-left: 70px;
        padding-right: 50px;
    }
    .box-wrapper{
        padding-left: 10px;
    }
}
</style>
