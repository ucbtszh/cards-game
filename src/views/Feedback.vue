<template>
  <div id="feedback">
    <v-form v-model="isValid">
      To what extent did you feel you understood the game instructions?<br />
      <v-card-text>
        <v-slider
          v-model="understoodTaskResponse"
          :max="6"
          @click="rated = true"
          :rules="[rated == true || 'Please answer this question']"
          step="1"
          ticks="always"
          tick-size="10"
          ><template v-slot:prepend>
            <h4>Not at all</h4>
          </template>
          <template v-slot:append>
            <h4>Completely understood</h4>
          </template>
        </v-slider>
      </v-card-text>

      <br />
      <v-textarea
        label="Did you have any concerns about the game?"
        outlined
        v-model="concerns"
        :rules="[(v) => v.length >= 1 || 'Please answer this question.']"
      ></v-textarea>
      <br />

      How many different participants do you think you ended up playing with?<br />
      <v-text-field
        v-model="howMany"
        type="number"
        :min="0"
        :max="100"
        @click:append-outer="increment"
        @click:prepend="decrement"
        :rules="[(v) => v.length >= 1 || 'Please answer this question.']"
        required
      ></v-text-field>
      <br />

      <v-textarea
        label="What do you think was the purpose of this study?"
        outlined
        v-model="studyPurpose"
        :rules="[(v) => v.length >= 10 || 'Please answer this question.']"
      ></v-textarea>
      <br />

      <v-textarea
        label="What was your goal while playing the game?"
        outlined
        v-model="yourGoal"
        :rules="[(v) => v.length >= 10 || 'Please answer this question.']"
      ></v-textarea>
      <br />


      <v-textarea
        label="What do you think the other players' goals were in playing the game?"
        outlined
        v-model="othersGoal"
        :rules="[(v) => v.length >= 10 || 'Please answer this question.']"
      ></v-textarea>
      <br />

      Would you play this game again?<br />
      <v-radio-group
        :rules="[(v) => !!v || 'Please answer this question.']"
        v-model="playAgain"
      >
        <v-radio value="1" label="Yes"></v-radio>
        <v-radio value="0" label="No"></v-radio>
      </v-radio-group>
      <br />

      How honest were you in playing the game?<br />
      <v-card-text>
        <v-slider
          v-model="howHonest"
          :max="6"
          @click="rated2 = true"
          :rules="[rated2 == true || 'Please answer this question']"
          step="1"
          ticks="always"
          tick-size="15"
          required
          ><template v-slot:prepend>
            <h4>Not honest at all</h4>
          </template>
          <template v-slot:append>
            <h4>Completely honest</h4>
          </template>
        </v-slider>
      </v-card-text>
      <br />

      How good do you think you are at detecting deceptions?<br />
      <v-card-text>
        <v-slider
          v-model="goodDetection"
          :max="6"
          @click="rated3 = true"
          :rules="[rated3 == true || 'Please answer this question']"
          step="1"
          ticks="always"
          tick-size="15"
          required
          ><template v-slot:prepend>
            <h4>Not good at all</h4>
          </template>
          <template v-slot:append>
            <h4>Very good</h4>
          </template>
        </v-slider>
      </v-card-text>

      <v-btn
        color="primary"
        :disabled="!isValid"
        @click="
          submit();
          $router.push('end');
        "
      >
        NEXT
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { writeResponseData } from "../firebaseConfig";

export default {
  data() {
    return {
      rated: false,
      rated2: false,
      rated3: false,
      isValid: false,
      understoodTaskResponse: "",
      studyPurpose: "",
      concerns: "",
      othersGoal: "",
      yourGoal: "",
      goodDetection: "",
      howHonest: "",
      howMany: "",
      playAgain: "",
    };
  },
  methods: {
    submit: function() {
      let response = {
        understoodTask: this.understoodTaskResponse,
        studyPurpose: this.studyPurpose,
        concerns: this.concerns,
        yourGoal: this.yourGoal,
        othersGoal: this.othersGoal,
        goodDetection: this.goodDetection,
        howHonest: this.howHonest,
        howMany: this.howMany,
        playAgain: this.playAgain,
      };
      writeResponseData(this.$uuid, "feedback", response);
      // console.log(response)
    },
    increment () {
      this.howMany = parseInt(this.howMany,10) + 1
    },
    decrement () {
      this.howMany = parseInt(this.howMany,10) - 1
    }
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
