<template>
  <div>
    <v-form v-model="valid">
      <v-card elevation="0">
        <img :src="charm" width="150" /><br /><br />
        <v-card-text>
          <h2>How {{ term }} do you find this item?</h2>
          <br /><br />
          <v-slider
            v-model="rating"
            :max="100"
            :rules="[(v) => !!v || 'Please answer this question']"
            step="1"
            ticks="always"
            tick-size="10"
            required
            ><template v-slot:prepend>
              <h4>Not at all {{ term }}</h4>
            </template>
            <template v-slot:append>
              <h4>Very {{ term }}</h4>
            </template>
          </v-slider> </v-card-text
        ><br />
        <v-btn
          :disabled="!valid"
          @click="
            save_rating();
            $emit('done');
          "
          >SUBMIT</v-btn
        >
      </v-card>
    </v-form>
  </div>
</template>

<script>
import { writeResponseData } from "../firebaseConfig";

export default {
  props: ["charm", "term", "index"],
  data() {
    return {
      valid: false,
      rating: null,
    };
  },
  methods: {
    save_rating() {
      let data = {};
      let resp_name = this.charm + this.index + "_" + this.term;
      data[resp_name] = this.rating;
      // console.log(data);
      writeResponseData(this.$uuid, "charm_rating", data);
      this.valid = false;
    },
  },
};
</script>

<style scoped>
div {
  text-align: center;
}
</style>
