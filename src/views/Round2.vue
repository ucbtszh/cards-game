<template>
  <div id="task">
    <v-progress-linear
      :value="rounds"
      color="amber"
      height="25px"
      style="margin-top:0; margin-bottom:50px; display:inline-block;"
      v-if="index < 30"
      >Trial {{ trialIndex + 1 }} of {{ trials.length }}</v-progress-linear
    >
    <div id="taskloop" v-for="(trial, index) in trials" :key="index">
      <div v-show="index === trialIndex">
        <div id="cards" v-show="showCards">
          <Cards
            :index="index"
            :n_red="trial.n_red"
            :trial="false"
            :timeTilPick="1100"
            :report_duration="duration"
            :durationx="3"
            @card_pick="savePick"
            @card_pick_colour="savePickColour"
            @done="toReport"
          />
        </div>
        <div id="report" v-show="showReport">
          <Report
            :index="index"
            :outcome="trial.outcome"
            :timeTilOutcome="1000"
            @report="saveResponse"
            @rt_report="saveRTreport"
            @honesty_rating="saveHonestyRating"
            @rt_honesty="saveRThonesty"
            @catch_rating="saveCatchRating"
            @rt_catch="saveRTcatch"
            @result="saveResult"
            @ratingdone="next"
          />
        </div>
      </div>
    </div>
    <div v-show="this.trialIndex === trials.length" style="text-align:left;">
      <b>You finished the second game!</b><br /><br />
      Please click 'Continue' below to start the third and last game.<br /><br />
      <v-btn
        color="primary"
        elevation="3"
        @click="
          saveAll();
          $router.push('round3');
        "
        ><b>Continue</b></v-btn
      >
    </div>
  </div>
</template>

<script>
import t1_1 from "@/assets/trials_rbatch1_0_2.json";
import t2_1 from "@/assets/trials_rbatch1_1_2.json";
import t3_1 from "@/assets/trials_rbatch1_2_2.json";
import t4_1 from "@/assets/trials_rbatch1_3_2.json";
import t5_1 from "@/assets/trials_rbatch1_4_2.json";
import t6_1 from "@/assets/trials_rbatch1_5_2.json";
import t7_1 from "@/assets/trials_rbatch1_6_2.json";
import t8_1 from "@/assets/trials_rbatch1_7_2.json";
import t9_1 from "@/assets/trials_rbatch1_8_2.json";
import t10_1 from "@/assets/trials_rbatch1_9_2.json";

import t11_1 from "@/assets/trials_rbatch1_10_2.json";
import t12_1 from "@/assets/trials_rbatch1_11_2.json";
import t13_1 from "@/assets/trials_rbatch1_12_2.json";
import t14_1 from "@/assets/trials_rbatch1_13_2.json";
import t15_1 from "@/assets/trials_rbatch1_14_2.json";
import t16_1 from "@/assets/trials_rbatch1_15_2.json";
import t17_1 from "@/assets/trials_rbatch1_16_2.json";
import t18_1 from "@/assets/trials_rbatch1_17_2.json";
import t19_1 from "@/assets/trials_rbatch1_18_2.json";
import t20_1 from "@/assets/trials_rbatch1_19_2.json";

import t21_1 from "@/assets/trials_rbatch1_20_2.json";
import t22_1 from "@/assets/trials_rbatch1_21_2.json";
import t23_1 from "@/assets/trials_rbatch1_22_2.json";
import t24_1 from "@/assets/trials_rbatch1_23_2.json";
import t25_1 from "@/assets/trials_rbatch1_24_2.json";
import t26_1 from "@/assets/trials_rbatch1_25_2.json";
import t27_1 from "@/assets/trials_rbatch1_26_2.json";
import t28_1 from "@/assets/trials_rbatch1_27_2.json";
import t29_1 from "@/assets/trials_rbatch1_28_2.json";
import t30_1 from "@/assets/trials_rbatch1_29_2.json";

import t31_1 from "@/assets/trials_rbatch1_30_2.json";
import t32_1 from "@/assets/trials_rbatch1_31_2.json";
import t33_1 from "@/assets/trials_rbatch1_32_2.json";
import t34_1 from "@/assets/trials_rbatch1_33_2.json";
import t35_1 from "@/assets/trials_rbatch1_34_2.json";
import t36_1 from "@/assets/trials_rbatch1_35_2.json";
import t37_1 from "@/assets/trials_rbatch1_36_2.json";
import t38_1 from "@/assets/trials_rbatch1_37_2.json";
import t39_1 from "@/assets/trials_rbatch1_38_2.json";
import t40_1 from "@/assets/trials_rbatch1_39_2.json";

