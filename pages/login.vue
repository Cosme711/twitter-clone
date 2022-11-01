<script lang="ts" setup>
import { useUserStore } from "~~/store/user";
const router = useRouter();

const userStore = useUserStore();
const login = () => {
  userStore.user = {
    name: "Cosme Gressier",
  };
  router.push("/");
};
</script>

<template>
  <p @click="login">Login</p>
</template>
