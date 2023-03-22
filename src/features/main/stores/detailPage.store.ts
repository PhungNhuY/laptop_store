import { defineStore } from 'pinia'
import { ref } from 'vue';

export const detailPageStore = defineStore('detailPageStore', () => {
    const currentTab = ref(1);
    return {
        currentTab
    };
});