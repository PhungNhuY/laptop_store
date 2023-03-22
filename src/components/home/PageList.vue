<script setup lang="ts">
import {productAndFilterStore} from '@/features/main/stores/productsAndFilter.store';
import { storeToRefs } from 'pinia';

const {numberOfPage, currentPage} = storeToRefs(productAndFilterStore());
const {paging} = productAndFilterStore();
</script>

<template>
    <div class="text-center my-component">
          <v-row justify="center">
            <v-col cols="8">
                <v-pagination
                  v-model="currentPage"
                  class="my-4"
                  :length="numberOfPage"
                  :total-visible="4"
                  rounded="circle"
                  @click="paging"
                ></v-pagination>
            </v-col>
          </v-row>
      </div>
</template>

<style scoped lang="scss">
.my-component {
    :deep(.v-pagination__item) {
        .v-btn{
            border: 2px solid #A2A6B0;
        }
        .v-btn--disabled{
            border: none;
        }
    }
    :deep(.v-pagination__item.v-pagination__item--is-active) {
        .v-btn{
            border: none;
            background-color: #F5F7FF;
        }
    }
    :deep(.v-pagination__next) {
        .v-btn{
            border: 2px solid #A2A6B0;
        }
    }
    :deep(.v-pagination__prev) {
        .v-btn{
            border: 2px solid #A2A6B0;
        }
    }
}
</style>