<template>
  <div id="feedback">
    <v-form v-model="isValid">
      <v-card-text>
        <v-slider
          v-model="understoodTaskResponse"
          label="To what extent did you feel you understood the task?"
          :tick-labels="understoodTask"
          :max="7"
          :rules="[(v) => !!v || 'Please answer this question']"
          step="1"
          ticks="always"
          tick-size="5"
          required
        ></v-slider>
      </v-card-text>
      <br>
      <v-text-field
        label="Please let us know any further feedback here."
        outlined
        v-model="feedback"
        style="width:500px;"
      ></v-text-field>
      <br>
      <v-text-field
        label="What do you think was the purpose of this study?"
        outlined
        v-model="studyPurpose"
        style="width:500px;"
        :rules="[(v) => v.length >= 10 || 'Please answer this question.']"
      ></v-text-field>

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
export default {
  data() {
    return {
      isValid: false,
      understoodTaskResponse: "",
      feedback: "",
      studyPurpose: "",
      understoodTask: [
        "Little understanding",
        "",
        "",
        "",
        "Completely understood",
      ],
    };
  },
  methods: {
    submit: function() {
      console.log(this.understoodTaskResponse);
    },
  },
};
</script>

<style scoped>
#feedback {
  margin-top: 5%;
}
</style>
