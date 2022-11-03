import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  getAuth,
} from "firebase/auth";
import { setDoc, doc, getDoc } from "firebase/firestore";
import { defineStore } from "pinia";
import { IUser } from "./types";

export const useUserStore = defineStore({
  id: "userStore",
  state: () => ({
    user: null as IUser | null,
  }),
  actions: {
    async register(user: IUser, password: string) {
      try {
        const { $firebaseAuth, $firebaseDb } = useNuxtApp();
        const response = await createUserWithEmailAndPassword(
          $firebaseAuth,
          user.email,
          password
        );
        await setDoc(doc($firebaseDb, "users", response.user.uid), {
          firstName: user.firstName,
          lastName: user.lastName,
          email: user.email,
          displayName: user.firstName + " " + user.lastName,
        });
      } catch (e) {
        console.log(e);
      }
    },
    async login(email: string, password: string) {
      try {
        const { $firebaseAuth, $firebaseDb } = useNuxtApp();
        const response = await signInWithEmailAndPassword(
          $firebaseAuth,
          email,
          password
        );
        const docRef = doc($firebaseDb, "users", response.user.uid);
        const docSnap = await getDoc(docRef);
        this.user = docSnap.data();
      } catch (e) {
        console.log(e);
      }
    },
  },
  getters: {
    isLoggedIn: (state) => {
      return !!state.user;
    },
  },
});
