<template>
  <div id="welcome">
    <div id="informsheet" v-show="showInfo">
      <b
        >Information Sheet for Participants (Behavioural) Title of Project:
        Decision making</b
      ><br />
      We would like to invite you to participate in this research project which
      is about decision making. The experiment lasts approximately 30 minutes.
      You will be asked to play a cards game and answer some questions about
      yourself.<br />
      This study has been approved by the UCL Research Ethics Committee as
      Project ID Number: 3990/003 <br />
      <b
        ><u
          >Investigators Name, Address and Contact Details of Investigators:</u
        ></b
      ><br />
      Liron ROZENKRANTZ (Experimental Psychology, 26 Bedford Way, email:
      liron.rozenkrantz@gmail.com)<br />
      Tali SHAROT (Experimental Psychology, 26 Bedford Way),
      telephone: 020 76797511, email: t.sharot@ucl.ac.uk)<br /><br />

      <b><u>Subject Cost/Payment for Participation</u></b
      ><br />
      We will reimburse you £7.50 per hour for your time. This will be paid at
      the end of the session.<br /><br />

      <b><u>Subject Rights and Study Withdrawal</u></b
      ><br />
      You should only participate if you want to; choosing not to take part will
      not disadvantage you in any way and you won’t incur any penalties or lose
      any benefits to which you might have been entitled. Before you decide
      whether you want to take part, please read this information sheet
      carefully and discuss it with others if you wish. Ask us if there is
      anything that is not clear or you would like more information. If you
      agree to take part, please fill in the attached consent form. After
      signing this consent form and agreeing to take part, you can still
      withdraw at any time without penalty or loss of benefits to which you are
      otherwise entitle. No reason needs to be given for withdrawing
      participation. If you decide to withdraw you will be asked what you wish
      to happen to the data you have provided up that point. Under data
      protection legislation you have certain individual rights in relation to
      the personal information we hold about you. For the purposes of research
      where such individual rights would seriously impair research outcomes,
      such rights are limited. However, subject to certain conditions, you have
      the following rights in relation to your personal data:<br />
      · Right 1: A right to access personal data held by us about you<br />
      · Right 2: A right to require us to rectify any inaccurate personal data
      held by us about you.<br />
      · Right 3: A right to require us to erase personal data held by us about
      you. This right will only apply where, for example, we no longer need to
      use the personal data to achieve the purpose we collected it for; or where
      you withdraw your consent if we are using your personal data based on your
      consent; or where you object to the way we process your data (in line with
      Right 6 below).<br />
      · Right 4: A right to restrict our processing of personal data held by us
      about you. This right will only apply where, for example, you dispute the
      accuracy of the personal data held by us; or where you would have the
      right to require us to erase the personal data but would prefer that our
      processing is restricted instead; or where we no longer need to use the
      personal data to achieve the purpose we collected it for, but we require
      the data for the purposes of dealing with legal claims.<br />
      · Right 5: A right to receive personal data, which you have provided to
      us, in a structured, commonly used and machine readable format. You also
      have the right to require us to transfer this personal data to another
      organisation.<br />
      · Right 6: A right to object to our processing of personal data held by us
      about you.<br />
      · Right 7: A right to withdraw your consent, where we are relying on it to
      use your personal data.<br />
      · Right 8: A right to ask us not to use information about you in a way
      that allows computers to make decisions about you and ask us to stop.<br /><br />

      <b><u>Do I have to take part? </u></b><br />
      You should only participate if you want to; choosing not to take part will
      not disadvantage you in any way and you won’t incur any penalties or lose
      any benefits to which you might have been entitled. Before you decide
      whether you want to take part, please read this information sheet
      carefully and discuss it with others if you wish. Ask us if there is
      anything that is not clear or you would like more information. If you
      agree to take part, please fill in the attached consent form. After
      signing this consent form and agreeing to take part, you can still
      withdraw at any time without penalty or loss of benefits to which you are
      otherwise entitle. No reason needs to be given for withdrawing
      participation. If you decide to withdraw you will be asked what you wish
      to happen to the data you have provided up that point.<br /><br />

      <b><u>What are the possible benefits of taking part?</u></b
      ><br />
      There are no immediate benefits for those people participating in the
      project.<br /><br />

      <b><u>Use of Deception</u></b
      ><br />
      Research designs often require that the full intent of the study not be
      explained prior to participation. Although we have described the general
      nature of the tasks that you will be asked to perform, the full intent of
      the study may not have been explained to you until after the completion of
      the study at which point you may withdraw your data from the study.<br /><br />

      <b><u>What will happen to the results of the research project?</u></b
      ><br />
      Results will be disseminated at scientific conferences and in scientific
      journals. The proposed research is not expected to generate commercially
      exploitable results. You can be sent a copy of any manuscripts that
      incorporate results from this study that are accepted for publication if
      you wish.<br /><br />

      <b><u>Local Data Protection Notice</u></b
      ><br />
      <b>Notice:</b> The controller for this project will be University College
      London (UCL). The UCL Data Protection Officer provides oversight of UCL
      activities involving the processing of personal data, and can be contacted
      at data-protection@ucl.ac.uk<br /><br />
      The lawful basis that would be used to process your personal data will be
      performance of a task in the public interest.<br /><br />
      The lawful basis used to process special category personal data such as
      racial or ethnic origin, political opinions, religious or philosophical
      beliefs will be for scientific and historical research or statistical
      purposes.<br /><br />
      The proposed research is not expected to generate commercially exploitable
      results.<br /><br />
      All data will be collected and stored in accordance with the data
      protection legislation (GDPR and DPA 2018). Some personal details (name
      and address) will be passed to UCL Finance for administration purposes.
      The following information may also be obtained directly: Gender, Date of
      Birth, Level of Education, IQ, Beck Depression Inventory Score and Life
      Orientation Score etc. If you would prefer that this information not be
      disclosed, please inform us of this before signing the consent form.<br /><br />
      A code will be attached to the data so it remains anonymous. You will not
      be identifiable in the write up or any other publication or talk which may
      result from this study.<br /><br />
      <v-btn color="primary" elevation="3" @click="displayConsent()"
        >Continue</v-btn
      >
    </div>
    <div id="consent" v-show="showConsent">
      <b
        >CONSENT FORM FOR DECISION MAKING RESEARCH<br />
        Please complete this form after you have read the Information Sheet
        and/or listened to an explanation about the research. </b
      ><br /><br />

      <b>Title of Study:</b> Decision Making<br />
      <b>Department:</b> Experimental Psychology <br />
      <b>Name and Contact Details of the Researcher(s)</b> Sarah Zheng,
      sarah.zheng.16@ucl.ac.uk<br />
      <b>Name and Contact Details of the Principal Researcher:</b> Professor
      Tali Sharot<br />
      <b
        >This study has been approved by the UCL Research Ethics Committee:
        Project ID number:</b
      >
      3990/003 <br />
      Thank you for considering taking part in this research. If you have any
      questions arising from the Information Sheet or explanation already given
      to you, please email the researcher before you decide whether to join in
      (email: sarah.zheng.16@ucl.ac.uk). You can keep this consent form and
      refer to at any time.<br /><br />

      <v-form v-model="valid">
        *I confirm that I have read and understood the Information Sheet for the
        above study. I have had an opportunity to consider the information and
        what will be expected of me. I have also had the opportunity to ask
        questions (email: sarah.zheng.16@ucl.ac.uk), which have been answered to
        my satisfaction.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons1"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        *I consent to participate in the study. I understand that my personal
        information will be used for the purposes explained in the information
        sheet. I understand that according to data protection legislation,
        ‘public task’ will be the lawful basis for processing.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons2"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        I understand that all personal information will remain confidential and
        that all efforts will be made to ensure I cannot be identified. I
        understand that my data gathered in this study will be stored
        pseudonymously and securely. It will not be possible to identify me in
        any publications.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons3"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        *I understand that my information may be subject to review by
        responsible individuals from the University or monitoring and audit
        purposes.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons4"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        I understand the potential risks of participating and the support that
        will be available to me should I become distressed during the course of
        the research.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons5"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        No promise or guarantee of benefits have been made to encourage you to
        participate.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons6"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        I understand that the data will not be made available to any commercial
        organisations but is solely the responsibility of the researcher(s)
        undertaking this study.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons7"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        I understand that I will not benefit financially from this study or from
        any possible outcome it may result in in the future.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons8"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        I understand that I will be compensated for the portion of time spent in
        the study.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons9"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        I agree that my pseudonymised research data may be used by others for
        future research. (No one will be able to identify you when this data is
        shared.)
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons10"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        I understand that the information I have submitted will be published as
        a report and I wish to receive a copy of it.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons11"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        I hereby confirm that I understand the inclusion criteria as detailed in
        the Information Sheet.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons12"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        I hereby confirm that: (a) I understand the exclusion criteria as
        detailed in the Information Sheet and explained to me by the researcher;
        and (b) I do not fall under the exclusion criteria.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons13"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        I am aware of whom I should contact if I wish to lodge a complaint.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons14"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        Use of information for this project and beyond I would be happy for the
        data I provide to be archived at 26 Bedford Way, London, WC1H 0AP. I
        understand that other authenticated researchers at UCL will have access
        to my pseudonymised data.
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons15"
        >
          <v-radio label="Yes" value="1"> </v-radio>
          <v-radio label="No" value="0"> </v-radio> </v-radio-group
        ><br />

        <b
          >If you would like your contact details to be retained so that you can
          be contacted in the future by UCL researchers who would like to invite
          you to participate in follow up studies to this project, or in future
          studies of a similar nature, please tick the appropriate box below.</b
        >
        <v-radio-group
          :rules="[(v) => !!v || 'Please answer this question.']"
          v-model="form.cons16"
        >
          <v-radio
            label="Yes, I would be happy to be contacted in this way"
            value="1"
          >
          </v-radio>
          <v-radio label="No, I would not like to be contacted" value="0">
          </v-radio> </v-radio-group
        ><br />

        <vue-recaptcha
          ref="recaptcha"
          sitekey="6LfGEYIaAAAAANL9I9v4gbMBBbOsSrawXvKtB6RD"
          :loadRecaptchaScript="true"
          @verify="showButton = true"
        ></vue-recaptcha
        ><br />
        <v-btn
          v-show="showButton"
          color="primary"
          :disabled="!valid"
          elevation="3"
          @click="
            logId();
            saveConsentResponse();
            $router.push('select')
          "
          >Agree and continue</v-btn
        >
        <!-- logCondition(); -->
      </v-form>
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import VueRecaptcha from "vue-recaptcha";

