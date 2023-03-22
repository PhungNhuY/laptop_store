<script setup lang="ts">

</script>

<template>
    <div class="container wrapper">
        <v-breadcrumbs :items="['Home', 'Cart']" class="custom-brcr"
            divider="&#8250;"></v-breadcrumbs>
            <h1 class="main-title">Shopping Cart</h1>
    </div>
</template>

<style scoped lang="scss">
.wrapper{
    padding: 0px;
}
.custom-brcr {
    margin: 0px;
    padding: 20px 0px;
    font-size: 12px;
    font-weight: 500;

    :deep(.v-breadcrumbs-divider) {
        color: blue;
    }

    :deep(.v-breadcrumbs-item.v-breadcrumbs-item--disabled) {
        color: gray;
    }
}
.main-title{
    font-weight: 600;
    font-size: 32px;
    margin: 0px;
}
</style>