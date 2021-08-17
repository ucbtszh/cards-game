<template>
    <div id="end">
        <b>Debriefing</b><br>
        In this game, you played against a computer, not another actual player. This was necessary for our research purposes. <br><br>
        Thank you very much for participating in this study! <br />
        We greatly appreciate your time and effort in doing so, as it allows us to continue academic research during these challenging times.<br><br>
        Your participation will be logged automatically once you click the below button:<br /><br />
        <v-btn href="https://app.prolific.co/submissions/complete?cc=7BF55447" color="primary" elevation="3"
        ><b>Take me back to Prolific and log my participation</b>
        </v-btn>
    </div>
</template>

<script>
import { writeResponseData } from "../firebaseConfig"

export default {
    methods: {
        saveEndTime: function() {
            writeResponseData(this.$uuid, 'end_time', {end: Date.now()})
        }
    },
    mounted() {
        window.scrollTo(0, 0)
        },
    beforeDestroy() {
        this.finishTime = Date.now()
    }
}
</script>