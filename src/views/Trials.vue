<template>
  <div id="task">
    <div id="taskloop" v-for="(trial, index) in trials" :key="index">
      <div v-show="index === trialIndex">
        <div id="cards" v-show="showCards">
          <Cards
            :index="index"
            :n_red="trial.n_red"
            :trial="true"
            :timeTilPick="3000"
            :report_duration="duration"
            :durationx="2"
            @card_pick="savePick"
            @card_pick_colour="savePickColour"
            @done="toReport"
          />
        </div>
        <div id="report" v-show="showReport">
          <Report
            :index="index"
            :outcome="trial.outcome"
            :timeTilOutcome="2000"
            @report="saveResponse"
            @rt_report="saveRTreport"
            @honesty_rating="saveHonestyRating"
            @rt_honesty="saveRThonesty"
            @result="saveResult"
            @ratingdone="next"
          />
        </div>
      </div>
    </div>
    <div v-show="this.trialIndex === trials.length" style="text-align:left;">
      These were the test trials. <br /><br />
      Click "Start" below to start the first actual game.<br />
      From now on, any points you obtain will count toward your bonus
        payment.<br /><br /><br />
      <v-btn
        color="primary"
        elevation="3"
        @click="
          saveAll();
          findPlayer = true;
          $router.push('round2');
        "
        ><b>Start</b></v-btn
      >
    </div>
  </div>
</template>

<script>
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
      trials: [
        {
          n_red: 1,
          outcome: -1,
          random_choice: 3, // win
        },
        {
          n_red: 6,
          outcome: -1,
          random_choice: 5, // tie
        },
        {
          n_red: 4,
          outcome: 1,
          random_choice: 1, // lose
        },
      ],
      index: 0,
      trialIndex: 0,
      duration: 2000,
      showCards: true,
      showReport: false,
      start: 0,
      findPlayer: false,
      randomPick: [],
      randomPickColour: [],
      reportColour: [],
      RTreport: [],
      honestyRating: [],
      RThonesty: [],
      results: [],
    };
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
        results: this.results,
        finishTime: performance.now(),
      };
      writeResponseData(this.$uuid, "trial_responses", responses);
    }
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>

<style scoped>
#task {
  text-align: center;
}
</style>
