<template>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
    <card header="Users created" color="blue" />
    <card header="Users deleted" color="green" />
    <card header="Users with documents">
      <template v-slot:body>
        <div class="m-2">
          <icon-button
            ref="usersButton"
            @click="onUsersClicked"
            icon="user"
            color="green"
            text="View users"
            :spinner="true"
            loadingText="Loading..."
            textColor="white"
          />
        </div>
      </template>
    </card>
    <card header="Test">
      <template v-slot:body>
        <h1>Hi there</h1>
      </template>
    </card>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import Card from "../components/Card.vue";
import IconButton from "../components/IconButton.vue";
export default {
  name: "Dashboard",
  components: {
    Card,
    IconButton
  },
  setup() {
    const usersButton = ref(IconButton);
    function onUsersClicked() {
      console.log("Users clicked");
      setTimeout(() => {
        console.log("Response received");
        usersButton.value.stopLoading();
      }, 1000);
    }
    return { onUsersClicked, usersButton };
  }
};
</script>

<style></style>
