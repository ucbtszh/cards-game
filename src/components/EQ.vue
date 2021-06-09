<template>
  <div id="EQ">
    
    Please indicate how much you agree with each of the below statements.<br />
    <v-form v-model="isValid">
      <Likert
        v-for="(q, index) in items"
        :key="index"
        :name="q.item"
        @response_clicked="trackResponse"
      />
      <v-btn
        color="primary"
        elevation="3"
        :disabled="!isValid"
        @click="$emit('EQ_done'); saveResponses()"
      >
        NEXT
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import items from "@/assets/EQ.json";

import Likert from "./Likert.vue";

import { writeResponseData } from "../firebaseConfig";

export default {
  components: {
    Likert
  },
  data() {
    return {
      items: items,
      isValid: true,
      EQResponse: {},
    };
  },
  methods: {
    trackResponse: function(response) {
      this.EQResponse[response[0]] = response[2]
    },
    saveResponses: function() {
        // console.log("EQ WRITE DATA TO DB", this.EQResponse)
      writeResponseData(this.$uuid, 'EQ', this.EQResponse)
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#EQ {
  margin-top: 5%;
}
</style>
