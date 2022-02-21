<template>
  <div>
    <div id="select_pref1" v-if="showpref1">
      Here are 15 different items from around the world.<br />
      Choose one that you find especially appealing:<br /><br />
      <br />
      <Symbols
        :stimType="'prefer'"
        @selected="set_pref1"
        @done="
          showpref1 = false;
          showpref2 = true;
        "
      />
    </div>
    <div id="select_pref2" v-if="showpref2">
      Your choice has been recorded.<br /><br />
      Now choose the <b>second</b> that you find especially appealing:<br /><br />
      <Symbols
        :stimType="'prefer'"
        @selected="set_pref2"
        @done="$router.push('rate')"
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
      showpref1: true,
      showpref2: false,
    };
  },
  methods: {
    set_pref1: function(v) {
      Vue.prototype.$pref1 = "prefer" + v + ".jpg";
    },
    set_pref2: function(v) {
      Vue.prototype.$pref2 = "prefer" + v + ".jpg";
    },
  },
};
</script>
