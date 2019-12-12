<template>
  <div class="details-container">
    {{log(place)}}
    <Nav />
    <div class="details">
      <img :src="place.picture" alt />
      <div class="details-info">
        <p v-html="place.schedule.en || place.schedule.fr"></p>
        <p>{{place.phone}}</p>
        <p>{{place.address}}</p>
        <p>{{place.website}}</p>
        <p>Share</p>
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "@/components/Nav";

export default {
  name: "",
  props: ["place"],
  data() {
    return {};
  },
  components: {
    Nav
  },
  methods: {
    log(item) {
      console.log(item);
    }
  }
};
</script>

<style lang="scss" scoped>
.details-container {
  .details {
    margin-top: 20px;
    width: 80vw;
    height: 80vh;
    margin-left: auto;
    margin-right: auto;
    background: $accent-color;

    img {
      width: 100%;
    }
    .details-info {
      p {
        color: white;
        margin: 2vw;
        font-size: 3vw;
      }
    }
  }
}
</style>