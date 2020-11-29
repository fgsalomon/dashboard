<template>
  <div
    v-if="isVisible"
    class="fixed z-10 w-full h-full top-0 left-0 bg-gray-600 bg-opacity-40 overflow-auto"
  >
    <div class="bg-white shadow-md rounded-md w-2/5 mx-auto mt-32">
      <div>
        <span @click="close" class="float-right mr-2">
          <i class="fa fa-times" />
        </span>
      </div>
      <div class="h-20 mt-4">
        Body
      </div>
      <div class="bg-gray-200 rounded-b-md border-t border-gray-300">
        Footer
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { ref, defineComponent } from "vue";
export default defineComponent({
  name: "Modal",
  setup() {
    const isVisible = ref(false);
    const show = () => {
      isVisible.value = true;
    };
    const close = () => {
      isVisible.value = false;
    };
    return { show, isVisible, close };
  }
});
</script>

<style></style>
