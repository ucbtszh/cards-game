<template>
  <div>
    <div :id="index" v-show="displayReport">
      <h3>{{ displayText }}</h3>
      <div
        class="red-card"
        id="reportRed"
        @click="
          reportRed();
          toggleDisplay();
        "
        style="cursor:pointer;"
      ></div>
      <div
        class="blue-card"
        id="reportBlue"
        @click="
          reportBlue();
          toggleDisplay();
        "
        style="cursor:pointer;"
      ></div>
    </div>

    <div id="outcome" v-show="showOutcomeReport">
      <h2 v-show="showOpponentReport">{{ outcomeWin() }}</h2>
      <div id="reportedCard" class="trialresult">
        <h2>{{ reportText }}</h2>
        <div :class="outcomeCard(reportedCard)"></div><br>
        <img :src="userIcon" v-show="showOpponentReport">
      </div>
      <div id="showOpponentReport" v-show="showOpponentReport" class="trialresult">
        <h2>{{ outcomeText }}</h2>
        <div :class="outcomeCard(outcome)"></div><br>
        <img :src="otherIcon" v-show="showOpponentReport">
      </div>
    </div>

    <div id="honesty-rating" v-show="showRatingReport">
      <h2>How honest do you think the other player is?</h2>
      <v-form v-model="isValid">
        <v-card-text>
          <v-slider
            v-model="honestyResponse"
            :tick-labels="honestyLabels"
            :max="6"
            :rules="[(v) => !!v || 'Please answer this question.']"
            step="1"
            ticks="always"
            tick-size="5"
          ></v-slider>
        </v-card-text>

        <v-btn
          color="success"
          :disabled="!isValid"
          elevation="3"
          @click="submit"
          >Submit</v-btn
        >
      </v-form>
    </div>

    <div id="honesty-catch" v-show="showCatchReport">
      <h2>Please select the second bullet from the left.</h2>
      <v-form v-model="isValid">
        <v-card-text>
          <v-slider
            v-model="catchResponse"
            :tick-labels="honestyLabels"
            :max="6"
            :rules="[(v) => !!v || 'Please answer this question.']"
            step="1"
            ticks="always"
            tick-size="5"
          ></v-slider>
        </v-card-text>

        <v-btn
          color="success"
          :disabled="!isValid"
          elevation="3"
          @click="submitCatch"
          >Submit</v-btn
        >
      </v-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayText: "Please report the colour of the computer’s pick",
      reportText: "You report:",
      outcomeText: "The other player reports:",
      displayReport: true,
      reportedCard: '',
      showOutcomeReport: false,
      showOpponentReport: false,
      userIcon: '',
      otherIcon: '',
      showRatingReport: false,
      isValid: true,
      honestyResponse: "",
      honestyLabels: [
          'Not honest at all',
          '',
          '',
          '',
          '',
          '',
          'Completely honest'
      ],
      showCatchReport: false,
      catchResponse: "",
    };
  },
  props: ["index", "outcome", "timeTilOutcome"],
  methods: {
    reportRed: function() {
      this.reportedCard = -1;
      this.$emit('report', this.reportedCard)
      let rt = performance.now() - this.start
      // console.log("report RT:", rt);
      this.$emit('rt_report', rt)
      this.startRating = performance.now()
    },
    reportBlue: function() {
      this.reportedCard = 1;
      this.$emit('report', this.reportedCard)
      let rt = performance.now() - this.start
      // console.log("report RT:", rt);
      this.$emit('rt_report', rt)
      this.startRating = performance.now()
    },
    toggleDisplay: function() {
      this.displayReport = false;
      this.showOutcomeReport = true;
      setTimeout(this.showOutcome, this.timeTilOutcome)
    },
    showOutcome: function() {
      this.showOpponentReport = true;
      setTimeout(this.showRating, this.timeTilOutcome * 2)
    },
    showRating: function() {
      this.showOutcomeReport = false  
      this.showRatingReport = true
    },
    outcomeCard(cardvalue) {
      if (cardvalue == -1) return "red-card-report";
      return "blue-card-report";
    },
    outcomeWin: function() {
      if (this.reportedCard === this.outcome) return "IT'S A TIE";
      if ((this.reportedCard === -1) & (this.outcome === 1)) {
        this.userIcon = './x.png'
        this.otherIcon = './coin.png'
        return "YOU LOSE"
      }
      if ((this.reportedCard === 1) & (this.outcome === -1)) {
        this.userIcon = "./coin.png"
        this.otherIcon = './x.png'
        return "YOU WIN"
        }
    },
    submit: function() {
      // console.log("honesty rating:", this.honestyResponse); // TODO: need to send to DB
      let rt = performance.now() - this.startRating - 3 * this.timeTilOutcome
      // console.log("honesty RT:", rt);
      this.$emit('rt_honesty', rt)
      if (this.index && (this.index % 5 === 0)) {
        this.showRatingReport = false
        this.showCatchReport = true
        return
        }
      this.$emit('ratingdone')
      this.start = performance.now()
    },
    submitCatch: function() {
      let rt = performance.now() - this.startRating - this.timeTilOutcome
      this.$emit('rt_catch', rt)
      this.$emit('ratingdone')
      this.start = performance.now()
    }
  },
  mounted() {
     this.start = performance.now()
  }
};
</script>