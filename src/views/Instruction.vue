<template>
  <div id="instruct">
    <swiper class="swiper" :options="swiperOption">
      <swiper-slide>
        <div class="instruction">
          You are going to play a card game with another participant.<br />
          In each round, you and the other player will be presented with an
          <b>identical</b> set of seven cards. <br />
          Each card is either red or blue. For example: <br /><br />
          <div
            class="red-card-mini"
            v-for="index in 5"
            :key="'r1' + index"
          ></div>
          <div
            class="blue-card-mini"
            v-for="index in 2"
            :key="'b1' + index"
          ></div>
          <br />
          The computer then randomly picks a card for you. <b>Only you</b> can
          see this card.<br /><br />
          <div
            class="red-card-mini"
            v-for="index in 4"
            :key="'r2' + index"
          ></div>
          <div
            class="red-card-mini"
            style="border:5px solid gold;width:25px;height:43px"
          ></div>
          <div
            class="blue-card-mini"
            v-for="index in 2"
            :key="'b2' + index"
          ></div>
          <br />
          Your task is to report the card that was picked for you by clicking on
          it.
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="instruction">
          The computer also randomly picks a card for the other player.
          <br />
          This card <b>can be the same or different</b> than yours.<br /><br />

          You <b>cannot see</b> what card is picked for the other player.<br /><br />

          The other player also reports the card colour that was picked for
          them.<br /><br />

          When you and the other player report different card colours,
          blue <b>wins</b> 1 point and red <b>loses</b> 1 point.<br />
          When you and the other player report the same colour,
          <b>no one wins or loses a point</b>.<br /><br />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="instruction">
          For example, when you report a blue card and the other player reports
          red:<br /><br />
          <img src="sswin.png" height="150px" /><br /><br />
          This means you <b>win</b> 1 point and the other player <b>loses</b> 1
          point.<br /><br />

          Vice versa, when you report a red card and the other player reports
          blue:<br /><br />
          <img src="sslose.png" height="150px" /><br /><br />
          This means you <b>lose</b> 1 point and the other player <b>wins</b> 1
          point.
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="instruction">
          When you and the other player both report red:<br /><br />
          <img src="sstie.png" height="150px" /><br /><br />
          This means <b>neither</b> you or the other player wins or loses
          points.<br /><br />

          When you and the other player both report blue:<br /><br />
          <img src="sstieb.png" height="150px" /><br /><br />
          Again, <b>neither</b> you or the other player wins or loses points.
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="instruction">
          For each point you win, you gain £ 0.05.<br />
          For each point you lose, you lose £ 0.05.<br /><br />
          Your total bonus payment will <b>not</b> be lower than £ 0.<br /><br />

          After each round, you will be asked to rate how honest you think the
          other player is.<br />
          Note: The other player also rates your honesty.<br /><br />
          Next, you are asked to answer a few questions to make sure that you
          understand the game.
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="instruction">
          <ComprehensionCheck />
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
import ComprehensionCheck from "@/components/ComprehensionCheck.vue";

import "swiper/css/swiper.css";

import meta from "../mixin/meta";

export default {
  title: "Instructions",
  components: {
    Swiper,
    SwiperSlide,
    ComprehensionCheck,
  },
  mixins: [meta],
  data() {
    return {
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
    };
  },
  mounted() {
    window.scrollTo(0, 0);
    this.startTime = Date.now();
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
