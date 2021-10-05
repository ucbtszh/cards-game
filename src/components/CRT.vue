<template>
  <div id="CRT">
    Below are four problems that vary in difficulty.<br /><br />

    <v-form v-model="isValid">
      A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the
      ball.<br />
      How much does the ball cost?
      <v-text-field
        v-model="crt1"
        :rules="[(v) => v.length >= 1 || 'Please answer this question.']"
        required
      ></v-text-field>
      cents<br /><br />

      If it takes 5 machines 5 minutes to make 5 widgets, how long would it take
      100 machines to make 100 widgets? <br />
      <v-text-field
        v-model="crt2"
        :rules="[(v) => v.length >= 1 || 'Please answer this question.']"
        required
      ></v-text-field>
      minutes<br /><br />

      In a lake, there is a patch of lily pads. Every day, the patch doubles in
      size.<br />
      If it takes 48 days for the patch to cover the entire lake, how long would
      it take for the patch to cover half of the lake?<br />

      <v-text-field
        v-model="crt3"
        :rules="[(v) => v.length >= 1 || 'Please answer this question.']"
        required
      ></v-text-field>
      days<br /><br />

      When you are in a race and overtake the person who is currently in the
      second place, what rank will you be in?<br />
      <v-text-field
        v-model="crt4"
        :rules="[(v) => v.length >= 1 || 'Please answer this question.']"
        required
      ></v-text-field
      ><br /><br />

      <v-btn
        color="primary"
        elevation="3"
        :disabled="!isValid"
        @click="
          $emit('CRT_done');
          saveResponses();
        "
      >
        NEXT
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { writeResponseData } from "../firebaseConfig";

export default {
  data() {
    return {
      crt1: 0,
      crt2: 0,
      crt3: 0,
      crt4: 0,
      isValid: false,
    };
  },
  methods: {
    saveResponses: function() {
      let response = {
        crt1: this.crt1,
        crt2: this.crt2,
        crt3: this.crt3,
      };
      console.log(response);
      writeResponseData(this.$uuid, "CRT", response);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>

<style scoped>
#CRT {
  margin-top: 5%;
}
</style>
