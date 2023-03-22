<script setup lang="ts">
import { ref } from 'vue'
import { productAndFilterStore } from '@/features/main/stores/productsAndFilter.store';
import { storeToRefs } from 'pinia';

const { sortProduct, paging } = productAndFilterStore();
const { sortOption, productsAfterFilter, perPage, from, to } = storeToRefs(productAndFilterStore());
const sortSelectDisplay = ref(false);

const perPageSelectDisplay = ref(false);
</script>

<template>
    <div class="wrapper d-flex justify-content-between align-items-center">
        <p>Items {{ from }} to {{ to }} of {{ productsAfterFilter.length }}</p>
        <div class="sort-and-view">
            <button @click="sortSelectDisplay = !sortSelectDisplay">
                <p class="color-gray">Sort By:</p>
                <p class="font-weight-500">{{ sortOption }}</p>
                <p class="arrow">&#10094;</p>
            </button>
            <div class="sort-option" :class="sortSelectDisplay ? 'd-block' : 'd-none'">
                <ul>
                    <li @click="sortOption = 'price'; sortSelectDisplay = false; sortProduct();">Price</li>
                    <li @click="sortOption = 'price revert'; sortSelectDisplay = false; sortProduct();">Price revert</li>
                </ul>
            </div>

            <button @click="perPageSelectDisplay = !perPageSelectDisplay">
                <p class="color-gray">Show:</p>
                <p class="font-weight-500">{{ perPage }} per page</p>
                <p class="arrow">&#10094;</p>
            </button>
            <div class="view-option" :class="perPageSelectDisplay ? 'd-block' : 'd-none'">
                <ul>
                    <li @click="perPage = 1; perPageSelectDisplay = false; paging(true)">1 per page</li>
                    <li @click="perPage = 2; perPageSelectDisplay = false; paging(true)">2 per page</li>
                    <li @click="perPage = 3; perPageSelectDisplay = false; paging(true)">3 per page</li>
                    <li @click="perPage = 35; perPageSelectDisplay = false; paging(true)">35 per page</li>
                </ul>
            </div>

            <img src="../../assets/icons/gird-mode.svg" alt="">
            <img src="../../assets/icons/list-mode.svg" alt="">
        </div>
    </div>
</template>

<style scoped lang="scss">
p {
    margin: 0px;
}

.wrapper {
    width: 100%;
    margin: 0px 0px 0px 6px;
    font-size: 13px;

    >p {
        color: #CACDD8;
    }
}

.sort-and-view {
    position: relative;

    .sort-option {
        position: absolute;
        top: 36px;
        left: 10px;

        ul {
            list-style: none;
            margin: 0px;
            padding: 0px;
            border: 1px solid #CACDD8;
            width: 170px;
        }

        li {
            padding: 5px 10px;
            border-bottom: 1px solid #CACDD8;
            position: relative;
            z-index: 1;

            &:hover {
                background-color: #CACDD8;
            }
        }
    }

    .view-option {
        position: absolute;
        top: 36px;
        left: 190px;
        z-index: 1;
        background-color: white;

        ul {
            list-style: none;
            margin: 0px;
            padding: 0px;
            border: 1px solid #CACDD8;
            width: 170px;
            position: relative;
            z-index: 1;
        }

        li {
            padding: 5px 10px;
            border-bottom: 1px solid #CACDD8;
            position: relative;
            z-index: 1;

            &:hover {
                background-color: #CACDD8;
            }
        }
    }

    p {
        display: inline-block;
    }

    button {
        width: 170px;
        border: 2px solid #CACDD8;
        border-radius: 2px;
        padding: 7px 10px 7px 24px;
        margin-left: 10px;
    }

    img {
        margin-left: 20px;
    }
}

.color-gray {
    color: #CACDD8;
}

.font-weight-500 {
    font-weight: 500;
}

.arrow {
    font-size: 10px;
    margin-left: 10px;
    transform: rotate(270deg);
}

@media screen and (max-width: 1199px) {
    .sort-and-view img {
        display: none;
    }

    .wrapper>p {
        display: none;
    }
}</style>