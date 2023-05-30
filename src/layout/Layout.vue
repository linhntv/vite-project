<template>
  <div class="layout-content">
    <div class="menu-sidebar">
      <component :is="MenuSidebar" />
    </div>
    <div class="header-content">
      <component :is="Header" />
      <router-view />
    </div>
  </div>
</template>

<script setup>
import Header from "../components/layout/Header.vue";
import MenuSidebar from "../components/layout/MenuSidebar.vue";
</script>

<style lang="scss" scoped>
.layout-content {
  display: flex;

  .header-content {
    flex: 4;
    display: flex;
    flex-direction: column;
    .header {
      height: 80px;
      border-bottom: 1px solid #ebe5e5;
    }
    .content {
      background: hotpink;
    }
  }
}
</style>