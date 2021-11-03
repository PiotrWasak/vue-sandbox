<template>
  <v-app>
    <sandbox-component></sandbox-component>
  </v-app>
</template>

<script>


import SandboxComponent from "@/components/SandboxComponent";

export default {
  name: 'App',

  components: {
    SandboxComponent
  },

  data: () => ({
    //
  }),
};
</script>
