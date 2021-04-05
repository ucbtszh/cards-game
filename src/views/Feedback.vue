<template>
  <div id="feedback">
    <v-form v-model="isValid">
        To what extent did you feel you understood the task?<br>
      <v-card-text>
        <v-slider
          v-model="understoodTaskResponse"
          :max="4"
          @click="rated=true"
          :rules="[rated==true || 'Please answer this question']"
          step="1"
          ticks="always"
          tick-size="15"
          required
        ><template v-slot:prepend>
          <h4>Not at all</h4>
        </template>
        <template v-slot:append>
          <h4>Completely understood</h4>
        </template>
        </v-slider>
      </v-card-text>

      <br>
      <v-textarea
        label="Please let us know any further feedback here."
        outlined
        v-model="feedback"
      ></v-textarea>
      <br>
      <v-textarea
        label="What do you think was the purpose of this study?"
        outlined
        v-model="studyPurpose"
        :rules="[(v) => v.length >= 10 || 'Please answer this question.']"
      ></v-textarea>

      <v-btn
        color="primary"
        :disabled="!isValid"
        @click="
          submit();
          $router.push('survey');
        "
      >
        NEXT
      </v-btn>
    </v-form>
  </div>
</template>

<script>
import { writeResponseData } from "../firebaseConfig"

export default {
  data() {
    return {
      rated: false,
      isValid: false,
      understoodTaskResponse: "",
      feedback: "",
      studyPurpose: "",
    };
  },
  methods: {
    submit: function() {
      let response = {
        understoodTask: this.understoodTaskResponse,
        feedback: this.feedback,
        studyPurpose: this.studyPurpose
      }
      writeResponseData(this.$uuid, 'feedback', response)
    },
  },
  mounted () {
   window.scrollTo(0, 0)
  }
};
</script>