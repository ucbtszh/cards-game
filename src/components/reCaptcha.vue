<template>
  <vue-recaptcha
    sitekey="6LfR94EaAAAAAH9Kdvb0xT3OB8vfSohqTPB_k6BH"
    :loadRecaptchaScript="true"
    @verify="$emit('verified')"
  >
  </vue-recaptcha>
</template>

<script>
import VueRecaptcha from "vue-recaptcha";
export default {
  components: { VueRecaptcha },
};
</script>
