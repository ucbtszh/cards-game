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
        <div :class="outcomeCard(reportedCard)"></div>
        <br />
        <img :src="userIcon" v-show="showOpponentReport" />
      </div>
      <div
        id="showOpponentReport"
        v-show="showOpponentReport"
        class="trialresult"
      >
        <h2>{{ outcomeText }}</h2>
        <div :class="outcomeCard(outcome)"></div>
        <br />
        <img :src="otherIcon" v-show="showOpponentReport" />
      </div>
    </div>

    <div id="honesty-rating" v-show="showRatingReport">
      <h2>How honest do you think the other player is?</h2>
        <v-card-text>
      <v-form v-model="isValid">
        <v-slider
          v-model="honestyResponse"
          :min="0"
          :max="6"
          step="1"
          @click="rated=true"
          :rules="[rated==true || 'Please answer this question']"
          ticks="always"
          tick-size="15"
          track-color="darkgray"
          track-fill-color="primary"
          thumb-color="primary"
          always-dirty
        >
        <template v-slot:prepend>
          <h4>Not honest at all</h4>
        </template>

        <template v-slot:append>
          <h4>Completely honest</h4>
        </template>
        </v-slider>

        <v-btn
          color="primary"
          :disabled="!isValid"
          elevation="3"
          @click="submit"
          >Submit</v-btn
        >
      </v-form>
        </v-card-text>
    </div>

    <div id="honesty-catch" v-show="showCatchReport">
      <h2>Please select the second option from the left.</h2>
           <v-card-text>
      <v-form v-model="isValid">
        <v-slider
          v-model="catchResponse"
          :min="0"
          :max="6"
          step="1"
          :rules="[(v) => !!v || 'Please answer this question']"
          ticks="always"
          tick-size="15"
          track-color="darkgray"
          track-fill-color="primary"
          thumb-color="primary"
          always-dirty
        >
        <template v-slot:prepend>
          <h4>Not honest at all</h4>
        </template>

        <template v-slot:append>
          <h4>Completely honest</h4>
        </template>
        </v-slider>

        <v-btn
          color="primary"
          :disabled="!isValid"
          elevation="3"
          @click="submitCatch"
          >Submit</v-btn
        >
      </v-form>
        </v-card-text>
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
      reportedCard: "",
      showOutcomeReport: false,
      showOpponentReport: false,
      userIcon: "",
      otherIcon: "",
      showRatingReport: false,
      rated: false,
      isValid: true,
      honestyResponse: 0,
      showCatchReport: false,
      catchResponse: "",
      result: "",
    };
  },
  props: ["index", "outcome", "timeTilOutcome", "trial"],
  methods: {
    reportRed: function() {
      this.reportedCard = -1;
      this.$emit("report", this.reportedCard);
      let rt = performance.now() - this.start;
      // console.log("report RT:", rt);
      this.$emit("rt_report", rt);
      this.startRating = performance.now();
    },
    reportBlue: function() {
      this.reportedCard = 1;
      this.$emit("report", this.reportedCard);
      let rt = performance.now() - this.start;
      // console.log("report RT:", rt);
      this.$emit("rt_report", rt);
      this.startRating = performance.now();
    },
    toggleDisplay: function() {
      this.displayReport = false;
      this.showOutcomeReport = true;
      setTimeout(this.showOutcome, this.timeTilOutcome);
    },
    showOutcome: function() {
      this.showOpponentReport = true;
      setTimeout(this.showRating, this.timeTilOutcome * 2);
    },
    showRating: function() {
      this.showOutcomeReport = false;
      this.showRatingReport = true;
    },
    outcomeCard(cardvalue) {
      if (cardvalue == -1) return "red-card-report";
      return "blue-card-report";
    },
    outcomeWin: function() {
      if (this.reportedCard === this.outcome) {
        this.result = "tie"
        return "IT'S A TIE"}
      else if ((this.reportedCard === -1) & (this.outcome === 1)) {
        this.userIcon = "./x.png";
        this.otherIcon = "./coin.png";
        this.result = "loss"
        return "YOU LOSE";
      } else if ((this.reportedCard === 1) & (this.outcome === -1)) {
        this.userIcon = "./coin.png";
        this.otherIcon = "./x.png";
        this.result = "win"
        return "YOU WIN";
      }
    },
    submit: function() {
      this.$emit("result", this.result)
      let rt = performance.now() - this.startRating - 3 * this.timeTilOutcome;
      this.$emit("rt_honesty", rt);
      this.$emit("honesty_rating", this.honestyResponse);
      if (this.index && this.index % 5 === 0) {
        this.showRatingReport = false;
        this.showCatchReport = true;
        return;
      }
      this.$emit("ratingdone");
      this.start = performance.now();
      this.rated = false
    },
    submitCatch: function() {
      let rt = performance.now() - this.startRating - this.timeTilOutcome;
      this.$emit("rt_catch", rt);
      this.$emit("catch_rating", this.catchResponse)
      this.$emit("ratingdone");
      this.start = performance.now();
    },
  },
  mounted() {
    this.start = performance.now();
  },
};
</script>
