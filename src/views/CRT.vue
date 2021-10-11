<template>
  <div id="CRT">
    Below are four problems that vary in difficulty.<br /><br />

    <v-form v-model="isValid">
      A bat and a ball cost $1.10 in total. The bat costs $1.00 more than the
      ball.<br />
      How much does the ball cost?
      <v-row cols="2">
        <v-col>
          <v-text-field
            v-model="crt1"
            :rules="[(v) => v.length >= 1 || 'Please answer this question.']"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          cents
        </v-col>
      </v-row>
      <br /><br />

      If it takes 5 machines 5 minutes to make 5 widgets, how long would it take
      100 machines to make 100 widgets? <br />
      <v-row cols="2">
        <v-col>
          <v-text-field
            v-model="crt2"
            :rules="[(v) => v.length >= 1 || 'Please answer this question.']"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          minutes
        </v-col> </v-row
      ><br /><br />

      In a lake, there is a patch of lily pads. Every day, the patch doubles in
      size.<br />
      If it takes 48 days for the patch to cover the entire lake, how long would
      it take for the patch to cover half of the lake?<br />

      <v-row cols="2">
        <v-col>
          <v-text-field
            v-model="crt3"
            :rules="[(v) => v.length >= 1 || 'Please answer this question.']"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          days
        </v-col>
      </v-row>
      <br /><br />

      When you are in a race and overtake the person who is currently in the
      second place, what rank will you be in?<br />
      <v-row cols="2">
        <v-col>
          <v-text-field
            v-model="crt4"
            :rules="[(v) => v.length >= 1 || 'Please answer this question.']"
            required
          ></v-text-field>
        </v-col>
        <v-col>
          place
        </v-col>
      </v-row>
      <br /><br />

      <v-btn
        color="primary"
        elevation="3"
        :disabled="!isValid"
        @click="
          saveResponses();
          $router.push('rgpts');
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
      crt1: "",
      crt2: "",
      crt3: "",
      crt4: "",
      isValid: false,
    };
  },
  methods: {
    saveResponses: function() {
      let response = {
        crt1: this.crt1,
        crt2: this.crt2,
        crt3: this.crt3,
        crt4: this.crt4,
      };
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
