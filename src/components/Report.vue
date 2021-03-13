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

    <div id="outcome" v-show="outcomeReport">
      <h2 v-show="opponentReport">{{ outcomeWin() }}</h2>
      <div id="reportedCard" class="trialresult">
        <h2>{{ reportText }}</h2>
        <div :class="outcomeCard(reportedCard)"></div><br>
        <img :src="userIcon" v-show="opponentReport">
      </div>
      <div id="opponentReport" v-show="opponentReport" class="trialresult">
        <h2>{{ outcomeText }}</h2>
        <div :class="outcomeCard(outcome)"></div><br>
        <img :src="otherIcon" v-show="opponentReport">
      </div>
    </div>

    <div id="honesty-rating" v-show="ratingReport">
      <h2>{{ honestyQ() }}</h2>
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
      userIcon: '',
      otherIcon: '',
      ratingReport: false,
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
    toggleDisplay: function() {
      this.displayReport = false;
      this.outcomeReport = true;
      setTimeout(this.showOutcome, 1000)
    },
    showOutcome: function() {
      this.opponentReport = true;
      setTimeout(this.showRating, 2000)
    },
    showRating: function() {
        this.outcomeReport = false
        this.ratingReport = true
    },
    outcomeCard(cardvalue) {
      if (cardvalue == -1) return "red-card-report";
      return "blue-card-report";
    },
    honestyQ: function() {
      if (this.index && (this.index % 5 === 0)) {
        return "Please select the middle bullet (4th circle)."
      }
      return "How honest do you think the other player is?"
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
      console.log("honesty rating:", this.honestyResponse); // TODO: need to send to DB
      this.$emit('ratingdone')
    }
  },
};
</script>