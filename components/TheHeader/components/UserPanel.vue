<script lang="ts" setup>
import { Ref } from "vue";
import { useUserStore } from "~/store/user";

const optionsIsOpen: Ref<boolean> = ref(false);
</script>

<template>
  <div class="relative select-none">
    <div
      class="flex items-center font-medium text-sm cursor-pointer"
      @click="optionsIsOpen = !optionsIsOpen"
    >
      <img
        :src="useUserStore().user.pictureProfileUrl"
        alt="Fake Profile Picture"
        class="rounded-lg w-7 h-7"
      />
      <p class="ml-3">{{ useUserStore().user.displayName }}</p>
      <BaseIconBase
        name="Arrow Dropdown"
        size="w-7 h-7"
        class="ml-1 duration-200"
        :class="optionsIsOpen ? '' : 'rotate-180'"
      >
        <AssetsIconsArrowDropDownIcon />
      </BaseIconBase>
    </div>
    <TheHeaderComponentsUserPanelOptions v-if="optionsIsOpen" />
  </div>
</template>
