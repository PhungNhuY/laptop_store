<script setup lang="ts">
import ListItemInCart from './ListItemInCart.vue';
import SummaryBlock from './SummaryBlock.vue';
</script>

<template>
    <div class="container wrapper">
        <div class="row gy-5">
            <div class="col-12 col-md-8">
                <ListItemInCart />
            </div>
            <div class="col-12 col-md-4">
                <SummaryBlock />
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.wrapper{
    padding: 0px;
}
</style>