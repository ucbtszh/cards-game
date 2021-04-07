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
      <v-form v-model="rated">
        <v-radio-group
          class="honestyform"
          v-model="honestyResponse"
          :rules="[(v) => !!v || 'Please answer this question']"
        >
          <v-layout row wrap>
            <v-flex column>
              <v-radio key="0" value="0"> </v-radio>
              <p>
                Completely <br />
                dishonest
              </p>
            </v-flex>
            <v-flex column>
              <v-radio key="1" value="1"> </v-radio>
              <p>Dishonest</p>
            </v-flex>
            <v-flex column>
              <v-radio key="2" value="2"> </v-radio>
              <p>
                Somewhat <br />
                dishonest
              </p>
            </v-flex>
            <v-flex column>
              <v-radio key="3" value="3"> </v-radio>
              <p>
                Potentially honest or <br />
                dishonest
              </p>
            </v-flex>
            <v-flex column>
              <v-radio key="4" value="4"> </v-radio>
              <p>
                Somewhat <br />
                honest
              </p>
            </v-flex>
            <v-flex column>
              <v-radio key="5" value="5"> </v-radio>
              <p>Honest</p>
            </v-flex>
            <v-flex column>
              <v-radio key="6" value="6"> </v-radio>
              <p>
                Completely <br />
                honest
              </p>
            </v-flex>
          </v-layout>
        </v-radio-group>
        <v-btn
          color="primary"
          :disabled="!rated"
          elevation="3"
          @click="submit"
          style="margin-top:50px"
          >Submit</v-btn
        >
      </v-form>
    </div>

    <div id="honesty-catch" v-show="showCatchReport">
      <h2>Please select the {{ catchOption }} option from the left.</h2>
      <v-form v-model="isValid">
        <v-radio-group
          class="honestyform"
          v-model="catchResponse"
          :rules="[(v) => !!v || 'Please answer this question']"
        >
          <v-layout row wrap>
            <v-flex column>
              <v-radio key="0" value="0"> </v-radio>
              <p>
                Completely <br />
                dishonest
              </p>
            </v-flex>
            <v-flex column>
              <v-radio key="1" value="1"> </v-radio>
              <p>Dishonest</p>
            </v-flex>
            <v-flex column>
              <v-radio key="2" value="2"> </v-radio>
              <p>
                Somewhat <br />
                dishonest
              </p>
            </v-flex>
            <v-flex column>
              <v-radio key="3" value="3"> </v-radio>
              <p>
                Potentially honest or <br />
                dishonest
              </p>
            </v-flex>
            <v-flex column>
              <v-radio key="4" value="4"> </v-radio>
              <p>
                Somewhat <br />
                honest
              </p>
            </v-flex>
            <v-flex column>
              <v-radio key="5" value="5"> </v-radio>
              <p>Honest</p>
            </v-flex>
            <v-flex column>
              <v-radio key="6" value="6"> </v-radio>
              <p>
                Completely <br />
                honest
              </p>
            </v-flex>
          </v-layout>
        </v-radio-group>
        <v-btn
          color="primary"
          :disabled="!isValid"
          elevation="3"
          @click="submitCatch"
          style="margin-top:50px"
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
      reportedCard: "",
      showOutcomeReport: false,
      showOpponentReport: false,
      userIcon: "",
      otherIcon: "",
      showRatingReport: false,
      rated: false,
      isValid: true,
      honestyResponse: "",
      showCatchReport: false,
      catchResponse: "",
      result: "",
    };
  },
  computed: {
    catchOption: function() {
        let option = ['second', 'fourth', 'sixth', 'fifth', 'third', 'first', 'fourth', 'first', 'second']
        return option[this.index / 5]
    }
  },
  props: ["index", "outcome", "timeTilOutcome", "trial"],
  methods: {
    reportRed: function() {
      this.reportedCard = -1;
      this.$emit("report", this.reportedCard);
      let rt = performance.now() - this.start; // cumulative over trials --> in analyses subtract Cards display * index=1!
      // console.log("report RT:", rt);
      this.$emit("rt_report", rt);
      this.start = performance.now();
    },
    reportBlue: function() {
      this.reportedCard = 1;
      this.$emit("report", this.reportedCard);
      let rt = performance.now() - this.start; // cumulative over trials --> in analyses subtract Cards display * index=1!
      // console.log("report RT:", rt);
      this.$emit("rt_report", rt);
      this.start = performance.now();
    },
    toggleDisplay: function() {
      this.displayReport = false;
      this.showOutcomeReport = true;
      setTimeout(this.showOutcome, this.timeTilOutcome * 1); // durationx = 1
    },
    showOutcome: function() {
      this.showOpponentReport = true;
      setTimeout(this.showRating, this.timeTilOutcome * 2); // durationx = 1 + 2 = 3
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
        this.result = "tie";
        return "IT'S A TIE";
      } else if ((this.reportedCard === -1) & (this.outcome === 1)) {
        this.userIcon = "./x.png";
        this.otherIcon = "./coin.png";
        this.result = "loss";
        return "YOU LOSE";
      } else if ((this.reportedCard === 1) & (this.outcome === -1)) {
        this.userIcon = "./coin.png";
        this.otherIcon = "./x.png";
        this.result = "win";
        return "YOU WIN";
      }
    },
    submit: function() {
      this.$emit("result", this.result);
      let rt = performance.now() - this.start - this.timeTilOutcome * 3; // durationx = 3
      this.$emit("rt_honesty", rt);
      this.$emit("honesty_rating", this.honestyResponse);
      if (this.index && this.index % 5 === 0) {
        this.showRatingReport = false;
        this.showCatchReport = true;
        return;
      }
      this.$emit("ratingdone");
      this.start = performance.now();
      this.rated = false;
    },
    submitCatch: function() {
      let rt = performance.now() - this.start; // after start time has been reset in submit()
      this.$emit("rt_catch", rt);
      this.$emit("catch_rating", this.catchResponse);
      this.$emit("ratingdone");
      this.start = performance.now();
      // if (this.index === 10 && this.catchResponse !== 5) {
      //   window.location.replace('https://app.prolific.co/submissions/complete?cc=2FACC063')
      // }
    },
  },
  mounted() {
    this.start = performance.now();
  },
};
</script>
