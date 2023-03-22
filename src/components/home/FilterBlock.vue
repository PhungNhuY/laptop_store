<script setup lang="ts">
import { productAndFilterStore } from '@/features/main/stores/productsAndFilter.store';
import type { IOption } from '@/features/main/interfaces';
const { addOption, clearFilter, countProductEachOption, applyFilter, options, filter } = productAndFilterStore();
</script>

<template>
    <div class="wrapper">
        <p class="title">Filters</p>
        <div class="text-center">
            <button class="clr-filter" @click="clearFilter()">Clear Filter</button>
        </div>

        <div class="filter-group">
            <div class="filter-option filter-title">
                <p>Category</p>
                <p class="rotate90">&#10094;</p>
            </div>
            <button v-for="option in options.slice(0, 3)" :key="option.id" class="filter-button">
                <div class="filter-option" @click="addOption(option)">
                    <p>{{ option.value.text }}</p>
                    <p>{{ countProductEachOption(option) }}</p>
                </div>
            </button>
        </div>

        <div class="filter-group">
            <div class="filter-option filter-title">
                <p>Price</p>
                <p class="rotate90">&#10094;</p>
            </div>
            <button v-for="option in options.slice(3)" :key="option.id" class="filter-button">
                <div class="filter-option" @click="addOption(option)">
                    <p>{{ option.value.text }}</p>
                    <p>{{ countProductEachOption(option) }}</p>
                </div>
            </button>
        </div>

        <div class="filter-group">
            <div class="filter-option filter-title">
                <p>Color</p>
                <p class="rotate90">&#10094;</p>
            </div>
            <div style="display: flex;">
                <div class="color-picker" style="background-color: black;"></div>
                <div class="color-picker" style="background-color: red;"></div>
            </div>
        </div>

        <div class="filter-group">
            <div class="filter-option filter-title">
                <p>Filter Name</p>
                <p class="rotate90">&#10094;</p>
            </div>
        </div>

        <div class="text-center">
            <button class="apply-button" @click="applyFilter()">Apply Filter ({{ filter.length }})</button>
        </div>
    </div>
</template>

<style scoped lang="scss">
p {
    margin: 0px;
}

.wrapper {
    background-color: #F5F7FF;
    padding: 12px;
}

.title {
    font-size: 16px;
    font-weight: 700;
    text-align: center;
}

.clr-filter {
    font-size: 14px;
    color: #A2A6B0;
    border-radius: 99px;
    border: 2px solid #A2A6B0;
    padding-top: 4px;
    padding-bottom: 4px;
    width: 100%;
    margin-top: 10px;
    font-weight: 500;

    &:hover {
        background-color: #A2A6B0;
        color: black;
    }
}

.filter-option {
    font-size: 13px;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
}

.filter-title {
    font-weight: 600;
    font-size: 14px;
    line-height: 30px;
}

.color-picker {
    width: 23px;
    height: 23px;
    border-radius: 99px;
    margin-right: 9px;
}

.apply-button {
    font-size: 14px;
    color: white;
    font-weight: 500;
    background-color: #0156FF;
    border-radius: 99px;
    padding-top: 6px;
    padding-bottom: 6px;
    width: 100%;
    margin-top: 10px;
}

.filter-group {
    margin-top: 15px;
}

.rotate90 {
    transform: rotate(90deg);
}

.filter-button {
    width: 100%;
}
</style>