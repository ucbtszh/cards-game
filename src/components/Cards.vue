<template>
  <div :id="index">
    <h3>{{ header }}</h3>
    <p v-show="trial" style="display:inline-block">Remember that the other player is handed exactly the same cards.</p>
    <br>
    <div class="red-card" v-for="n_red in n_red" :key="'r' + n_red"></div>
    <div class="blue-card" v-for="n_blue in n_blue" :key="'b' + n_blue"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n_blue: 5 - this.n_red,
      header: "Cards in this trial:",
    };
  },
  props: ["n_red", "index", "report_duration", "trial"],
  computed: {
    cardpick: function() {
      let pick = Math.floor(Math.random() * [0, 1, 2, 3, 4].length);
      // console.log("from computed", this.index, pick)
      return [this.index, pick]
    }
  },
  methods: {
    highlightCard: function() {
      let cardpick = this.cardpick[1]
      let container_div = document.getElementById(this.index);
      let child_divs = container_div.getElementsByTagName("div");
      child_divs[cardpick].style.borderWidth = "8px";
      child_divs[cardpick].style.borderColor = "green";
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
        setTimeout(this.highlightCard, 1000)
        setTimeout(this.unhighlightcard, 3000)
        this.done = setTimeout(this.sayDone, 3000)
      }
    }
  },
 mounted() {
   this.highlight = setTimeout(this.highlightCard, 1000)
   this.unhighlight = setTimeout(this.unhighlightcard, 3000)
   this.done = setTimeout(this.sayDone, 3000)
  },
  beforeDestroy() {
    clearTimeout(this.highlight);
    clearTimeout(this.unhighlight);
    clearTimeout(this.done);
  }
};
</script>
