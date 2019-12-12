<template>
  <div>
    <GmapMap :center="center" :map-type-id="mapTypeId" :zoom="12">
      <GmapMarker
        v-for="(item, index) in selectedPlaces"
        :key="index"
        :position="item.position"
        @click="center = item.position"
      />
    </GmapMap>
  </div>
</template>

<script>
export default {
  name: "Maps",
  props: ["places"],
  data() {
    return {
      center: { lat: 48.8566, lng: 2.3522 },
      mapTypeId: "terrain",
      markers: [],
      selectedPlaces: [],
      currentPlace: null
    };
  },
  mounted() {
    this.processMarkers();
  },
  watch: {
    places: function() {
      this.selectedPlaces = this.places.map(function(place, index) {
        return {
          key: index,
          position: { lat: place.latitude, lng: place.longitude },
          name: place.name.en || place.name.kr || place.name.fr
        };
      });
    }
  },
  methods: {
    log(item) {
      console.log(item);
    },
    processMarkers() {
      console.log(this.places);
      this.selectedPlaces = this.places.map(function(place, index) {
        return {
          key: index,
          position: { lat: place.latitude, lng: place.longitude },
          name: place.name.en || place.name.kr || place.name.fr
        };
      });
    }
  }
};
</script>

<style lang="scss" scoped>
.vue-map-container {
  height: 450px;
  max-width: 992px;
  width: 100%;
}
</style>