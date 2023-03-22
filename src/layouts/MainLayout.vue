<script setup lang="ts">
import BlackLineOnHeader from '@/components/mainLayout/BlackLineOnHeader.vue'
import HeaderBar from '@/components/mainLayout/HeaderBar.vue'
</script>

<template>
    <div class="main-layout">
        <BlackLineOnHeader/>
        <HeaderBar/>
        
        <RouterView/>
    </div>
</template>

<style scoped lang="scss">
.main-layout{
    margin-bottom: 100px;
}
</style>
