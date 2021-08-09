<template>
  <div id="comprehension">
    <div id="c1" v-show="showC1">
      <v-form v-model="isvalid">
        In each trial, you and the other player are presented with an
        identical set of seven cards.<br />
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="c1"
        >
          <v-radio value="1" label="True"></v-radio>
          <v-radio value="0" label="False"></v-radio>
        </v-radio-group>
        <v-btn
          color="success"
          elevation="3"
          :disabled="!isvalid"
          @click="
            c1clicks++;
            validateC1();
          "
        >
          Submit
        </v-btn>
        <div v-show="c1clicks == 1" style="color:red">
          {{ warning }}
        </div>
      </v-form>
    </div>
    <div id="c2" v-show="showC2">
      <v-form v-model="isvalid2">
        The computer picks one card for you and the other player at random.
        Which of the below statements is true?<br />
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="c2"
        >
          <v-radio
            value="a"
            label="The computer picks the same card for you and the other player"
          >
          </v-radio>
          <v-radio
            value="b"
            label="The computer picks a different card for you and the other player."
          >
          </v-radio>
          <v-radio
            value="c"
            label="The computer's random pick can result in the same or a different card for you and the other player."
          >
          </v-radio>
        </v-radio-group>
        <v-btn
          color="success"
          elevation="3"
          :disabled="!isvalid2"
          @click="
            c2clicks++;
            validateC2();
          "
        >
          Submit
        </v-btn>
        <div v-show="c2clicks == 1" style="color:red">
          {{ warning }}
        </div>
      </v-form>
    </div>
    <div id="c3" v-show="showC3">
      <v-form v-model="isvalid3">
        Let’s say you reported a blue card and the other player reported
        red:<br />
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="c3"
        >
          <v-radio
            value="a"
            label="You win 1 point. The other player wins nothing."
          >
          </v-radio>
          <v-radio
            value="b"
            label="The other player wins 1 point.  You win nothing."
          >
          </v-radio>
          <v-radio
            value="c"
            label="You win 1 point. The other player loses 1 point."
          >
          </v-radio>
          <v-radio
            value="d"
            label="The other player wins 1 point.  You lose 1 point."
          >
          </v-radio>
        </v-radio-group>
        <v-btn
          color="success"
          elevation="3"
          :disabled="!isvalid3"
          @click="
            c3clicks++;
            validateC3();
          "
        >
          Submit
        </v-btn>
        <div v-show="c3clicks == 1" style="color:red">
          {{ warning }}
        </div>
      </v-form>
    </div>
    <div id="c4" v-show="showC4">
      <v-form v-model="isvalid4">
        Let’s say you and the other player both reported a blue card. What happens?<br />
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="c4"
        >
          <v-radio
            value="a"
            label="Each person loses 1 point."
          >
          </v-radio>
          <v-radio
            value="b"
            label="Neither one wins or loses any point."
          >
          </v-radio>
          <v-radio
            value="c"
            label="Each person wins 1 point."
          >
          </v-radio>
        </v-radio-group>
        <v-btn
          color="success"
          elevation="3"
          :disabled="!isvalid3"
          @click="
            c4clicks++;
            validateC4();
          "
        >
          Submit
        </v-btn>
        <div v-show="c4clicks == 1" style="color:red">
          {{ warning }}
        </div>
      </v-form>
    </div>
    <div id="c5" v-show="showC5">
      <v-form v-model="isvalid5">
        Let’s say you reported a red card and the other player reported
        blue:<br />
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="c5"
        >
          <v-radio
            value="a"
            label="You win 1 point. The other player wins nothing."
          >
          </v-radio>
          <v-radio
            value="b"
            label="The other player wins 1 point.  You win nothing."
          >
          </v-radio>
          <v-radio
            value="c"
            label="You win 1 point. The other player loses 1 point."
          >
          </v-radio>
          <v-radio
            value="d"
            label="The other player wins 1 point.  You lose 1 point."
          >
          </v-radio>
        </v-radio-group>
        <v-btn
          color="success"
          elevation="3"
          :disabled="!isvalid3"
          @click="
            c5clicks++;
            validateC5();
          "
        >
          Submit
        </v-btn>
        <div v-show="c5clicks == 1" style="color:red">
          {{ warning }}
        </div>
      </v-form>
    </div>
    <div id="c6" v-show="showC6">
      <v-form v-model="isvalid6">
        Let’s say you and the past participant both reported a red card. What happens?<br />
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="c6"
        >
          <v-radio
            value="a"
            label="Each person loses 1 point."
          >
          </v-radio>
          <v-radio
            value="b"
            label="Neither one wins or loses any point."
          >
          </v-radio>
          <v-radio
            value="c"
            label="Each person wins 1 point."
          >
          </v-radio>
        </v-radio-group>
        <v-btn
          color="success"
          elevation="3"
          :disabled="!isvalid3"
          @click="
            c6clicks++;
            validateC6();
          "
        >
          Submit
        </v-btn>
        <div v-show="c6clicks == 1" style="color:red">
          {{ warning }}
        </div>
      </v-form>
    </div>
    <div id="c7" v-show="showC7">
      Well done!<br /><br />
      Next, you will play three <b>practice trials</b>.<br />
      After these, the actual game will start. <br /><br />
      <v-btn
        color="primary"
        elevation="3"
        @click="
          saveAttempts();
          $router.push('testtrials');
        "
        >Continue</v-btn
      >
    </div>
  </div>
