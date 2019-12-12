<template>
  <div class="places-container">
    <div class="places-mapplaces-map" v-if="places.length > 0">
      <Maps v-bind:places="places" />
    </div>
    <div class="places-list">
      <div tag="div" v-for="place in places" v-bind:key="place.id" class="places">
        <router-link :to="{ name: 'details', params: {place}}">
          <img :src="place.picture" alt="place-img" class="img-responsive" />
          <h1
            class="name-center"
            v-if="name(place.name)"
          >{{ place.name.en || place.name.fr || place.name.kr }}</h1>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import Maps from "./GoogleMaps";

export default {
  name: "Places",
  props: ["places"],
  components: {
    Maps
  },
  data() {
    return {};
  },
  create() {},
  methods: {
    log(item) {
      console.log(item);
    },
    name(name) {
      return name ? true : false;
    }
  }
};
</script>

<style lang="scss">
.place-list {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
}
.places {
  width: 25vw;
  height: 30vh;
  position: relative;
  text-align: center;
  color: white;
  img {
    width: 100%;
    height: 100%;
    opacity: 0.3;
  }

  &:hover {
    img {
      opacity: 1;
    }
  }
  .name-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>

<style lang="scss">
.place-list {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
}

.places {
  width: 25vw;
  height: 30vh;
  position: relative;
  text-align: center;
  color: white;

  img {
    width: 100%;
    height: 100%;
  }

  .name-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
