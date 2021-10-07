<template>
  <div class="likert">
    <div class="statement">{{ name }}</div>
    <v-card-text>
      <v-slider
        v-model="response"
        :min="1"
        :max="5"
        @click="$emit('response_clicked', [name, Date.now(), response])"
        :rules="[!!response || 'Please answer this question']"
        step="1"
        ticks="always"
        tick-size="10"
        ><template v-slot:prepend>
          <h4>Not at all</h4>
        </template>
        <template v-slot:append>
          <h4>Totally</h4>
        </template>
      </v-slider>
    </v-card-text>
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
</style>
