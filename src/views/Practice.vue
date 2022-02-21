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
          :nTrials="nTrials"
          :trial="index"
          :practice="true"
          :charm="null"
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
      You completed the practice trials!<br /><br />
      Next, you will play the actual game.<br />
      Remember, the more points you collect - the more bonus you receive at the
      end of the game.<br />
      If you are not sure what to pick, go with your gut instinct.<br />
      Good luck!<br /><br />
      <v-btn
        color="primary"
        elevation="3"
        @click="
          saveAll();
          $router.push('task');
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
      nTrials: 6,
      choices: [],
      timingChoices: [],
      results: [],
      timingResults: []
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
      this.timingChoices.push(Date.now());
    },
    save_outcome: function(v) {
      // console.log("outcome", v);
      this.results.push(v);
      this.timingResults.push(Date.now());
    },
    saveAll: function() {
      let responses = {
        choice_pos: this.choices,
        outcome: this.results,
      };
      // console.log(responses);
      writeResponseData(this.$uuid, "practice", responses);
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
