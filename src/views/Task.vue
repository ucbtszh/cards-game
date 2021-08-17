<template>
  <div id="task">
    <v-progress-linear
      :value="rounds"
      color="amber"
      height="25px"
      style="margin-top:0; margin-bottom:50px; display:inline-block;"
      >Round {{ trialIndex + 1 }} of {{ trials.length }}</v-progress-linear
    >

    <div id="taskloop" v-for="(trial, index) in trials" :key="index">
      <div v-show="index === trialIndex">
        <div id="cards" v-show="showCards">
          <Cards
            :index="index"
            :n_red="trial.n_red"
            :trial="false"
            :timeTilPick="1100"
            :report_duration="duration"
            :durationx="3"
            @card_pick="savePick"
            @card_pick_colour="savePickColour"
            @done="toReport"
          />
        </div>
        <div id="report" v-show="showReport">
          <Report
            :index="index"
            :outcome="trial.outcome"
            :timeTilOutcome="1000"
            @report="saveResponse"
            @rt_report="saveRTreport"
            @honesty_rating="saveHonestyRating"
            @rt_honesty="saveRThonesty"
            @catch_rating="saveCatchRating"
            @rt_catch="saveRTcatch"
            @result="saveResult"
            @ratingdone="next"
          />
        </div>
      </div>
    </div>
    <div v-show="this.trialIndex === trials.length" style="text-align:left;">
      You reached the end of the game. <br /><br />
      You won {{ wins }} and lost {{ losses }} trials. Hence, your total score
      is {{ points }} points.<br />
      This means your bonus payment will be £ {{ bonus }}.<br /><br />

      In the last part of this study, you will be asked questions about yourself.<br />
      Please click "Continue" below to proceed.<br /><br /><br />
      <v-btn
        color="primary"
        elevation="3"
        @click="
          saveAll();
          $router.push('survey');
        "
        ><b>Continue</b></v-btn
      >
    </div>
  </div>
</template>

<script>
import trials from "@/assets/trials_pilot2_ROI_pseudorand2.json";

import Cards from "@/components/Cards.vue";
import Report from "@/components/Report.vue";

import { writeResponseData } from "../firebaseConfig";

export default {
  components: {
    Cards,
    Report,
  },
  data() {
    return {
      trials: trials,
      n_red: trials.map(({ n_red }) => n_red),
      outcomes: trials.map(({ outcome }) => outcome),
      index: 0,
      trialIndex: 0,
      duration: 2000,
      showCards: true,
      showReport: false,
      start: 0,
      randomPick: [],
      randomPickColour: [],
      reportColour: [],
      RTreport: [],
      honestyRating: [],
      RThonesty: [],
      catchRating: [],
      RTcatch: [],
      results: [],
    };
  },
  computed: {
    rounds: function() {
      return ((this.trialIndex + 1) * 100) / this.trials.length;
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
    toReport: function() {
      this.showCards = false;
      this.showReport = true;
      this.start = Date.now();
    },
    savePick: function(v) {
      this.randomPick.push(v);
      // console.log("random card pick:", this.randomPick.slice(0,trials.length))
    },
    savePickColour: function(v) {
      this.randomPickColour.push(v);
      // console.log("random pick colour:", this.randomPickColour.slice(0,trials.length))
    },
    saveResponse: function(v) {
      this.reportColour.push(v);
      // console.log("reported colour", this.reportColour)
    },
    saveRTreport: function(v) {
      this.RTreport.push(v);
      // console.log("PARENT - RT report", this.RThonesty)
    },
    saveHonestyRating: function(v) {
      this.honestyRating.push(v);
      // console.log("PARENT - honesty rating", this.honestyRating)
    },
    saveRThonesty: function(v) {
      this.RThonesty.push(v);
      // console.log("PARENT - RT honesty", this.RThonesty)
    },
    saveCatchRating: function(v) {
      this.catchRating.push(v);
      // console.log("PARENT - catch rating", this.catchRating)
    },
    saveRTcatch: function(v) {
      this.RTcatch.push(v);
      // console.log("PARENT - RT catch", this.RTcatch)
    },
    saveResult: function(v) {
      this.results.push(v);
    },
    next: function() {
      this.duration = Date.now() - this.start;
      this.index++;
      this.trialIndex++;
      this.showCards = true;
      this.showReport = false;
    },
    saveAll: function() {
      let responses = {
        randomPick: this.randomPick.slice(0, this.trials.length),
        randomPickColour: this.randomPickColour.slice(0, this.trials.length),
        reportColour: this.reportColour,
        RTreport: this.RTreport,
        honestyRating: this.honestyRating,
        RThonesty: this.RThonesty,
        catchRating: this.catchRating,
        RTcatch: this.RTcatch,
        results: this.results,
        bonusAmountGBP: this.bonus,
      };
      writeResponseData(this.$uuid, "main_responses", responses);
    },
  },
};
</script>

<style scoped>
#task {
  text-align: center;
  overflow: hidden;
}
</style>
