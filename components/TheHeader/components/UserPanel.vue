<script lang="ts" setup>
import { useUserStore } from "~/store/user";
</script>

<template>
  <div class="flex items-center space-x-3 font-medium text-sm">
    <img
      src="../assets/fake_profile_picture.jpg"
      alt="Fake Profile Picture"
      class="rounded-lg w-7 h-7"
    />
    <p>{{ useUserStore().user.name }}</p>
  </div>
</template>
