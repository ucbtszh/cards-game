<template>
  <div>
    <div id="select_charm1" v-if="showcharm1">
      Here are 15 good luck charms from around the world. <br />
      Choose one that you find especially lucky: <br />
      <br />
      <Symbols
        @select_charm="set_charm1"
        @done="
          showcharm1 = false;
          showcharm2 = true;
        "
      />
    </div>
    <div id="select_charm2" v-if="showcharm2">
      Your choice has been recorded.<br /><br />
      Now choose the <b>second</b> charm that you find especially lucky:<br /><br />
      <Symbols
        @select_charm="set_charm2"
        @done="
          $router.push('rate')
        "
      />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import Symbols from "../components/ChooseSymbol.vue";

export default {
  components: { Symbols },
  data() {
    return {
      showcharm1: true,
      showcharm2: false
    };
  },
  methods: {
    set_charm1: function(v) {
      Vue.prototype.$charm1 = "lucky" + v + ".jpg";
    },
    set_charm2: function(v) {
      Vue.prototype.$charm2 = "lucky" + v + ".jpg";
    },
  },
};
</script>
