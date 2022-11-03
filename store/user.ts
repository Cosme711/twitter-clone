import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
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
    checkIfAlreadyConnect() {
      const { $firebaseAuth } = useNuxtApp();

      onAuthStateChanged($firebaseAuth, (user) => {
        if (user) {
          this.getFromDatabase(user.uid);
          this.redirectToHomepage();
        } else {
          console.log("connect please");
        }
      });
    },
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
        const { $firebaseAuth } = useNuxtApp();
        const response = await signInWithEmailAndPassword(
          $firebaseAuth,
          email,
          password
        );
        this.getFromDatabase(response.user.uid);
        this.redirectToHomepage();
      } catch (e) {
        console.log(e);
      }
    },
    getFromDatabase(uid: string) {
      const { $firebaseDb } = useNuxtApp();

      const docRef = doc($firebaseDb, "users", uid);
      getDoc(docRef).then((docSnap) => {
        this.user = docSnap.data();
        this.redirectToHomepage();
      });
    },
    redirectToHomepage() {
      const router = useRouter();
      router.push("/");
    },
  },
  getters: {
    isLoggedIn: (state) => {
      return !!state.user;
    },
  },
});
