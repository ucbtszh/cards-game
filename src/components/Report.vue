<template>
  <div>
    <div id="report" v-show="displayReport">
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

    <div id="outcome" v-show="outcomeReport">
      <h3>{{ outcomeWin() }}</h3>
      <div id="reportedCard">
        <h2>{{ reportText }}</h2>
        <div :class="outcomeCard(reportedCard)"></div>
      </div>
      <div id="opponentReport" v-show="opponentReport">
        <h2>{{ outcomeText }}</h2>
        <div :class="outcomeCard(outcome)"></div>
      </div>
    </div>

    <div id="honesty-rating" v-show="ratingReport">
      <h3>How honest do you think the other player is?</h3>
      <v-form v-model="isValid">
        <v-card-text>
          <v-slider
            v-model="honestyResponse"
            :tick-labels="honestyLabels"
            :max="7"
            :rules="[(v) => !!v || 'Please answer this question.']"
            step="1"
            ticks="always"
            tick-size="5"
            required
          ></v-slider>
        </v-card-text>

        <v-btn
          color="success"
          :disabled="!isValid"
          elevation="3"
          @click="submit()"
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
      outcomeReport: false,
      opponentReport: false,
      ratingReport: false,
      isValid: false,
      honestyResponse: "",
      honestyLabels: [
          'Not honest at all',
          '',
          '',
          '',
          '',
          '',
          '',
          'Completely honest'
      ]
    };
  },
  props: ["outcome", "index"],
  methods: {
    reportRed: function() {
      this.reportedCard = -1;
    },
    reportBlue: function() {
      this.reportedCard = 1;
    },
    timing: function() {
      return Math.floor(Math.random() * [700, 800, 900, 1000, 1100, 1200, 1300, 1400].length);
    },
    toggleDisplay: function() {
      this.displayReport = false;
      this.outcomeReport = true;
      setTimeout(this.opponentReport = true, this.timing);
      setTimeout(this.ratingReport = true, 3000);
      setTimeout(this.outcomeReport = false, 5000);
      setTimeout(this.ratingReport = true, 5000);
    },
    outcomeCard(cardvalue) {
      if (cardvalue == -1) return "red-card";
      return "blue-card";
    },
    outcomeWin: function() {
      if (this.reportedCard === this.outcome) return "IT'S A TIE";
      if ((this.reportedCard === 1) & (this.outcome === -1)) return "YOU WIN";
      return "YOU LOSE";
    },
    submit: function() {
      console.log(this.honestyResponse);
      // logic: when submit, emit event to Task parent to proceed to next trial with index++
    }
  },
};
</script>