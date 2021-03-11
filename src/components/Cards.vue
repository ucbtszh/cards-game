<template>
  <div :id="index">
    <h3>{{ header }}</h3>
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
  props: ["n_red", "random_choice", "index", "report_duration"],
  methods: {
    highlightCard: function() {
      let container_div = document.getElementById(this.index);
      let child_divs = container_div.getElementsByTagName("div");
      this.header = "Computer’s random card pick:";
      child_divs[this.random_choice].style.borderWidth = "8px";
      child_divs[this.random_choice].style.borderColor = "green";
    },
    sayDone: function() {
      this.$emit('done')
    }
  },
  mounted() {
    this.one = setTimeout(this.highlightCard, 2000)
    this.two = setTimeout(this.sayDone, 4000)
  },
  beforeDestroy() {
    clearTimeout(this.one);
    clearInterval(this.two);
  },
};
</script>
