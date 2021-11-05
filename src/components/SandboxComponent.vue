<template>
  <v-container>
    <v-row>
      <v-col>
        <v-text-field v-model="firstName" label="First name"></v-text-field>
      </v-col>
      <v-col>
        <v-text-field v-model="lastName" label="Last name"></v-text-field>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-card elevation="6">
          <v-card-title>
            <v-avatar>
              <img src="https://picsum.photos/200" />
            </v-avatar>
            &nbsp;ID
          </v-card-title>
          <v-card-text
            ><p>
              <span class="text-h6">First name: </span>
              {{ firstName | capitalize }}
            </p>
            <p>
              <span class="text-h6">Last name : </span>
              {{ lastName | capitalize }}
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-btn @click="toggleAlert">Mixin alert</v-btn>
      </v-col>
      <v-col>
        <v-btn @click="toggleServicesAlert">Service Alert</v-btn>
      </v-col>
      <v-col>
        <v-btn v-color-currenda>Currenda Button</v-btn>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-if="isAlert">
        <v-alert shaped type="success">You clicked "Mixin Alert"</v-alert>
      </v-col>
    </v-row>
    <v-row>
      <v-col>
        <v-alert
          v-color-currenda
          border="right"
          dismissible
          elevation="21"
          icon="mdi-chair-rolling"
          >Currenda Color alert
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { sandboxMixin } from "@/mixins/mixin.";
import { toggleServicesAlert } from "@/services/sandboxService";

export default {
  name: "SandboxComponent",
  data() {
    return {
      firstName: "",
      lastName: "",
      isServiceAlertOpen: false,
    };
  },
  filters: {
    capitalize(text) {
      return text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();
    },
  },
  mixins: [sandboxMixin],
  methods: {
    toggleServicesAlert,
  },
};
</script>

<style scoped>
</style>