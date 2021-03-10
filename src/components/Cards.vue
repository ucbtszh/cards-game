<template>
  <div id="stimuli">
    <div class="red-card" v-for="n_red in n_red" :key="'r'+n_red"></div>
    <div class="blue-card" v-for="n_blue in n_blue" :key="'b'+n_blue"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      n_blue: 5 - this.n_red,
    }
  },
  props: ["n_red", "random_choice", "index"],
  methods: {
    highlightCard() {
      let container_div = document.getElementById("stimuli");
      let child_divs = container_div.getElementsByTagName("div");
      child_divs[this.random_choice].style.borderWidth = "10px";
      child_divs[this.random_choice].style.borderColor = "green";
      child_divs[this.random_choice].style.padding = "10px";
    },
  },
  mounted() {
    this.time = setTimeout(this.highlightCard, 1200);
  },
  beforeDestroy() {
    clearTimeout(this.timer);
  },
};
</script>