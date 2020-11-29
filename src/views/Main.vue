<template>
  <div
    class="bg-gray-100 dark:bg-black flex pt-4 pl-4 md:pt-8 md:pl-20 min-h-screen"
  >
    <SideBar class="bg-gray-100 md:w-1/5 w-2/5" />
    <div class="md:w-4/5 w-3/5 pr-4 md:pr-20">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import SideBar from "../components/SideBar.vue";
export default {
  components: {
    SideBar
  }
};
</script>

<style></style>
