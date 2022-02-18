<template>
  <div>
    <v-row>
      <v-col v-for="n in 15" :key="n" md="2">
        <div :id="'lucky' + n + '.jpg'">
          <v-img
            :src="'lucky' + n + '.jpg'"
            style="cursor: pointer;"
            @click="
              $emit('select_charm', n);
              select(n);
            "
          >
          </v-img>
        </div>
      </v-col> </v-row
    ><br />
    <v-btn
      :disabled="!n"
      type="submit"
      @click="
        $emit('done');
        reset();
      "
      >NEXT</v-btn
    >
  </div>
</template>

<script>
export default {
  data() {
    return {
      n: null,
    };
  },
  computed: {
    selection() {
      return "lucky" + this.n + ".jpg";
    },
  },
  methods: {
    select(n) {
      if (this.n) {
        let old = document.getElementById("lucky" + this.n + ".jpg");
        old.style.border = "0px";
      }

      // reset
      this.n = n;
      let elem = document.getElementById(this.selection);
      elem.style.border = "5px solid green";
    },
    reset() {
      // function to reset charm 1 selection
      let charm = this.$charm1;
      if (charm) {
        let elem = document.getElementById(charm);
        elem.style.display = "none";
        this.n = null;
      }
    },
  }
};
</script>
