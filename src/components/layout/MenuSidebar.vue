<template>
  <div class="nav-bar">
    <nav class="nav-bar_warp">
      <router-link to="/" class="nav-bar_icon">
        <img src="../../assets/new.svg" class="logo-icon" />
      </router-link>
      <div>
        <router-link
          :to="item.path"
          class="nav-bar_btn nav-bar_reporting"
          v-for="item in listItemSizeBar"
          :key="item.screenName"
        >
          <img :src="item.iconName" alt="" class="nav-bar_icon" />
          <span class="nav-bar_text">{{ item.screenName }}</span>
        </router-link>
      </div>
    </nav>
  </div>
</template>

<script setup>
import { listItemSizeBar } from "../../resources";
</script>

<style lang="scss" scoped>
.nav-bar {
  width: 200px;
  padding: 16px;
  background-color: #f1f1f1;
  border-right: 1px solid #d1caca;
  &_warp {
    .nav-bar_icon {
      .logo-icon {
        padding-left: 12px;
        width: 32px;
      }
    }
    .nav-bar_btn {
      display: flex;
      justify-content: flex-start;
      padding: 12px;
      margin-bottom: 4px;
      border-radius: 6px;
      gap: 12px;
      color: #2b5254;
      text-decoration: none;
      font-size: 12px;
      font-weight: 500;
      &:nth-child(1) {
        margin-top: 24px;
      }
      &:nth-child(7) {
        margin-bottom: 56px;
      }
      &:hover {
        background: #becccc;
        color: #601eb6;
      }
      &:focus-within {
        background: #becccc;
        color: #601eb6;
      }
      .nav-bar_icon {
        opacity: 0.5;
        height: 14px;
        width: 14px;
      }
    }
  }
}
</style>