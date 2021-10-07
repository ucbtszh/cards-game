<template>
  <div class="likert">
    <v-radio-group :rules="[(v) => !!v || 'This field is required']">
      <div class="statement">{{ name }}</div>
      <br />
      <v-layout row wrap>
        <v-flex column>
          <v-radio
            value="1"
            aria-required="true"
            required
            :name="name"
            @click="$emit('response_clicked', [name, Date.now(), 1])"
          ></v-radio>
          <p>Strongly disagree</p>
        </v-flex>
        <v-flex column>
          <v-radio
            value="2"
            aria-required="true"
            required
            :name="name"
            @click="$emit('response_clicked', [name, Date.now(), 2])"
          ></v-radio>
          <p>Slightly disagree</p>
        </v-flex>
        <v-flex column>
          <v-radio
            value="3"
            aria-required="true"
            required
            :name="name"
            @click="$emit('response_clicked', [name, Date.now(), 3])"
          ></v-radio>
          <p>Slightly agree</p>
        </v-flex>
        <v-flex column>
          <v-radio
            value="4"
            aria-required="true"
            required
            :name="name"
            @click="$emit('response_clicked', [name, Date.now(), 4])"
          ></v-radio>
          <p>Strongly agree</p>
        </v-flex>
      </v-layout>
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
  margin-top: 30px;
  margin-bottom: 30px;
}

p {
  font-size: 16pt;
}
</style>
