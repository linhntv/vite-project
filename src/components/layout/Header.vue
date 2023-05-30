<template>
  <div class="header-warp">
    <div class="header_screen-name">
      <div class="title">{{ meta.title }}</div>
      <div class="description">{{ route.meta.description }}</div>
    </div>
    <div class="header_select">
      <select name="" id="" class="select-nation">
        <option value="">Vietnamese</option>
        <option value="">English(US)</option>
      </select>
    </div>
  </div>
</template>

<script setup>
import { toRef } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const meta = toRef(route, "meta");
</script>

<style lang="scss" scoped>
.header-warp {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 32px;
  .header_screen-name {
    .title {
      font-size: 18px;
      font-weight: 600;
      color: #615c5c;
      line-height: 32px;
    }
    .description {
      font-size: 12px;
      font-weight: 400;
      color: #4d4d4d;
    }
  }
  .header_select {
    max-width: 300px;
    width: 100%;

    .select-nation {
      width: 100%;
      padding: 5px;
      border: 1px solid #d1caca;
      border-radius: 4px;
      color: #4d4d4d;
      font-size: 12px;
      &:focus-within {
        outline: none;
      }
    }
  }
}
</style>