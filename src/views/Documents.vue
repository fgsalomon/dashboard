<template>
  <div class="w-100 rounded-md shadow-md min-h-screen bg-white">
    <div class="bg-indigo-500 text-white rounded-t-md font-semibold">
      <div class="py-4 justify-end border-b border-indigo-600 relative">
        <div class="mx-auto ">User</div>
        <div class="float-right position-absolute z-10 top-2">
          <button @click="onUploadDocumentsClicked">
            {{ $t("upload_documents") }}
          </button>
        </div>
      </div>
      <div class="py-4">{{ $t("my_documents") }}</div>
    </div>
    <modal ref="uploadDocumentsModal" />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Modal from "../components/Modal.vue";
export default {
  components: {
    Modal
  },

  setup() {
    const uploadDocumentsModal = ref(Modal);
    const onUploadDocumentsClicked = () => {
      uploadDocumentsModal.value.show();
    };
    return { onUploadDocumentsClicked, uploadDocumentsModal };
  }
};
</script>

<style></style>
