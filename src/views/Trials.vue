<template>
  <div id="task">
    <div id="taskloop" v-for="(trial, index) in trials" :key="index">
      <div v-show="index === trialIndex">
        <div id="cards" v-show="showCards">
          <Cards
            :n_red="trial.n_red"
            :index="index"
            :report_duration="duration"
            :trial="true"
            @done="toReport"
          />
        </div>
        <div id="report" v-show="showReport">
          <Report :outcome="trial.outcome" :index="index" @ratingdone="next" />
        </div>
      </div>
    </div>
      <div v-show="this.trialIndex === trials.length">
        These were the test trials. <br><br>
        Click "Start" below to start the actual game.<br /><br />
        <v-btn color="primary" elevation="3" @click="$router.push('task')"
          ><b>Start</b></v-btn
        >
      </div>
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
          n_red: 4,
          outcome: -1,
          random_choice: 4,
        },
        {
          n_red: 2,
          outcome: 1,
          random_choice: 4,
        },
        {
          n_red: 3,
          outcome: 1,
          random_choice: 1,
        },
      ],
      index: 0,
      trialIndex: 0,
      duration: 2000,
      showCards: true,
      showReport: false,
      start: 0,
    };
  },
  methods: {
    toReport: function() {
      this.showCards = false;
      this.showReport = true;
      this.start = Date.now();
    },
    next: function() {
      this.duration = Date.now() - this.start;
      this.index++;
      this.trialIndex++;
      this.showCards = true;
      this.showReport = false;
    },
  },
};
</script>

<style scoped>
#task {
  text-align: center;
}
</style>
