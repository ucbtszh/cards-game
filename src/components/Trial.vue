<template>
  <div>
    <v-row id="choiceStims">
      <v-col>
        <v-img
          id="stim1"
          :src="symbol1"
          aspect-ratio="1"
          :class="blurstim"
          @click="
            get_outcome('l');
            next();
          "
        ></v-img>
      </v-col>
      <v-col>
        <v-img
          id="stim2"
          :src="symbol2"
          aspect-ratio="1"
          :class="blurstim"
          @click="
            get_outcome('r');
            next();
          "
        ></v-img>
      </v-col>
    </v-row>
    <img :src="outcomeImg" class="outcome" />
  </div>
</template>

<script>
export default {
  props: ["nTrials", "trial", "practice", "charm", "blur"],
  data() {
    return {
      blurstim: this.blur ? "blur_stim" : "choice_stim",
      rewardProb70: [1, 1, 0, 0, 1, 0, 1, 1, 1, 1], // 70% reward
      rewardProb30: [0, 0, 0, 1, 0, 0, 0, 1, 1, 0], // 30% reward
      luckySide: [
        5,
        6,
        7,
        8,
        13,
        14,
        15,
        16,
        17,
        18,
        25,
        26,
        27,
        28,
        34,
        35,
        36,
        37,
      ],
      outcomeImg: null,
    };
  },
  computed: {
    symbol1: function() {
      // locally have array of lucky charm filenames OR other collection of stimuli?
      // if former: remove chosen charms from array & randomly select 'other symbol' to display from this array
      let otherCharm = "coin.png";
      return this.practice
        ? "practice1.jpg"
        : this.luckySide.includes(this.trial)
        ? this.charm // display lucky charm on left (symbol1) when trial index is in luckySide array
        : otherCharm;
    },
    symbol2: function() {
      let otherCharm = "coin.png"; // TODO
      return this.practice
        ? "practice2.jpg"
        : this.luckySide.includes(this.trial)
        ? otherCharm
        : this.charm;
    },
  },
  methods: {
    get_outcome(pos) {
      this.$emit("choice", pos); // store which stimulus was clicked (left or right)

      if (pos === "l") {
        if (this.luckySide.includes(this.trial)) {
          let reward =
            this.trial < this.nTrials / 2 // assume we switch reward probabilities from second half of trial
              ? this.rewardProb70[
                  Math.floor(Math.random() * this.rewardProb70.length)
                ]
              : this.rewardProb30[
                  Math.floor(Math.random() * this.rewardProb30.length)
                ];
          this.$emit("outcome", reward);
          reward ? (this.outcomeImg = "coin.png") : (this.outcomeImg = "x.png"); // change outcome image according to reward
        } else {
          // in all other cases, we know that the left side has the neutral (non lucky) stimulus
          let reward =
            this.trial < this.nTrials / 2 // assume we switch reward probabilities from second half of trial
              ? this.rewardProb30[
                  Math.floor(Math.random() * this.rewardProb30.length)
                ]
              : this.rewardProb70[
                  Math.floor(Math.random() * this.rewardProb70.length)
                ];
          this.$emit("outcome", reward);
          reward ? (this.outcomeImg = "coin.png") : (this.outcomeImg = "x.png"); // change outcome image according to reward
        }
      } else { // when the subject clicked on the right side choice stimulus
        if (this.luckySide.includes(this.trial)) { // if so, the lucky stim was not on the right, but on the left
          let reward =
            this.trial < this.nTrials / 2 // assume we switch reward probabilities from second half of trial
              ? this.rewardProb30[
                  Math.floor(Math.random() * this.rewardProb30.length)
                ]
              : this.rewardProb70[
                  Math.floor(Math.random() * this.rewardProb70.length)
                ];
          this.$emit("outcome", reward);
          reward ? (this.outcomeImg = "coin.png") : (this.outcomeImg = "x.png"); // change outcome image according to reward
        } else { // if the lucky charm was not displayed on the left, it means it was displayed on the right, thus higher reward
          let reward =
            this.trial < this.nTrials / 2 // assume we switch reward probabilities from second half of trial
              ? this.rewardProb70[
                  Math.floor(Math.random() * this.rewardProb70.length)
                ]
              : this.rewardProb30[
                  Math.floor(Math.random() * this.rewardProb30.length)
                ];
          this.$emit("outcome", reward);
          reward ? (this.outcomeImg = "coin.png") : (this.outcomeImg = "x.png"); // change outcome image according to reward
        }
      }
    },
    next() {
      setTimeout(() => {
        this.$emit("next");
      }, 750);
    },
  },
};
</script>

<style scoped>
.choice_stim {
  border: 1px solid black;
  padding: 150px;
  width: 150px;
  max-width: 150px;
  text-align: center;
  margin-left: 80px;
}

.blur_stim {
  border: 1px solid black;
  padding: 150px;
  width: 150px;
  max-width: 150px;
  text-align: center;
  -webkit-filter: blur(5px); /* Safari 6.0 - 9.0 */
  filter: blur(5px);
  margin-left: 80px;
}

.outcome {
  text-align: center;
  width: 150px;
  max-width: 150px;
  margin-top: 100px;
}
</style>
