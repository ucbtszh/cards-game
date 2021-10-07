<template>
  <div id="RGPTS">
    Please read each of the below statements <b>carefully.</b><br />
    They refer to thoughts and feelings you may have had about others over the
    <b>last month. </b><br /><br />

    <v-form v-model="isValid">
      <GPTSScale
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
        $router.push('sd')
          saveResponses();
        "
      >
        NEXT
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import items from "@/assets/RGPTS.json";

import GPTSScale from "@/components/GPTSScale.vue";

import { writeResponseData } from "../firebaseConfig";

export default {
  components: {
    GPTSScale,
  },
  data() {
    return {
      items: items,
      isValid: true,
      RGPTSResponse: {},
    };
  },
  methods: {
    trackResponse: function(response) {
      this.RGPTSResponse[response[0]] = response[2];
      // console.log(this.RGPTSResponse)
    },
    saveResponses: function() {
      // console.log("RGPTS WRITE DATA TO DB", this.EQResponse)
      writeResponseData(this.$uuid, "RGPTS", this.RGPTSResponse);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#RGPTS {
  margin-top: 5%;
}
</style>
