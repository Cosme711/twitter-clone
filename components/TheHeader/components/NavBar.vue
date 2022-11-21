<template>
  <nav class="flex text-center space-x-20 text-gray-light font-semibold h-full">
    <div
      v-for="route in ERouteName"
      :key="route"
      class="cursor-pointer flex items-center border-b-2"
      :class="
        routeName === route ? 'text-blue border-blue' : 'border-transparent'
      "
      @click="goTo(route)"
    >
      <p>{{ route }}</p>
    </div>
  </nav>
</template>

<script lang="ts" setup>
import { ERouteName } from "../types";

const router = useRouter();

const routeData = useRoute();
const routeName = computed(() => {
  return routeData.meta.name;
});

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
