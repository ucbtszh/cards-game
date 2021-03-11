<template>
  <div id="task">
    <div id="taskloop" v-for="(trial, index) in trials" :key="index">
      <!-- <div v-show="index === trialIndex"> -->
        <div id="cards" v-show="showCards">
          <Cards
            :n_red="trial.n_red"
            :random_choice="randomPick()"
            :index="index"
            :report_duration="duration"
            @done="toReport"
          />
        </div>
        <div id="report" v-show="showReport">
          <Report :outcome="trial.outcome" :index="index" @ratingdone="next" />
        </div>
      </div>
    <!-- </div> -->
  </div>
</template>

<script>
import Cards from "@/components/Cards.vue";
import Report from "@/components/Report.vue";
import trials from "@/assets/trials_40shuffled.json";

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
      duration: 3000,
      showCards: true,
      showReport: false,
      start: 0,
    };
  },
  methods: {
    randomPick: function() {
      let pick = Math.floor(Math.random() * [0, 1, 2, 3, 4].length);
      return pick;
    },
    toReport: function() {
      this.showCards = false;
      this.showReport = true;
      this.start = Date.now();
    },
    next: function() {
      this.index++;
      this.trialIndex++;
      this.showCards = true;
      this.showReport = false;
      this.duration = Date.now() - this.start;
      console.log("parent - report duration in ms:", this.duration);
    },
  },
};
</script>

<style scoped>
#task {
  margin-top: 5%;
  text-align: center;
}
</style>