<template>
  <div id="instruct">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="instruction">
          Next, you will be presented with 2 options to choose from. <br />
          Each option can either win you a point or not get you any points.
          <br />
          <b
            >Each option has its own probability of winning: both could be high
            or could be low.</b
          >
          <br />
          Yet, one option is more likely to win than the other.<br /><br />

          The goal of the game is to collect as many points as possible. <br />
          The more points you collect, the more bonus you receive at the end of
          the game. <br />
          <b
            >If you are not sure what to choose, just go with your gut
            instinct!</b
          ><br /><br />

          Press the arrow on the right to answer a few short questions and
          practice the game.<br />
          Points gained in the practice session will not be considered for your
          final bonus.
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="instruction">
          <div id="comprehension" v-if="!success">
            Please answer the following questions to make sure you understood
            the instructions:<br /><br />
            <b>What is true about the task?</b>

            <v-form v-model="isvalid">
              <v-row v-for="(q, index) in qs" :key="index">
                <v-col cols="8"> {{ q.item }}</v-col>
                <v-col>
                  <v-radio-group
                    :rules="[(v) => !!v || 'Please answer this question.']"
                    v-model="qs[index].value"
                    row
                  >
                    <v-radio value="1" label="True"></v-radio>
                    <v-radio value="0" label="False"></v-radio>
                  </v-radio-group>
                </v-col> </v-row
              ><br />
              <v-btn
                color="success"
                elevation="3"
                :disabled="!isvalid"
                @click="
                  submits++;
                  validate();
                "
              >
                Submit
              </v-btn>
              <div v-show="failed" style="color:red">
                {{ warning }}
              </div>
            </v-form>
          </div>
          <div v-show="success">
            Well done!<br /><br />

            <v-btn color="primary" @click="$router.push('task')"
              >START FIRST GAME</v-btn
            >
          </div>
        </div>
      </swiper-slide>
      <div class="swiper-pagination" slot="pagination"></div>
      <div class="swiper-button-prev" slot="button-prev"></div>
      <div class="swiper-button-next" slot="button-next"></div>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import questions from "../assets/comprehension.json";

import "swiper/css/swiper.css";

import meta from "../mixin/meta";

export default {
  title: "Instructions",
  components: {
    Swiper,
    SwiperSlide,
  },
  mixins: [meta],
  data() {
    return {
      qs: questions,
      failed: false,
      submits: 0,
      isvalid: false,
      success: false,
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
        allowTouchMove: false,
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
      },
      warning:
        "Not all answers are correct. You have one attempt left. Please review the instructions before your next attempt. Use the blue arrows on the sides to go back to the instructions and come back here.",
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.startTime = performance.now();
  },
  methods: {
    validate() {
      if (this.submits < 3) {
        if (
          (this.qs[0].value == 0) &
          (this.qs[1].value == 1) &
          (this.qs[2].value == 0) &
          (this.qs[3].value == 1)
        ) {
          this.success = true;
          // TODO: store responses y/n?
        } else {
          if (this.submits == 2) {
            this.$router.push("returnsub");
          } else {
            this.failed = true;
          }
        }
      } else {
        this.$router.push("returnsub");
      }
    },
  },
};
</script>

<style scoped>
#instruct {
  overflow: hidden;
}
.swiper {
  margin-top: 5%;
  overflow: hidden;
}
.instruction {
  margin: 0px 60px 100px 60px;
}
</style>
