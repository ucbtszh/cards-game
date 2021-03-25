<template>
  <div id="task">
    <div id="taskloop" v-for="(trial, index) in trials" :key="index">
      <div v-show="index === trialIndex">
        <div id="cards" v-show="showCards">
          <Cards
            :index="index"
            :n_red="trial.n_red"
            :trial="true"
            :timeTilPick=3000
            :report_duration="duration"
            :durationx=2
            @done="toReport"
          />
        </div>
        <div id="report" v-show="showReport">
          <Report
            :index="index"
            :outcome="trial.outcome"
            :timeTilOutcome=2000
            @report="saveResponse"
            @rt_report="saveRTreport"
            @rt_honesty="saveRThonesty"
            @ratingdone="next"
          />
        </div>
      </div>
    </div>
    <div v-show="this.trialIndex === trials.length" style="text-align:left;">
      These were the test trials. <br /><br />
      Click "Start" below to start the actual game.<br><br>
      <b>Remember: from now on, any points you win will count toward your bonus payment.</b><br /><br /><br />
      <v-btn color="primary" elevation="3" @click="$router.push('task')"
        ><b>Start</b></v-btn
      >
    </div>
    <v-overlay :opacity="1" :value="overlay">
      <v-progress-circular indeterminate size="64">
        Loading...
      </v-progress-circular>
    </v-overlay>
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Report from "@/components/Report.vue";

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
          n_red: 2,
          outcome: 1,
          random_choice: 4, // tie
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
      overlay: true,
      reportColour: [],
      RThonesty: [],
      RTreport: [],
    };
  },
  methods: {
    toReport: function() {
      this.showCards = false;
      this.showReport = true;
      this.start = Date.now();
    },
    saveResponse: function(v) {
      this.reportColour.push(v)
      // console.log("reported colour", this.reportColour)
    },
    saveRTreport: function(v) {
      this.RTreport.push(v)
      // console.log("PARENT - RT report", this.RThonesty)
    },
    saveRThonesty: function(v) {
      this.RThonesty.push(v)
      // console.log("PARENT - RT honesty", this.RThonesty)
    },
    next: function() {
      this.duration = Date.now() - this.start;
      this.index++;
      this.trialIndex++;
      this.showCards = true;
      this.showReport = false;
    },
  },
  mounted() {
    this.overlay = false;
  },
};
</script>

<style scoped>
#task {
  text-align: center;
}
</style>
