<template>
  <div
    class="p-2"
    :class="[
      active ? 'bg-indigo-500 text-white' : 'bg-gray-100 hover:bg-gray-200',
      'rounded-md mt-1'
    ]"
  >
    <a :href="entry.link">
      <div class="flex">
        <div class="flex-none w-4">
          <i :class="['fa', entry.icon]" />
        </div>
        <div class="flex-grow text-left pl-4">
          <span class="text-sm font-medium">
            {{ entry.name }}
          </span>
        </div>
        <div v-if="active" class="flex-none w-4">
          <i class="fa fa-chevron-right" />
        </div>
      </div>
    </a>
  </div>
</template>

<script>
export default {
  name: "NavButton",
  props: { entry: Object, active: Boolean },
  setup() {
    return {};
  }
};
</script>

<style></style>
