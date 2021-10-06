<template>
  <div class="likert">
    <v-radio-group :rules="[(v) => !!v || 'This field is required']">
      <div class="statement">{{ name }}</div>
      <br />
      <v-radio
        label="Not at all"
        value="1"
        aria-required="true"
        required
        :name="name"
        @click="
          $emit('response_clicked', [
            name,
            Date.now(),
            1
          ])
        "
      ></v-radio>
      <v-radio
        label=""
        value="2"
        aria-required="true"
        required
        :name="name"
        @click="
          $emit('response_clicked', [
            name,
            Date.now(),
            2
          ])
        "
      ></v-radio>
      <v-radio
        label=""
        value="3"
        aria-required="true"
        required
        :name="name"
        @click="
          $emit('response_clicked', [
            name,
            Date.now(),
            3
          ])
        "
      ></v-radio>
      <v-radio
        label=""
        value="4"
        aria-required="true"
        required
        :name="name"
        @click="
          $emit('response_clicked', [
            name,
            Date.now(),
            4
          ])
        "
      ></v-radio>
      <v-radio
        label="Totally"
        value="5"
        aria-required="true"
        required
        :name="name"
        @click="
          $emit('response_clicked', [
            name,
            Date.now(),
            5
          ])
        "
      ></v-radio>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  props: ["name"],
};
</script>

<style scoped>
.statement {
  font-weight: bold;
  font-size: 26px;
  margin-bottom: 10px;
}
</style>