import t41_1 from "@/assets/trials_rbatch1_40_2.json";
import t42_1 from "@/assets/trials_rbatch1_41_2.json";
import t43_1 from "@/assets/trials_rbatch1_42_2.json";
import t44_1 from "@/assets/trials_rbatch1_43_2.json";
import t45_1 from "@/assets/trials_rbatch1_44_2.json";
import t46_1 from "@/assets/trials_rbatch1_45_2.json";
import t47_1 from "@/assets/trials_rbatch1_46_2.json";
import t48_1 from "@/assets/trials_rbatch1_47_2.json";
import t49_1 from "@/assets/trials_rbatch1_48_2.json";
import t50_1 from "@/assets/trials_rbatch1_49_2.json";

import t51_1 from "@/assets/trials_rbatch1_50_2.json";
import t52_1 from "@/assets/trials_rbatch1_51_2.json";
import t53_1 from "@/assets/trials_rbatch1_52_2.json";
import t54_1 from "@/assets/trials_rbatch1_53_2.json";
import t55_1 from "@/assets/trials_rbatch1_54_2.json";
import t56_1 from "@/assets/trials_rbatch1_55_2.json";
import t57_1 from "@/assets/trials_rbatch1_56_2.json";
import t58_1 from "@/assets/trials_rbatch1_57_2.json";
import t59_1 from "@/assets/trials_rbatch1_58_2.json";
import t60_1 from "@/assets/trials_rbatch1_59_2.json";

import t61_1 from "@/assets/trials_rbatch1_60_2.json";
import t62_1 from "@/assets/trials_rbatch1_61_2.json";
import t63_1 from "@/assets/trials_rbatch1_62_2.json";
import t64_1 from "@/assets/trials_rbatch1_63_2.json";
import t65_1 from "@/assets/trials_rbatch1_64_2.json";
import t66_1 from "@/assets/trials_rbatch1_65_2.json";
import t67_1 from "@/assets/trials_rbatch1_66_2.json";
import t68_1 from "@/assets/trials_rbatch1_67_2.json";
import t69_1 from "@/assets/trials_rbatch1_68_2.json";
import t70_1 from "@/assets/trials_rbatch1_69_2.json";

import t71_1 from "@/assets/trials_rbatch1_70_2.json";
import t72_1 from "@/assets/trials_rbatch1_71_2.json";
import t73_1 from "@/assets/trials_rbatch1_72_2.json";
import t74_1 from "@/assets/trials_rbatch1_73_2.json";
import t75_1 from "@/assets/trials_rbatch1_74_2.json";
import t76_1 from "@/assets/trials_rbatch1_75_2.json";
import t77_1 from "@/assets/trials_rbatch1_76_2.json";
import t78_1 from "@/assets/trials_rbatch1_77_2.json";
import t79_1 from "@/assets/trials_rbatch1_78_2.json";
import t80_1 from "@/assets/trials_rbatch1_79_2.json";

import t81_1 from "@/assets/trials_rbatch1_80_2.json";
import t82_1 from "@/assets/trials_rbatch1_81_2.json";
import t83_1 from "@/assets/trials_rbatch1_82_2.json";
import t84_1 from "@/assets/trials_rbatch1_83_2.json";
import t85_1 from "@/assets/trials_rbatch1_84_2.json";
import t86_1 from "@/assets/trials_rbatch1_85_2.json";
import t87_1 from "@/assets/trials_rbatch1_86_2.json";
import t88_1 from "@/assets/trials_rbatch1_87_2.json";
import t89_1 from "@/assets/trials_rbatch1_88_2.json";
import t90_1 from "@/assets/trials_rbatch1_89_2.json";

import t91_1 from "@/assets/trials_rbatch1_90_2.json";
import t92_1 from "@/assets/trials_rbatch1_91_2.json";
import t93_1 from "@/assets/trials_rbatch1_92_2.json";
import t94_1 from "@/assets/trials_rbatch1_93_2.json";
import t95_1 from "@/assets/trials_rbatch1_94_2.json";
import t96_1 from "@/assets/trials_rbatch1_95_2.json";
import t97_1 from "@/assets/trials_rbatch1_96_2.json";
import t98_1 from "@/assets/trials_rbatch1_97_2.json";
import t99_1 from "@/assets/trials_rbatch1_98_2.json";
import t100_1 from "@/assets/trials_rbatch1_99_2.json";

import t101_1 from "@/assets/trials_rbatch1_100_2.json";
import t102_1 from "@/assets/trials_rbatch1_101_2.json";
import t103_1 from "@/assets/trials_rbatch1_102_2.json";
import t104_1 from "@/assets/trials_rbatch1_103_2.json";
import t105_1 from "@/assets/trials_rbatch1_104_2.json";
import t106_1 from "@/assets/trials_rbatch1_105_2.json";
import t107_1 from "@/assets/trials_rbatch1_106_2.json";
import t108_1 from "@/assets/trials_rbatch1_107_2.json";
import t109_1 from "@/assets/trials_rbatch1_108_2.json";
import t110_1 from "@/assets/trials_rbatch1_109_2.json";

