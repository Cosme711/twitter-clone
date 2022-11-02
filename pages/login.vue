<script lang="ts" setup>
import { signInWithEmailAndPassword } from "firebase/auth";
import { useUserStore } from "~~/store/user";

const userStore = useUserStore();
const login = async () => {
  const { $firebaseAuth } = useNuxtApp();

  const router = useRouter();
  try {
    await signInWithEmailAndPassword($firebaseAuth, "test@test.com", "123456");
    userStore.user = {
      name: "Cosme Gressier",
    };
    router.push("/");
  } catch (e) {
    console.log(e);
  }
};
</script>

<template>
  <p class="cursor-pointer" @click="login">Login</p>
</template>
