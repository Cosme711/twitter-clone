<script setup lang="ts">
import { useUserStore } from "~/store/user";

definePageMeta({
  name: "Profile",
  middleware: "auth",
});
</script>

<template>
  <img :src="useUserStore().user.banner" alt="Profile Banner" />
</template>
