<template>
  <div :id="index">
    <h3>{{ header }}</h3>
    <p v-show="trial" style="display:inline-block">Remember that the other player is handed exactly the same cards and that their random card pick is not necessarily the same as yours.</p>
    <br>
    <div class="red-card" v-for="n_red in n_red" :key="'r' + n_red"></div>
    <div class="blue-card" v-for="n_blue in n_blue" :key="'b' + n_blue"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n_blue: 7 - this.n_red, // first number should equal total amount of cards
      header: "Cards in this trial:",
    };
  },
  props: ["index", "n_red", "report_duration", "trial", "timeTilPick", "durationx"],
  computed: {
    cardpick: function() {
      let pick = Math.floor(Math.random() * [0, 1, 2, 3, 4, 5, 6].length);
      // console.log("from computed", this.index, pick)
      return [this.index, pick]
    },
    cardpickColour: function() {
      if(this.cardpick[1] <= this.n_red - 1) {
        var colour = "red"
        }
      else if (this.cardpick[1] > this.n_red - 1) {
        colour = "blue"
        }
      return [this.index, colour]
    }
  },
  methods: {
    highlightCard: function() {
      let cardpick = this.cardpick[1]
      this.$emit("card_pick", cardpick)
      this.$emit("card_pick_colour", this.cardpickColour[1])
      let container_div = document.getElementById(this.index);
      let child_divs = container_div.getElementsByTagName("div");
      child_divs[cardpick].style.borderWidth = "8px";
      child_divs[cardpick].style.borderColor = "gold";
      this.header = "Computer’s random card pick:";
    },
    unhighlightcard: function() {
      let cardpick = this.cardpick[1]
      let container_div = document.getElementById(this.index);
      let child_divs = container_div.getElementsByTagName("div");
      child_divs[cardpick].style.borderWidth = "1px";
      child_divs[cardpick].style.borderColor = "black";
      this.header = "Cards in this trial:";
    },
    sayDone: function() {
      this.$emit('done')
    }
  },
  watch: {
    // assumes that consecutive trials will not have identical durations
    report_duration: {
      handler: function() {
        setTimeout(this.highlightCard, this.timeTilPick)
        setTimeout(this.unhighlightcard, this.timeTilPick * this.durationx)
        setTimeout(this.sayDone, this.timeTilPick * this.durationx)
      }
    }
  },
 mounted() {
   this.highlight = setTimeout(this.highlightCard, this.timeTilPick)
   this.unhighlight = setTimeout(this.unhighlightcard, this.timeTilPick * this.durationx)
   this.done = setTimeout(this.sayDone, this.timeTilPick * this.durationx)
  },
  beforeDestroy() {
    clearTimeout(this.highlight);
    clearTimeout(this.unhighlight);
    clearTimeout(this.done);
  }
};
</script>
