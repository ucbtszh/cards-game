<template>
  <div id="task">
    <div id="taskloop" v-for="(trial, index) in trials" :key="index">
      <div v-show="index === trialIndex">
        <div id="cards" v-show="showCards">
          <Cards
            :index="index"
            :n_red="trial.n_red"
            :trial="false"
            :timeTilPick=1000
            :report_duration="duration"
            @done="toReport"
          />
        </div>
        <div id="report" v-show="showReport">
          <Report
            :index="index"
            :outcome="trial.outcome"
            :timeTilOutcome=1000
            @report="saveResponse"
            @rt_report="saveRTreport"
            @rt_honesty="saveRThonesty"
            @rt_catch="saveRTcatch"
            @ratingdone="next"
          />
        </div>
      </div>
    </div>
    <div v-show="this.trialIndex === trials.length">
      This is the end of the game. <br /><br />
      Click "Continue" below to proceed.<br /><br /><br />
      <v-btn color="primary" elevation="3" @click="saveAll; $router.push('feedback')"
        ><b>Continue</b></v-btn
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
import trials from "@/assets/trials_40shuffled.json"

export default {
  components: {
    Cards,
    Report,
  },
  data() {
    return {
      trials: trials,
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
      RTcatch: [],
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
    saveRTcatch: function(v) {
      this.RTcatch.push(v)
      console.log("PARENT - RT catch", this.RTcatch)
    },
    saveAll: function() {
      // TODO: placeholder to send all responses to DB
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
