<template>
  <div>
    <Rate
      v-show="showrate1"
      :charm="$charm1"
      :term="'lucky'"
      :index="1"
      @done="
        showrate1 = false;
        showrate2 = true;
      "
    />

    <Rate
      v-show="showrate2"
      :charm="$charm1"
      :term="'visually appealing'"
      :index="1"
      @done="
        showrate2 = false;
        showrate3 = true;
      "
    />

    <Rate
      v-show="showrate3"
      :charm="$charm2"
      :term="'lucky'"
      :index="2"
      @done="
        showrate3 = false;
        showrate4 = true;
      "
    />

    <Rate
      v-show="showrate4"
      :charm="$charm2"
      :term="'visually appealing'"
      :index="2"
      @done="$router.push('instruction')"
    />
  </div>
</template>

<script>
import Rate from "../components/RateLuck.vue";

export default {
  components: { Rate },
  data() {
    return {
      showrate1: true,
      showrate2: false,
      showrate3: false,
      showrate4: false,
    };
  },
};
</script>
