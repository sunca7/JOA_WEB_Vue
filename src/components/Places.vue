<template>
  <div class="places-container">
    <div v-for="place in places" v-bind:key="place.id" class="places">
      {{ log(place) }}
      <div class="place-box">
        <img :src="place.picture" alt="place-img" class="img-responsive" />
        <div class="place-name">
          <h1>{{ place.name }}</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Places",
  props: ["places"],
  methods: {
    log(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="scss">
.places-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  img {
    z-index: 1;
  }
}
</style>