import Cards from "@/components/Cards.vue";
import Report from "@/components/Report.vue";

import { writeResponseData } from "../firebaseConfig";

export default {
  components: {
    Cards,
    Report,
  },
  data() {
    return {
      index: 0,
      trialIndex: 0,
      duration: 2000,
      showCards: true,
      showReport: false,
      start: 0,
      randomPick: [],
      randomPickColour: [],
      reportColour: [],
      RTreport: [],
      honestyRating: [],
      RThonesty: [],
      catchRating: [],
      RTcatch: [],
      results: [],
    };
  },
  computed: {
    rounds: function() {
      return ((this.trialIndex + 1) * 100) / this.trials.length;
    },
    wins: function() {
      return this.results.filter((i) => i === "win").length;
    },
    losses: function() {
      return this.results.filter((i) => i === "loss").length;
    },
    points: function() {
      return this.wins - this.losses;
    },
    bonus: function() {
      if (this.points <= 0) {
        return 0;
      }
      return (0.05 * this.points).toFixed(2);
    },
  },
  methods: {
    toReport: function() {
      this.showCards = false;
      this.showReport = true;
      this.start = Date.now();
    },
    savePick: function(v) {
      this.randomPick.push(v);
      // console.log("random card pick:", this.randomPick.slice(0,trials.length))
    },
    savePickColour: function(v) {
      this.randomPickColour.push(v);
      // console.log("random pick colour:", this.randomPickColour.slice(0,trials.length))
    },
    saveResponse: function(v) {
      this.reportColour.push(v);
      // console.log("reported colour", this.reportColour)
    },
    saveRTreport: function(v) {
      this.RTreport.push(v);
      // console.log("PARENT - RT report", this.RThonesty)
    },
    saveHonestyRating: function(v) {
      this.honestyRating.push(v);
      // console.log("PARENT - honesty rating", this.honestyRating)
    },
    saveRThonesty: function(v) {
      this.RThonesty.push(v);
      // console.log("PARENT - RT honesty", this.RThonesty)
    },
    saveCatchRating: function(v) {
      this.catchRating.push(v);
      // console.log("PARENT - catch rating", this.catchRating)
    },
    saveRTcatch: function(v) {
      this.RTcatch.push(v);
      // console.log("PARENT - RT catch", this.RTcatch)
    },
    saveResult: function(v) {
      this.results.push(v);
    },
    next: function() {
      this.duration = Date.now() - this.start;
      this.index++;
      this.trialIndex++;
      this.showCards = true;
      this.showReport = false;
    },
    saveAll: function() {
      let responses = {
        nRed: this.trials.map(({ n_red }) => n_red),
        outcome: this.trials.map(({ outcome }) => outcome),
        ppLied: this.trials.map(({ lied }) => lied),
        randomPick: this.randomPick.slice(0, this.trials.length),
        randomPickColour: this.randomPickColour.slice(0, this.trials.length),
        reportColour: this.reportColour,
        RTreport: this.RTreport,
        honestyRating: this.honestyRating,
        RThonesty: this.RThonesty,
        catchRating: this.catchRating,
        RTcatch: this.RTcatch,
        results: this.results,
        bonusAmountGBP: this.bonus,
        finishTime: performance.now(),
      };
      writeResponseData(this.$uuid, "game_block2", responses);
    },
  },
   created() {
   this.trials =
      this.$condition == "t1"
        ? t1_1
        : this.$condition == "t2"
        ? t2_1
        : this.$condition == "t3"
        ? t3_1
        : this.$condition == "t4"
        ? t4_1
        : this.$condition == "t5"
        ? t5_1
        : this.$condition == "t6"
        ? t6_1
        : this.$condition == "t7"
        ? t7_1
        : this.$condition == "t8"
        ? t8_1
        : this.$condition == "t9"
        ? t9_1
        : this.$condition == "t10"
        ? t10_1
        : this.$condition == "t11"
        ? t11_1
        : this.$condition == "t12"
        ? t12_1
        : this.$condition == "t13"
        ? t13_1
        : this.$condition == "t14"
        ? t14_1
        : this.$condition == "t15"
        ? t15_1
        : this.$condition == "t16"
        ? t16_1
        : this.$condition == "t17"
        ? t17_1
        : this.$condition == "t18"
        ? t18_1
        : this.$condition == "t19"
        ? t19_1
        : this.$condition == "t20"
        ? t20_1
        : this.$condition == "t21"
        ? t21_1
        : this.$condition == "t22"
        ? t22_1
        : this.$condition == "t23"
        ? t23_1
        : this.$condition == "t24"
        ? t24_1
        : this.$condition == "t25"
        ? t25_1
        : this.$condition == "t26"
        ? t26_1
        : this.$condition == "t27"
        ? t27_1
        : this.$condition == "t28"
        ? t28_1
        : this.$condition == "t29"
        ? t29_1
        : this.$condition == "t30"
        ? t30_1
        : this.$condition == "t31"
        ? t31_1
        : this.$condition == "t32"
        ? t32_1
        : this.$condition == "t33"
        ? t33_1
        : this.$condition == "t34"
        ? t34_1
        : this.$condition == "t35"
        ? t35_1
        : this.$condition == "t36"
        ? t36_1
        : this.$condition == "t37"
        ? t37_1
        : this.$condition == "t38"
        ? t38_1
        : this.$condition == "t39"
        ? t39_1
        : this.$condition == "t40"
        ? t40_1
        : this.$condition == "t41"
        ? t41_1
        : this.$condition == "t42"
        ? t42_1
        : this.$condition == "t43"
        ? t43_1
        : this.$condition == "t44"
        ? t44_1
        : this.$condition == "t45"
        ? t45_1
        : this.$condition == "t46"
        ? t46_1
        : this.$condition == "t47"
        ? t47_1
        : this.$condition == "t48"
        ? t48_1
        : this.$condition == "t49"
        ? t49_1
        : this.$condition == "t50"
        ? t50_1
        : this.$condition == "t51"
        ? t51_1
        : this.$condition == "t52"
        ? t52_1
        : this.$condition == "t53"
        ? t53_1
        : this.$condition == "t54"
        ? t54_1
        : this.$condition == "t55"
        ? t55_1
        : this.$condition == "t56"
        ? t56_1
        : this.$condition == "t57"
        ? t57_1
        : this.$condition == "t58"
        ? t58_1
        : this.$condition == "t59"
        ? t59_1
        : this.$condition == "t60"
        ? t60_1
        : this.$condition == "t61"
        ? t61_1
        : this.$condition == "t62"
        ? t62_1
        : this.$condition == "t63"
        ? t63_1
        : this.$condition == "t64"
        ? t64_1
        : this.$condition == "t65"
        ? t65_1
        : this.$condition == "t66"
        ? t66_1
        : this.$condition == "t67"
        ? t67_1
        : this.$condition == "t68"
        ? t68_1
        : this.$condition == "t69"
        ? t69_1
        : this.$condition == "t70"
        ? t70_1
        : this.$condition == "t71"
        ? t71_1
        : this.$condition == "t72"
        ? t72_1
        : this.$condition == "t73"
        ? t73_1
        : this.$condition == "t74"
        ? t74_1
        : this.$condition == "t75"
        ? t75_1
        : this.$condition == "t76"
        ? t76_1
        : this.$condition == "t77"
        ? t77_1
        : this.$condition == "t78"
        ? t78_1
        : this.$condition == "t79"
        ? t79_1
        : this.$condition == "t80"
        ? t80_1
        : this.$condition == "t81"
        ? t81_1
        : this.$condition == "t82"
        ? t82_1
        : this.$condition == "t83"
        ? t83_1
        : this.$condition == "t84"
        ? t84_1
        : this.$condition == "t85"
        ? t85_1
        : this.$condition == "t86"
        ? t86_1
        : this.$condition == "t87"
        ? t87_1
        : this.$condition == "t88"
        ? t88_1
        : this.$condition == "t89"
        ? t89_1
        : this.$condition == "t90"
        ? t90_1
        : this.$condition == "t91"
        ? t91_1
        : this.$condition == "t92"
        ? t92_1
        : this.$condition == "t93"
        ? t93_1
        : this.$condition == "t94"
        ? t94_1
        : this.$condition == "t95"
        ? t95_1
        : this.$condition == "t96"
        ? t96_1
        : this.$condition == "t97"
        ? t97_1
        : this.$condition == "t98"
        ? t98_1
        : this.$condition == "t99"
        ? t99_1
        : this.$condition == "t100"
        ? t100_1
        : this.$condition == "t101"
        ? t101_1
        : this.$condition == "t102"
        ? t102_1
        : this.$condition == "t103"
        ? t103_1
        : this.$condition == "t104"
        ? t104_1
        : this.$condition == "t105"
        ? t105_1
        : this.$condition == "t106"
        ? t106_1
        : this.$condition == "t107"
        ? t107_1
        : this.$condition == "t108"
        ? t108_1
        : this.$condition == "t109"
        ? t109_1
        : this.$condition == "t110"
        ? t110_1
        : t1_1;
  },
};
</script>

<style scoped>
#task {
  text-align: center;
  overflow: hidden;
}
</style>
