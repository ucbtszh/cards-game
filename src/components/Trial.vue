<template>
  <div>
    <v-row id="choiceStims">
      <v-col>
        <v-img
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
  props: ["trial", "practice", "charm", "blur"],
  data() {
    return {
      blurstim: this.blur ? "blur_stim" : "choice_stim",
      rewardProb: [
        true,
        false,
        true,
        false,
        true,
        true,
        true,
        true,
        false,
        false,
      ], // 60% reward
      rewardProbRev: [0, 0, 0, 0, 0, 0, 0, 1, 0, 1], // 20% reward
      charmSide: [
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
        ? "x.png"
        : this.charmSide.includes(this.trial)
        ? this.charm // display lucky charm on left (symbol1) when trial index is in charmSide array
        : otherCharm;
    },
    symbol2: function() {
      let otherCharm = "coin.png"; // TODO
      return this.practice
        ? "x.png"
        : this.charmSide.includes(this.trial)
        ? otherCharm
        : this.charm;
    },
  },
  methods: {
    get_outcome(pos) {
      this.$emit("choice", pos); // store which stimulus was clicked (left or right)
      let reward = Math.floor(Math.random() * this.rewardProb.length); // reward probability
      let outcome = this.rewardProb[reward];
      this.$emit("outcome", outcome);
      outcome ? (this.outcomeImg = "coin.png") : (this.outcomeImg = "x.png"); // change outcome image according to reward
    },
    next() {
      setTimeout(() => {
        this.$emit("next");
      }, 1000);
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
