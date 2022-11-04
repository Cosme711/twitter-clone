<script lang="ts" setup>
import { ref } from "vue";
import type { Ref } from "vue";
import { useUserStore } from "~~/store/user";
import { IUser } from "@/store/types";

const userStore = useUserStore();

const registerUser: IUser = reactive({
  email: "",
  firstName: "",
  lastName: "",
});
const registerPassword: Ref<string> = ref("");

const connectEmail: Ref<string> = ref("");
const connectPassword: Ref<string> = ref("");

onMounted(() => {
  userStore.checkIfAlreadyConnect();
});
</script>

<template>
  <div>
    <input v-model="registerUser.email" type="email" placeholder="email" />
    <input
      v-model="registerUser.firstName"
      type="text"
      placeholder="first name"
    />
    <input
      v-model="registerUser.lastName"
      type="text"
      placeholder="last name"
    />
    <input v-model="registerPassword" type="text" placeholder="password" />
    <p
      class="cursor-pointer mt-2"
      @click="userStore.register(registerUser, registerPassword)"
    >
      Register
    </p>

    <input v-model="connectEmail" type="email" placeholder="email" />
    <input v-model="connectPassword" type="password" placeholder="password" />
    <p
      class="cursor-pointer mt-20"
      @click="userStore.login(connectEmail, connectPassword)"
    >
      Login
    </p>
  </div>
</template>
