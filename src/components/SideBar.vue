<template>
  <div>
    <div class="w-9/12">
      <img class="w-1/2 mx-auto" src="@/assets/logo.png" />
    </div>
    <div class="flex-column content-center w-9/12">
      <ul>
        <li class="text-left uppercase text-sm text-medium mb-4">
          {{ $t("you") }}
        </li>
        <ul class="mb-4">
          <li v-for="entry in entries" :key="entry.key">
            <nav-button
              @click="setActive(entry.key)"
              :entry="entry"
              :active="activeSection === entry.key"
            />
          </li>
        </ul>
        <li class="text-left uppercase text-sm text-medium mb-4">
          {{ $t("your_company") }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { useI18n } from "vue-i18n";
import NavButton from "./NavButton.vue";
export default {
  name: "SideBar",
  components: {
    NavButton
  },

  setup() {
    const { t } = useI18n({ useScope: "global" });
    const entries = ref([
      { name: t("home"), key: "home", link: "/dashboard", icon: "fa-home" },
      {
        name: t("my_profile"),
        key: "profile",
        link: "/profile",
        icon: "fa-user"
      },
      {
        name: t("absences"),
        key: "absences",
        link: "/absences",
        icon: "fa-umbrella-beach"
      },
      {
        name: t("my_documents"),
        key: "documents",
        link: "/documents",
        icon: "fa-folder"
      },
      {
        name: t("clocking_in"),
        key: "clocking",
        link: "/clocking",
        icon: "fa-clock"
      },
      {
        name: t("my_tasks"),
        key: "tasks",
        link: "/tasks",
        icon: "fa-check-circle"
      }
    ]);
    const activeSection = ref("home");
    const setActive = (key: string) => {
      activeSection.value = key;
    };
    return { entries, activeSection, setActive };
  }
};
</script>

<style></style>
