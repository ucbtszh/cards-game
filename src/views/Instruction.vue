<template>
  <swiper class="swiper" :options="swiperOption">
    <swiper-slide>
      <div class="instruction">
        You will play a card game with another particpant.<br />
        In each trial, you and the other player will be presented with an
        <b>identical</b> set of five cards. Each card is either red or blue. For
        example: <br /><br />
        <div class="red-card-mini" v-for="index in 3" :key="'r1' + index"></div>
        <div class="blue-card-mini" v-for="index in 2" :key="'b1' + index"></div>
        <br />
        The computer then randomly picks a card for you. <b>Only you</b> can see
        this card.<br /><br />
        <div class="red-card-mini" v-for="index in 2" :key="'r2' + index"></div>
        <div
          class="red-card-mini"
          style="border:3px solid green;height:47px"
        ></div>
        <div class="blue-card-mini" v-for="index in 2" :key="'b2' + index"></div>
        <br />
        Your task is to report the card that was picked for you by clicking on
        it.
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="instruction">
        The computer also randomly picks a card for the other player. This card
        can be the same or different than yours.<br /><br />

        You <b>cannot see</b> what card is picked for the other player. The
        other player also reports the card colour that was picked for them.<br />
        The blue card is the winning card, the red card is the losing card.<br />
        For example, if you report the blue card and the other player reports
        the red card:<br /><br />
        <img src="sswin.png" height="150px" /><br /><br />
        This means you <b>win</b> 1 point and the other player <b>loses</b> 1
        point.
      </div>
    </swiper-slide>
    <swiper-slide>
      <div class="instruction">
        For each point you win, you gain £ 0.05.<br />
        For each point you lose, you lose £ 0.05.<br />
        If both cards have the same colour, no one wins or loses a point.<br />
        Your total bonus payment will <b>not</b> be lower than £ 0.<br /><br />

        After each trial, you will be asked to rate how honest you think the
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
</template>

<script>
import { Swiper, SwiperSlide } from "vue-awesome-swiper";
import "swiper/css/swiper.css";
import ComprehensionCheck from "@/components/ComprehensionCheck.vue";

export default {
  title: "Instructions",
  components: {
    Swiper,
    SwiperSlide,
    ComprehensionCheck,
  },
  data() {
    return {
      swiperOption: {
        slidesPerView: 1,
        spaceBetween: 0,
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
  mounted () {
    window.scrollTo(0, 0)
  }
};
</script>

<style scoped>
.swiper {
  margin-top: 5%;
  overflow: hidden;
}
.instruction {
  margin: 0px 60px 100px 60px;
}
</style>