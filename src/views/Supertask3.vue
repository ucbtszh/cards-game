<template>
  <div id="task">
    <v-progress-linear
      :value="rounds"
      color="amber"
      height="25px"
      style="margin-top:0; margin-bottom:50px; display:inline-block;"
      v-if="trialIndex < nTrials"
      >Trial {{ trialIndex + 1 }} of {{ nTrials }}</v-progress-linear
    >
    <div id="taskloop" v-for="(trial, index) in nTrials" :key="index">
      <div v-show="index === trialIndex">
        <Trial
          :trial="index"
          :practice="false"
          :charm="$charm2"
          :blur="false"
          @choice="save_choice"
          @outcome="save_outcome"
          @next="
            index++;
            trialIndex++;
          "
        />
      </div>
    </div>
    <div v-show="trialIndex === nTrials" style="text-align:left;">
      <b>You finished the third block.</b> <br /><br />
      Click 'Continue' below to start the last block.
      <br /><br />
      <v-btn
        color="primary"
        elevation="3"
        @click="
          saveAll();
          $router.push('block4');
        "
        ><b>Continue</b></v-btn
      >
    </div>
  </div>
</template>

<script>
import Trial from "../components/Trial.vue";

import { writeResponseData } from "../firebaseConfig";

export default {
  components: {
    Trial,
  },
  data() {
    return {
      index: 0,
      trialIndex: 0,
      nTrials: 5,
      choices: [],
      results: [],
    };
  },
  computed: {
    rounds: function() {
      return ((this.trialIndex + 1) * 100) / this.nTrials;
    },
    wins: function() {
      return this.results.filter((i) => i === "win").length;
    },
    losses: function() {
      return this.results.filter((i) => i === "loss").length;
    },
    points: function() {
      return this.wins - this.losses;
    },
    bonus: function() {
      if (this.points <= 0) {
        return 0;
      }
      return (0.05 * this.points).toFixed(2);
    },
  },
  methods: {
    save_choice: function(v) {
      // console.log("choice", v);
      this.choices.push(v);
    },
    save_outcome: function(v) {
      // console.log("outcome", v);
      this.results.push(v);
    },
    saveAll: function() {
      let responses = {
        choice_pos: this.choices,
        outcome: this.results,
      };
      //   console.log(responses);
      writeResponseData(this.$uuid, "block3", responses);
    },
  },
  mounted() {
    // prevent back navigation
    history.pushState(null, null, location.href);
    window.onpopstate = function() {
      history.go(1);
    };
  },
};
</script>

<style scoped>
#task {
  text-align: center;
  overflow: hidden;
}
</style>
