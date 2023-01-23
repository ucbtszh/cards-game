<template>
  <div>
    <div v-show="displayReport" style="text-align:center;">
      <h2>{{ displayText }}</h2>
      <br />
      <div
        class="red-card"
        id="reportRed"
        @click="toggleDisplay()"
        style="cursor:pointer;"
      ></div>
      <div
        class="blue-card"
        id="reportBlue"
        @click="toggleDisplay()"
        style="cursor:pointer;"
      ></div>
    </div>

    <div id="lost-bonus" v-show="showOutcome">
      Ouch! That was the wrong one... <br />
      Your bonus payment will be £0.<br /><br /><br />

      <v-btn color="primary" elevation="3" @click="$router.push('survey')"
        ><b>Continue</b></v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      displayText:
        "Click the winning button to receive £" +
        this.$bonus +
        " or your bonus will be £0:",
      displayReport: true,
      showOutcome: false,
    };
  },
  methods: {
    toggleDisplay: function() {
      this.displayReport = false;
      this.showOutcome = true;
    },
  },
};
</script>
