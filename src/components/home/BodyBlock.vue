<script setup lang="ts">
import FilterBlock from '../home/FilterBlock.vue';
import SingleProduct from '../home/SingleProduct.vue';
import ViewMode from '../home/ViewMode.vue';
import PageList from '../home/PageList.vue';
import FilterList from '../home/FilterList.vue';
import {productAndFilterStore} from '@/features/main/stores/productsAndFilter.store';
import { storeToRefs } from 'pinia';

const useFilterStore = productAndFilterStore();
const { tempProduct } = storeToRefs(useFilterStore);
</script>

<template>
    <div class="container-lg">
        <div class="row">
            <div class=" col-xl-2 col-lg-3 col-md-3 col-sm-4 custom-padding">
                <FilterBlock/>
            </div>
            <div class=" col-xl-10 col-lg-9 col-md-9 col-sm-8 custom-padding">
                <ViewMode/>
                <FilterList/>
                <SingleProduct 
                    v-for="product in tempProduct" 
                    :key="product.id"
                    :product="product"
                />
                <PageList/>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
p{
    margin: 0px;
}
.custom-padding{
    padding: 3px;
}
.container{
    padding: 0px;
}
</style>