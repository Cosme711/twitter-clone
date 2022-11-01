<template>
  <nav class="flex text-center space-x-20 text-gray-light font-semibold h-full">
    <div
      v-for="route in ERouteName"
      :key="route"
      class="cursor-pointer flex items-center border-b-2"
      :class="
        routeSelected === route ? 'text-blue border-blue' : 'border-transparent'
      "
      @click="routeSelected = route"
    >
      <p>{{ route }}</p>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import { ERouteName } from "../types";

const routeSelected: Ref<ERouteName> = ref(ERouteName.HOME);
</script>
