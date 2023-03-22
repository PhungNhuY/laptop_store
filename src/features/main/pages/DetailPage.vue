<script setup lang="ts">
import NavbarAndaddToCart from '@/components/detail/NavbarAndaddToCart.vue';
import DetailBody from '@/components/detail/DetailBody.vue';
const props = defineProps(['id']);
</script>

<template>
    <div class="detail-page">
        <NavbarAndaddToCart :id="props.id" />
        <DetailBody :id="props.id"/>
    </div>
</template>

<style scoped lang="scss">
.detail-page{

}
</style>