</template>

<script>
import { writeResponseData } from "../firebaseConfig";

export default {
  data() {
    return {
      c1: "",
      c2: "",
      c3: "",
      c4: "",
      c5: "",
      c6: "",
      c1clicks: 0,
      c2clicks: 0,
      c3clicks: 0,
      c4clicks: 0,
      c5clicks: 0,
      c6clicks: 0,
      showC1: true,
      showC2: false,
      showC3: false,
      showC4: false,
      showC5: false,
      showC6: false,
      showC7: false,
      isvalid: false,
      isvalid2: false,
      isvalid3: false,
      isvalid4: false,
      isvalid5: false,
      isvalid6: false,
      completion_url: 'https://app.prolific.co/submissions/complete?cc=7BF55447',
      warning:
        "This answer is incorrect. You have one attempt left. Please review the instructions before your next attempt. When you use the blue arrows on the side to go back through the instructions and come back here, you will be directed to this question again.",
    };
  },
  methods: {
    validateC1: function() {
      if ((this.c1clicks == 2) & (this.c1 == 0)) {
        window.location.replace(this.completion_url);
      } else if (this.c1 == 1) {
        this.showC1 = false;
        this.showC2 = true;
      }
    },
    validateC2: function() {
      if ((this.c2clicks == 2) & (this.c2 !== "c")) {
        window.location.replace(this.completion_url);
      } else if (this.c2 === "c") {
        this.showC2 = false;
        this.showC3 = true;
      }
    },
    validateC3: function() {
      if ((this.c3clicks == 2) & (this.c3 !== "c")) {
        window.location.replace(this.completion_url);
      } else if (this.c3 === "c") {
        this.showC3 = false;
        this.showC4 = true;
      }
    },
    validateC4: function() {
      if ((this.c4clicks == 2) & (this.c4 !== "b")) {
        window.location.replace(this.completion_url);
      } else if (this.c4 === "b") {
        this.showC4 = false;
        this.showC5 = true;
      }
    },
    validateC5: function() {
      if ((this.c5clicks == 2) & (this.c5 !== "d")) {
        window.location.replace(this.completion_url);
      } else if (this.c5 === "d") {
        this.showC5 = false;
        this.showC6 = true;
      }
    },
    validateC6: function() {
      if ((this.c6clicks == 2) & (this.c6 !== "b")) {
        window.location.replace(this.completion_url);
      } else if (this.c6 === "b") {
        this.showC6 = false;
        this.showC7 = true;
      }
    },
    saveAttempts: function() {
      let data = {
        c1attempts: this.c1clicks,
        c2attempts: this.c2clicks,
        c3attempts: this.c3clicks,
        c4attempts: this.c4clicks,
        c5attempts: this.c5clicks,
        c6attempts: this.c6clicks,
        c1: this.c1,
        c2: this.c2,
        c3: this.c3,
        c4: this.c4,
        c5: this.c5,
        c6: this.c6,
      };
      // console.log("comp checks")
      writeResponseData(this.$uuid, "comprehension", data);
    },
  },
};
</script>
