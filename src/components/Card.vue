<template>
  <div
    class="rounded-md shadow-md bg-white w-100 mb-2 divide-y divide-gray-200"
  >
    <div
      class="border-t-4  uppercase font-bold text-xs py-4"
      :class="['border-' + color + '-600']"
    >
      <h1>{{ header }}</h1>
    </div>
    <div>
      <slot name="body">
        <div class="p-4">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae ea
          repudiandae eius similique quidem, et exercitationem impedit!
          Aspernatur ad asperiores architecto optio non, suscipit provident
          quisquam modi, corrupti pariatur officiis?
        </div>
      </slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "Card",
  props: {
    header: String,
    color: { type: String, default: "red" }
  },
  setup() {
    return {};
  }
};
</script>

<style></style>
