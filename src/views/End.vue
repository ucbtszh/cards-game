<template>
  <div id="end">
    In this study, you were playing with actual responses from participants from
    previous studies.<br /><br />

    <b>Thank you very much for your participation.</b> <br />
    We greatly appreciate your time and effort in doing so.<br /><br />
    Your participation will be logged automatically once you click the below
    button:<br /><br />
    <v-btn
      href="https://app.prolific.co/submissions/complete?cc=C1GMSBUG"
      color="primary"
      elevation="3"
      ><b>Take me back to Prolific</b>
    </v-btn>
  </div>
</template>

<script>
import { writeResponseData } from "../firebaseConfig";

export default {
  methods: {
    saveEndTime: function() {
      writeResponseData(this.$uuid, "end_time", {
        finishTime: performance.now(),
      });
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
