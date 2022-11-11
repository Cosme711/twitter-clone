<template>
  <nav class="flex text-center space-x-20 text-gray-light font-semibold h-full">
    <div
      v-for="route in ERouteName"
      :key="route"
      class="cursor-pointer flex items-center border-b-2"
      :class="
        routeSelected === route ? 'text-blue border-blue' : 'border-transparent'
      "
      @click="goTo(route)"
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

const router = useRouter();

const goTo = (name) => {
  if (name === ERouteName.HOME) {
    router.push("/");
  } else if (name === ERouteName.PROFILE) {
    router.push("/profile");
  } else {
    router.push("/");
  }
};
</script>
