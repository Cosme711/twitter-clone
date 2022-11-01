import { defineStore } from "pinia";
import { IUser } from "./types";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    user: null as IUser | null,
  }),
  getters: {
    isLoggedIn: (state) => {
      return !!state.user;
    },
  },
});