import { writeResponseData } from "../firebaseConfig";

export default {
  components: { VueRecaptcha },
  data() {
    return {
      showInfo: true,
      showConsent: false,
      valid: false,
      showButton: false,
      form: {
        cons1: "",
        cons2: "",
        cons3: "",
        cons4: "",
        cons5: "",
        cons6: "",
        cons7: "",
        cons8: "",
        cons9: "",
        cons10: "",
        cons11: "",
        cons12: "",
        cons13: "",
        cons14: "",
        cons15: "",
        cons16: "",
      },
    };
  },
  methods: {
    displayConsent: function() {
      this.showInfo = false;
      this.showConsent = true;
      window.scrollTo(0, 0);
    },
    // logCondition() {
    //   let queryString = window.location.search;
    //   let urlParams = new URLSearchParams(queryString);
      
    //   if (urlParams.has("cond")) {
    //     let cond = urlParams.get("cond");
    //     Vue.prototype.$condition = cond;
    //   } else {
    //     Vue.prototype.$condition = "t1";
    //   }
    // },
    logId() {
      let queryString = window.location.search;
      let urlParams = new URLSearchParams(queryString);
      
      if (urlParams.has("PROLIFIC_PID")) {
        let uuid = urlParams.get("PROLIFIC_PID");
        Vue.prototype.$uuid = uuid;
      } else {
        let uuid = [...Array(32)]
          .map(() => Math.random().toString(36)[2])
          .join("");
        Vue.prototype.$uuid = uuid;
      }
    },
    saveConsentResponse() {
      writeResponseData(this.$uuid, "consent", this.form);
    },
  },
};
</script>
