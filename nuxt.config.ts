// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
  title: "Twitter Clone",

  modules: ["@nuxtjs/tailwindcss", "@pinia/nuxt"],

  runtimeConfig: {
    public: {
      firebaseApiKey: "", // replaced by NUXT_PUBLIC_FIREBASE_API_KEY environment variable
      firebaseAuthDomain: "",
      firebaseProjectId: "",
      firebaseStorageBucket: "",
      firebaseMessagingSenderId: "",
      firebaseAppId: "",
      firebaseMeasurementId: "",
    },
  },
});
