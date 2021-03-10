<template>
  <div>
    <h2>Cards in this trial:</h2>
    <!-- <Cards :n_red="3" :random_choice="randomPick()" :index="0" /> -->

    <div id="taskloop" v-for="(trial, index) in trials" :key="index">
      <div v-show="index === trialIndex">
        <div id="stimuli">
          <div class="red-card" v-for="n in trial.n_red" :key="'r' + n"></div>
          <div class="blue-card" v-for="n in n_blue" :key="'b' + n"></div>
        </div>
        <!-- <Report :outcome="trial.outcome" /> -->
        <!-- Outcome -->
        <!-- <button @click="next()">NEXT</button> -->

         <div class="next-btn">
          <v-btn
            color="primary"
            elevation="3"
            @click="
              next();"
            >SUBMIT</v-btn
          >
          </div>
      </div>
      </div>
  </div>
</template>

<script>
// import Cards from '@/components/Cards.vue'
// import Report from '@/components/Report.vue'
import trials from "@/assets/trials_40shuffled.json";

export default {
  components: {
    // Cards,
    // Report
  },
  data() {
    return {
      trials: trials,
      index: 0,
      trialIndex: 0,
    };
  },
  methods: {
    next() {
      this.index++;
      this.trialIndex++;
    },
    randomPick() {
      let pick = Math.floor(Math.random() * [0, 1, 2, 3, 4].length);
      console.log("random card pick", pick);
      return pick;
    },
    highlightCard() {
      let container_div = document.getElementById("stimuli");
      let child_divs = container_div.getElementsByTagName("div");
      let random_choice = this.randomPick()
      console.log(child_divs);
      console.log(child_divs[random_choice]);
      child_divs[random_choice].style.borderWidth = "10px";
      child_divs[random_choice].style.borderColor = "green";
    },
  },
  computed: {
    n_blue() {
      return 5 - this.trials[this.index].n_red;
    },
  },
  mounted() {
    this.timer = setTimeout(this.highlightCard, 1200);
  },
  beforeDestroy() {
    clearInterval(this.timer);
  }
};
</script>
