<template>
  <div>
    <div id="EQ" v-show="EQshow">
      <EQ @EQ_done="showRGPTS" />
    </div>

    <div id="RGPTS" v-show="RGPTSshow">
      <RGPTS @RGPTS_done="showCRT" />
    </div>

    <div id="CRT" v-show="CRTshow">
      <CRT @CRT_done="showSD3" />
    </div>

    <div id="SD3" v-show="SD3show">
      <SD3 @SD3_done="showDemos" />
    </div>

    <div id="AQ" v-show="AQshow">
      <AQ @AQ_done="showDemos" />
    </div>

    <div id="demographics" v-show="demosShow">
      <v-form v-model="isValid">
        <v-text-field
          label="What is your age?"
          outlined
          v-model="age"
          style="width:200px;"
          :rules="[
            (v) => (v >= 10 && v < 100) || 'You entered an invalid age.',
          ]"
        ></v-text-field>
        What gender do you identify with?
        <v-radio-group
          v-model="genderResponse"
          :rules="[(v) => !!v || 'Gender is required']"
          row
        >
          <v-radio
            v-for="(g, index) in gender"
            :key="index"
            :label="g.label"
            :value="g.value"
          ></v-radio>
        </v-radio-group>
        Please select the third item from the below options:
        <v-radio-group
          v-model="catchResponse"
          :rules="[(v) => !!v || 'Please answer this question.']"
        >
          <v-radio
            v-for="(c, index) in catchq"
            :key="index"
            :label="c.label"
            :value="c.value"
          ></v-radio>
        </v-radio-group>
        Are you a twin?
        <v-radio-group
          v-model="twinResponse"
          :rules="[(v) => !!v || 'Please answer this question.']"
          row
        >
          <v-radio
            v-for="(p, index) in twin"
            :key="index"
            :label="p.label"
            :value="p.value"
          ></v-radio>
        </v-radio-group>
        What is the highest education level that you completed?
        <v-radio-group
          v-model="edLevResponse"
          persistent-hint
          hint="If you are currently studying, select your current level of studies."
          :rules="[(v) => !!v || 'Education level is required']"
        >
          <v-radio
            v-for="(e, index) in edLev"
            :key="index"
            :label="e.label"
            :value="e.value"
          ></v-radio>
        </v-radio-group>
        <br />
        <v-btn
          color="primary"
          :disabled="!isValid"
          @click="
            submit();
            $router.push('feedback');
          "
        >
          NEXT
        </v-btn>
      </v-form>
    </div>
  </div>
</template>

<script>
import EQ from "../components/EQ";
import RGPTS from "../components/RGPTS";
import CRT from "../components/CRT";
import SD3 from "../components/SD3";
import AQ from "../components/Autism";

import { writeResponseData } from "../firebaseConfig";

export default {
  components: {
    EQ,
    RGPTS,
    CRT,
    SD3,
    AQ
  },
  data() {
    return {
      isValid: false,
      age: "",
      twinResponse: "",
      twin: [
        {
          label: "yes, non-identical twins",
          value: "2",
        },
        {
          label: "yes, identical twins",
          value: "1",
        },
        {
          label: "no",
          value: "0",
        },
      ],
      genderResponse: "",
      gender: [
        {
          label: "female",
          value: "female",
        },
        {
          label: "male",
          value: "male",
        },
        {
          label: "non-binary",
          value: "nonbin",
        },
      ],
      edLevResponse: "",
      edLev: [
        {
          label: "No formal education",
          value: 1,
        },
        {
          label: "High school diploma",
          value: 2,
        },
        {
          label: "College degree",
          value: 3,
        },
        {
          label: "Vocational training",
          value: 4,
        },
        {
          label: "Bachelor’s degree",
          value: 5,
        },
        {
          label: "Master’s degree",
          value: 6,
        },
        {
          label: "Professional degree",
          value: 7,
        },
        {
          label: "Doctorate degree",
          value: 8,
        },
        {
          label: "Other",
          value: 9,
        },
      ],
      catchResponse: "",
      catchq: [
        {
          label: "Completely disagree",
          value: 1,
        },
        {
          label: "Disagree",
          value: 2,
        },
        {
          label: "Neither agree or disagree",
          value: 3,
        },
        {
          label: "Agree",
          value: 4,
        },
        {
          label: "Completely agree",
          value: 5,
        },
      ],
      EQshow: true,
      RGPTSshow: false,
      CRTshow: false,
      SD3show: false,
      AQshow: false,
      demosShow: false,
    };
  },
  methods: {
    showRGPTS: function() {
      this.EQshow = false;
      this.RGPTSShow = true;
      window.scrollTo(0, 0);
    },
    showCRT: function() {
      this.RGPTSshow = false;
      this.CRTShow = true;
      window.scrollTo(0, 0);
    },
    showSD3: function() {
      this.CRTshow = false;
      this.SD3Show = true;
      window.scrollTo(0, 0);
    },
    showAQ: function() {
      this.SD3show = false;
      this.AQShow = true;
      window.scrollTo(0, 0);
    },
    showDemos: function() {
      this.AQshow = false;
      this.demosShow = true;
      window.scrollTo(0, 0);
    },
    submit: function() {
      let response = {
        age: this.age,
        gender: this.genderResponse,
        edlev: this.edLevResponse,
        twin: this.twinResponse,
        catch: this.catchResponse,
      };
      writeResponseData(this.$uuid, "demographics", response);
    },
  },
  mounted() {
    window.scrollTo(0, 0);
  },
};
</script>
