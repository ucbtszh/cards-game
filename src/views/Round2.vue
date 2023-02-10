<template>
  <div id="task">
    <v-progress-linear
      :value="rounds"
      color="amber"
      height="25px"
      style="margin-top:0; margin-bottom:50px; display:inline-block;"
      v-if="index < 30"
      >Trial {{ trialIndex + 1 }} of {{ trials.length }}</v-progress-linear
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
      <b>You finished the second game.</b> <br /><br /><br />

      <!-- Please click "Continue" below to proceed to the last part of this
      study.<br /><br /> -->
      <v-btn
        color="primary"
        elevation="3"
        @click="
          saveAll();
          route();
        "
        ><b>Continue</b></v-btn
      >
    </div>
  </div>
</template>

<script>
import Vue from "vue";

import t1_2 from "@/assets/trials_batch2_0_2.json";
import t2_2 from "@/assets/trials_batch2_1_2.json";
// import t3_2 from "@/assets/trials_batch2_2_2.json";
// import t4_2 from "@/assets/trials_batch2_3_2.json";
// import t5_2 from "@/assets/trials_batch2_4_2.json";
import t6_2 from "@/assets/trials_batch2_5_2.json";
// import t7_2 from "@/assets/trials_batch2_6_2.json";
import t8_2 from "@/assets/trials_batch2_7_2.json";
// import t9_2 from "@/assets/trials_batch2_8_2.json";
// import t10_2 from "@/assets/trials_batch2_9_2.json";

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
      return (5 * this.points).toFixed(2);
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
    route: function() {
      Vue.prototype.$bonus = parseFloat(this.$bonus_r1) + parseFloat(this.bonus);

      if (this.$bonus > 0) {
        this.$router.push("bonus");
      } else {
        this.$router.push("survey");
      }
    },
    saveAll: function() {
      let responses = {
        nRed: this.trials.map(({ n_red }) => n_red),
        outcome: this.trials.map(({ outcome }) => outcome),
        ppLied: this.trials.map(({ lied }) => lied),
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
        finishTime: performance.now(),
      };
      writeResponseData(this.$uuid, "game_block2", responses);
    },
  },
  created() {
    this.trials =
      this.$condition == "t1"
        ? t1_2
        : this.$condition == "t2"
        ? t2_2
        : this.$condition == "t3"
        ? t6_2
        : this.$condition == "t4"
        ? t8_2
        : // : this.$condition == "t5"
          // ? t5_2
          // : this.$condition == "t6"
          // ? t6_2
          // : this.$condition == "t7"
          // ? t7_2
          // : this.$condition == "t8"
          // ? t8_2
          // : this.$condition == "t9"
          // ? t9_2
          // : this.$condition == "t10"
          // ? t10_2
          t1_2;
  },
};
</script>

<style scoped>
#task {
  text-align: center;
  overflow: hidden;
}
</style>
