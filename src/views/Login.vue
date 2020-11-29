<template>
  <div
    class="bg-white dark:bg-black flex pt-4 pl-4 md:pt-8 md:pl-20 min-h-screen"
  >
    <div></div>
    <div class=" bg-white shadow-2xl rounded-md w-1/3 mx-auto my-8">
      <h2 class="text-indigo-600 text-sm font-bold uppercase mt-8">
        {{ $t("sign_in") }}
      </h2>
      <h1 class="text-black text-2xl mt-4">
        {{ $t("welcome_back") }}
      </h1>
      <div class="w-10 bg-indigo-600 h-0.5 mx-auto my-4"></div>
      <div class="relative mt-8">
        <i class="fa fa-user absolute text-primarycolor text-xl" />
        <input
          type="text"
          placeholder="Username"
          class="bg-white border-b-2 pl-8"
        />
      </div>
      <div class="relative mt-8">
        <i class="fa fa-lock absolute text-primarycolor text-xl" />
        <input
          type="password"
          placeholder="Password"
          class="bg-white border-b-2 pl-8"
        />
      </div>
      <button
        @click="login"
        class="rounded mx-auto mt-8 bg-blue-500 w-10/12 text-white font-bold p-2 uppercase mb-4"
      >
        {{ $t("sign_in") }}
      </button>
    </div>
  </div>
</template>

<script lang="ts">
import { onMounted } from "vue";
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    function login() {
      console.log("Login");
      router.push("/dashboard");
    }

    onMounted(() => {
      console.log("Hellow");
    });

    return {
      login
    };
  }
};
</script>

<style></style>
