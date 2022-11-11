<script lang="ts" setup>
import { useUserStore } from "~/store/user";
</script>

<template>
  <div class="relative">
    <div class="flex items-center font-medium text-sm">
      <img
        src="../assets/fake_profile_picture.jpg"
        alt="Fake Profile Picture"
        class="rounded-lg w-7 h-7"
      />
      <p class="ml-3">{{ useUserStore().user.displayName }}</p>
      <BaseIconBase name="arrow" size="w-7 h-7" class="ml-1">
        <AssetsIconsArrowDropDownIcon />
      </BaseIconBase>
    </div>
    <TheHeaderComponentsUserPanelOptions />
  </div>
</template>
