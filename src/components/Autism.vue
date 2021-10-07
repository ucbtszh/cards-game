<template>
  <div id="AQ">
    
    Please indicate how much you agree with each of the below statements.<br />

    <v-form v-model="isValid">
      <Scale
        v-for="(q, index) in items"
        :key="index"
        :name="q.item"
        @response_clicked="trackResponse"
      />
      <v-btn
        color="primary"
        elevation="3"
        :disabled="!isValid"
        @click="$emit('AQ_done'); saveResponses()"
      >
        NEXT
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import items from "@/assets/AQ.json";

import Scale from "./FourPointScale.vue";

import { writeResponseData } from "../firebaseConfig";

export default {
  components: {
    Scale
  },
  data() {
    return {
      items: items,
      isValid: true,
      AUTResponse: {},
    };
  },
  methods: {
    trackResponse: function(response) {
      this.AUTResponse[response[0]] = response[2]
    },
    saveResponses: function() {
      writeResponseData(this.$uuid, 'AQ', this.AUTResponse)
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#AQ {
  margin-top: 5%;
}
</style>
