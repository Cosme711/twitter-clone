import { defineNuxtPlugin } from "#app";

import { FirebaseApp, initializeApp } from "firebase/app";
import { Auth, getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

declare module "#app" {
  interface NuxtApp {
    $firebaseApp: FirebaseApp;
    $firebaseAuth: Auth;
    $firebaseDb: any;
  }
}
export default defineNuxtPlugin((nuxtApp) => {
  const runtimeConfig = useRuntimeConfig();

  const firebaseConfig = {
    apiKey: runtimeConfig.public.firebaseApiKey,
    authDomain: runtimeConfig.public.firebaseAuthDomain,
    projectId: runtimeConfig.public.firebaseProjectId,
    storageBucket: runtimeConfig.public.firebaseStorageBucket,
    messagingSenderId: runtimeConfig.public.firebaseMessagingSenderId,
    appId: runtimeConfig.public.firebaseAppId,
    measurementId: runtimeConfig.public.firebaseMeasurementId,
  };

  const app = initializeApp(firebaseConfig);

  nuxtApp.provide("firebaseApp", app);
  nuxtApp.provide("firebaseAuth", getAuth(app));
  nuxtApp.provide("firebaseDb", getFirestore(app));
});
