<template>
  <div>
    <v-row>
      <v-col v-for="n in [1, 2, 3, 4, 5]" :key="n" md="2">
        <div :id="stimType + n + '.jpg'">
          <v-img
            :src="stimType + n + '.jpg'"
            style="cursor: pointer;"
            @click="
              $emit('selected', n);
              select(n);
            "
          >
          </v-img>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col v-for="n in [6, 7, 8, 9, 10]" :key="n" md="2">
        <div :id="stimType + n + '.jpg'">
          <v-img
            :src="stimType + n + '.jpg'"
            :id="stimType + n + '.jpg'"
            style="cursor: pointer;"
            @click="
              $emit('selected', n);
              select(n);
            "
          >
          </v-img>
        </div>
      </v-col>
    </v-row>
    <v-row>
      <v-col
        v-for="n in [11, 12, 13, 14, 15]"
        :key="n"
        md="2"
        :id="stimType + n"
      >
        <div :id="stimType + n + '.jpg'">
          <v-img
            :src="stimType + n + '.jpg'"
            :id="stimType + n + '.jpg'"
            style="cursor: pointer;"
            @click="
              $emit('selected', n);
              select(n);
            "
          >
          </v-img>
        </div>
      </v-col>
    </v-row>
    <br />
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
  props: ["stimType"],
  data() {
    return {
      n: null,
    };
  },
  computed: {
    selection() {
      return this.stimType + this.n + ".jpg";
    },
  },
  methods: {
    select(n) {
      // console.log("select", n);
      if (this.n) {
        let old = document.getElementById(this.stimType + this.n + ".jpg");
        old.style.border = "0px";
      }

      // reset
      this.n = n;
      let elem = document.getElementById(this.selection);
      elem.style.border = "5px solid green";
    },
    remove_stim(filename) {
      let elem = document.getElementById(filename);
      elem.style.display = "none";
      this.n = null;
    },
    reset() {
      // function to reset previous selection

      if (this.stimType === "lucky") {
        let charm1 = this.$charm1;
        let charm2 = this.$charm2;
        if (charm1) {
          this.remove_stim(charm1);
        }
        if (charm2) {
          this.remove_stim(charm2);
        }
      }

      if (this.stimType === "prefer") {
        let pref1 = this.$pref1;
        // console.log("reset", pref1);

        if (pref1) {
          this.remove_stim(pref1);
        }
      }
    },
  },
};
</script>
