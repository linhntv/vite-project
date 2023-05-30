<template>
  <div class="table-user_data">
    <component :is="Table" :userManagement="userManagement"/>
  </div>
</template>

<script setup>
import {userManagement} from '../resources/managementTable'
import Table from '../constant/Table.vue';
//import { ref, reactive } from "vue";
</script>

<style lang="scss" scoped>
  .table-user_data {
    margin: 32px;
    padding: 24px;
    border:1px solid #f3e5e5;
  }
</style>  