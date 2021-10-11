<template>
  <div class="likert">
    <div class="statement">{{ name }}</div>
    <v-radio-group
      :rules="[(v) => !!v || 'Please answer this question']"
      v-model="response"
    >
      <v-layout row wrap>
        <v-flex column>
          <v-radio
            value="0"
            aria-required="true"
            required
            :name="name"
            @click="$emit('response_clicked', [name, Date.now(), 0])"
          >
          </v-radio>
          <p>0</p>
        </v-flex>
        <v-flex column>
          <v-radio
            value="1"
            aria-required="true"
            required
            :name="name"
            @click="$emit('response_clicked', [name, Date.now(), 1])"
          >
          </v-radio>
          <p>1</p>
        </v-flex>
        <v-flex column>
          <v-radio
            value="2"
            aria-required="true"
            required
            :name="name"
            @click="$emit('response_clicked', [name, Date.now(), 2])"
          >
          </v-radio>
          <p>2</p>
        </v-flex>
        <v-flex column>
          <v-radio
            value="3"
            aria-required="true"
            required
            :name="name"
            @click="$emit('response_clicked', [name, Date.now(), 3])"
          >
          </v-radio>
          <p>3</p>
        </v-flex>
        <v-flex column>
          <v-radio
            value="4"
            aria-required="true"
            required
            :name="name"
            @click="$emit('response_clicked', [name, Date.now(), 4])"
          >
          </v-radio>
          <p>4</p>
        </v-flex>
      </v-layout>
      <template v-slot:prepend>
        <h4>Not at all</h4>
      </template>
      <template v-slot:append>
        <h4>Totally</h4>
      </template>
    </v-radio-group>
  </div>
</template>

<script>
export default {
  props: ["name"],
  data() {
    return {
      response: 0,
      reponded: false,
    };
  },
};
</script>

<style scoped>
.statement {
  font-weight: bold;
  font-size: 26px;
  margin-top: 75px;
  margin-bottom: 25px;
}

p {
  font-size: 20px;
}
</style>
