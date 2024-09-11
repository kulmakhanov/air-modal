<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-spacer></v-spacer>

      <v-btn
        href="https://github.com/vuetifyjs/vuetify/releases/latest"
        target="_blank"
        text
      >
        <span class="mr-2">Latest Release</span>
        <v-icon>mdi-open-in-new</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-row class="d-flex mt-3">
        <v-col cols="12" md="4" class="d-flex justify-center">
          <v-btn @click="openDialog('modal')">{{ "Стать резидентом" }}</v-btn>
        </v-col>
      </v-row>
      <FormModal
        v-if="dialogs.modal"
        v-model="dialogs.modal"
        :daData="daData"
        @sendRequest="sendRequest"
      />
    </v-main>
  </v-app>
</template>

<script>
import FormModal from "./components/FormModal"

export default {
  name: 'App',
  components: { FormModal, },
  data: () => ({
    dialogs: {
      modal: false,
    },
    daData: null,
  }),
  methods: {
    openDialog(...keys) { 
      Object.keys(this.dialogs).forEach((x) => { 
        this.dialogs[x] = !!~keys.indexOf(x) 
      }) 
    },
    sendRequest(item) {
      console.log("data", item)
    },
  }
};
</script>
