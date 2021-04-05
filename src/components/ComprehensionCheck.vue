<template>
        <div id="comprehension">
                <div id="c1" v-show="showC1">
                <v-form v-model="isvalid">
                        In each trial, you and the other player will be presented with an identical set of five cards.<br>
                        <v-radio-group
                        :rules="[(v) => !!v || 'Please answer this question.']" v-model="c1">
                                <v-radio
                                value="1"
                                label="True"
                                @click="c1clicks++"
                                >
                                </v-radio>
                                <v-radio
                                value="0"
                                label="False"
                                @click="c1clicks++"
                                >
                                </v-radio>
                        </v-radio-group>
                        <v-btn color="success" elevation="3" :disabled="!isvalid" @click="validateC1()">
                                Submit
                        </v-btn>
                </v-form>
                </div>
                <div id="c2" v-show="showC2">
                <v-form v-model="isvalid2">
                        The computer picks one card for you and the other player at random. Which of the below statements is true?<br>
                        <v-radio-group
                        :rules="[(v) => !!v || 'Please answer this question.']" v-model="c2">
                                <v-radio
                                value="a"
                                label="The computer picks the same card for you and the other player"
                                @click="c2clicks++"
                                >
                                </v-radio>
                                <v-radio
                                value="b"
                                label="The computer picks a different card for you and the other player."
                                @click="c2clicks++"
                                >
                                </v-radio>
                                <v-radio
                                value="c"
                                label="The computer makes two random picks: one for you and one for the other player. This card can be the same or a different card."
                                @click="c2clicks++"
                                >
                                </v-radio>
                        </v-radio-group>
                        <v-btn color="success" elevation="3" :disabled="!isvalid2" @click="validateC2()">
                                Submit
                        </v-btn>
                </v-form>
                </div>
                <div id="c3" v-show="showC3">
                <v-form v-model="isvalid3">
                        Let’s say you reported the blue card and the other player reported red:<br>
                        <v-radio-group
                        :rules="[(v) => !!v || 'Please answer this question.']" v-model="c3">
                                <v-radio
                                value="a"
                                label="You win 1 point. The other player wins nothing."
                                @click="c3clicks++"
                                >
                                </v-radio>
                                <v-radio
                                value="b"
                                label="The other player wins 1 point.  You win nothing."
                                @click="c3clicks++"
                                >
                                </v-radio>
                                <v-radio
                                value="c"
                                label="You win 1 point. The other player loses 1 point."
                                @click="c3clicks++"
                                >
                                </v-radio>
                                <v-radio
                                value="d"
                                label="The other player wins 1 point.  You lose 1 point."
                                @click="c3clicks++"
                                >
                                </v-radio>
                        </v-radio-group>
                        <v-btn color="success" elevation="3" :disabled="!isvalid3" @click="validateC3()">
                                Submit
                        </v-btn>
                </v-form>
                </div>
                <div id="c4" v-show="showC4">
        Well done!<br><br>
        Next, you will play three practice trials.<br>
        After these, the actual game will start. <br><br>
        <v-btn color="primary" elevation="3" @click="$router.push('testtrials'); saveAttempts">Continue</v-btn>
                </div>
        </div>
</template>
        
<script>
import { writeResponseData } from "../firebaseConfig"

export default {
        data() {
                return {
                        c1: '',
                        c2: '',
                        c3: '',
                        c1clicks: 0,
                        c2clicks: 0,
                        c3clicks: 0,
                        showC1: true, 
                        showC2: false, 
                        showC3: false,
                        showC4: false,
                        isvalid: false,
                        isvalid2: false,
                        isvalid3: false,
                }
        },
        methods: {
                validateC1: function() {
                        if (this.c1 == 1) {
                                this.showC1 = false
                                this.showC2 = true
                        }
                        else alert("This answer is incorrect.")
                },
                validateC2: function() {
                        if (this.c2 === 'c') {
                                this.showC1 = false
                                this.showC2 = false
                                this.showC3 = true
                        }
                        else alert("This answer is incorrect. Please review the instructions (click on the arrow to go back) and try again.")
                },
                validateC3: function() {
                        if (this.c3 === 'c') {
                                this.showC1 = false
                                this.showC2 = false
                                this.showC3 = false
                                this.showC4 = true
                        }
                        else alert("This answer is incorrect. Please review the instructions (click on the arrow to go back) and try again.")
                },
                saveAttempts: function() {
                        let data = {
                                c1attempts: this.c1clicks,
                                c2attempts: this.c2clicks,
                                c3attempts: this.c3clicks,
                                c1: this.c1,
                                c2: this.c2,
                                c3: this.c3,
                        }
                        writeResponseData(this.$uuid, 'comprehension', data)
                }
        }
}
</script>
        