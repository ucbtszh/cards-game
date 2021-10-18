<template>
  <div id="SD3">
    
    Please indicate how much you agree with each of the following statements.<br />

    <v-form v-model="isValid">
      <FivePointScale
        v-for="(q, index) in items"
        :key="index"
        :name="q.item"
        @response_clicked="trackResponse"
      /><br /><br />
      <v-btn
        color="primary"
        elevation="3"
        :disabled="!isValid"
        @click="
        $router.push('aq');
         saveResponses()"
      >
        NEXT
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import items from "@/assets/SD3.json";

import FivePointScale from "@/components/FivePointScale";

import { writeResponseData } from "../firebaseConfig";

export default {
  components: {
    FivePointScale
  },
  data() {
    return {
      items: items,
      isValid: true,
      SDresponse: {},
    };
  },
  methods: {
    trackResponse: function(response) {
      this.SDresponse[response[0]] = response[2]
    },
    saveResponses: function() {
        // console.log("EQ WRITE DATA TO DB", this.EQResponse)
      writeResponseData(this.$uuid, 'SD3', this.SDresponse)
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#SD3 {
  margin-top: 5%;
}
</style>
