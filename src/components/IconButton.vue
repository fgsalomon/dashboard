<template>
  <template v-if="!showLoadingButton">
    <button
      @click="onClick"
      class="rounded-md p-2 focus-ring-0"
      :class="['bg-' + color + '-500', 'text-' + textColor]"
    >
      <i class="fa" :class="['fa-' + icon]" />
      {{ text }}
    </button>
  </template>
  <template v-else>
    <button
      disabled
      class="rounded-md p-2 focus-ring-0"
      :class="['bg-' + color + '-500', 'text-' + textColor]"
    >
      <i class="fa fa-circle-notch animate-spin" />
      {{ loadingText }}
    </button>
  </template>
</template>

<script lang="ts">
import { ref, computed, defineComponent } from "vue";
export default defineComponent({
  name: "IconButton",
  props: {
    spinner: { required: false, default: false, type: Boolean },
    loadingText: { required: false, type: String, default: "Loading ..." },
    icon: { required: true, type: String },
    text: { required: true, type: String },
    color: String,
    textColor: String
  },
  setup(props) {
    const loading = ref(false);
    const showLoadingButton = computed(() => props.spinner && loading.value);
    const onClick = () => {
      loading.value = true;
    };
    const stopLoading = () => {
      loading.value = false;
    };

    return { onClick, loading, showLoadingButton, stopLoading };
  }
});
</script>

<style></style>
