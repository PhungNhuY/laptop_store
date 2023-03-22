<script setup lang="ts">
import { productAndFilterStore } from '@/features/main/stores/productsAndFilter.store';

const { filter, removeOption, clearFilter } = productAndFilterStore();
</script>

<template>
    <div class="wrapper d-flex flex-wrap">
        <div class="single-filter d-flex align-items-center" v-for="option in filter" :key="option.id">
            <p>{{ option.value.text }}</p>
            <button @click="removeOption(option)"><img src="../../assets/icons/red-x.svg" alt="" class="red-x" /></button>
        </div>
        <button @click="clearFilter()" v-if="filter.length > 0">
            <div class="btn-clear d-flex align-items-center">
                <p>Clear All</p>
            </div>
        </button>
    </div>
</template>

<style scoped lang="scss">
p {
    margin: 0px;
}

.wrapper {
    width: 100%;
    margin: 0px 0px 0px 6px;
}

.single-filter {
    height: 38px;
    border: 1px solid #CACDD8;
    padding: 9px 5px 9px 17px;
    font-size: 13px;
    font-weight: 600;
    margin: 1px;
}

.red-x {
    width: 20px;
    height: 20px;
    margin-left: 10px;
}

.btn-clear {
    height: 38px;
    border: 1px solid #CACDD8;
    padding: 9px 17px;
    font-size: 13px;
    font-weight: 600;
    margin: 1px;
}
</style>