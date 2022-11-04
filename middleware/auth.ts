import { useUserStore } from "~~/store/user";

export default defineNuxtRouteMiddleware(() => {
  // isAuthenticated() is an example method verifying if an user is authenticated

  const userStore = useUserStore();
  if (!userStore.isLoggedIn) {
    return navigateTo("/login");
  }
});
