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
      <b>You finished the last game.</b> <br /><br />

      Next is the last part of this study, in which you will be asked questions about yourself.<br />
      Please click "Continue" below to proceed.<br /><br />
      <v-btn
        color="primary"
        elevation="3"
        @click="
          saveAll();
          $router.push('equo');
        "
        ><b>Continue</b></v-btn
      >
    </div>
  </div>
</template>

<script>
import t1_3 from "@/assets/trials_batch5_0_3.json";
import t2_3 from "@/assets/trials_batch5_1_3.json";
import t3_3 from "@/assets/trials_batch5_2_3.json";
import t4_3 from "@/assets/trials_batch5_3_3.json";
import t5_3 from "@/assets/trials_batch5_4_3.json";
import t6_3 from "@/assets/trials_batch5_5_3.json";
import t7_3 from "@/assets/trials_batch5_6_3.json";
import t8_3 from "@/assets/trials_batch5_7_3.json";
import t9_3 from "@/assets/trials_batch5_8_3.json";
import t10_3 from "@/assets/trials_batch5_9_3.json";
import t11_3 from "@/assets/trials_batch5_10_3.json";
import t12_3 from "@/assets/trials_batch5_11_3.json";
import t13_3 from "@/assets/trials_batch5_12_3.json";
import t14_3 from "@/assets/trials_batch5_13_3.json";
import t15_3 from "@/assets/trials_batch5_14_3.json";
import t16_3 from "@/assets/trials_batch5_15_3.json";
import t17_3 from "@/assets/trials_batch5_16_3.json";
import t18_3 from "@/assets/trials_batch5_17_3.json";
import t19_3 from "@/assets/trials_batch5_18_3.json";
import t20_3 from "@/assets/trials_batch5_19_3.json";

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
        finishTime: performance.now()
      };
      writeResponseData(this.$uuid, "game_block3", responses);
    },
  },
  created() {
      this.trials =
        this.$condition == "t1"
        ? t1_3
        : this.$condition == "t2"
        ? t2_3
        : this.$condition == "t3"
        ? t3_3
        : this.$condition == "t4"
        ? t4_3
        : this.$condition == "t5"
        ? t5_3
        : this.$condition == "t6"
        ? t6_3
        : this.$condition == "t7"
        ? t7_3
        : this.$condition == "t8"
        ? t8_3
        : this.$condition == "t9"
        ? t9_3
        : this.$condition == "t10"
        ? t10_3
        : this.$condition == "t11"
        ? t11_3
        : this.$condition == "t12"
        ? t12_3
        : this.$condition == "t13"
        ? t13_3
        : this.$condition == "t14"
        ? t14_3
        : this.$condition == "t15"
        ? t15_3
        : this.$condition == "t16"
        ? t16_3
        : this.$condition == "t17"
        ? t17_3
        : this.$condition == "t18"
        ? t18_3
        : this.$condition == "t19"
        ? t19_3
        : this.$condition == "t20"
        ? t20_3
        : t1_3
  },
};
</script>

<style scoped>
#task {
  text-align: center;
  overflow: hidden;
}
</style>
