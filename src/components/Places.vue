<template>
  <div class="places-list">
    <div v-for="place in selectPlaces" v-bind:key="place.id" class="places">
      <!-- {{ log(place) }} -->
      <img :src="place.picture" alt="place-img" class="img-responsive" />
      <h1
        class="name-center"
        v-if="name(place.name)"
      >{{ place.name.en || place.name.fr || place.name.kr }}</h1>
    </div>
  </div>
</template>

<script>
// import router from "../router/index.js";

export default {
  name: "Places",
  props: ["places"]["categoryId"],
  data() {
    return {
      items: [],
      categoryId: ""
    };
  },
  create() {
    this.items = "places";
    this.categoryId = "categoryId";
    console.log(this.categoryId);
  },
  computed: {
    selectPlaces: function() {
      console.log(this.categoryId);
      return this.items.filter(i => i.id === this.categoryId);
    }
  },
  methods: {
    log(item) {
      console.log(item);
    },
    name(name) {
      return name ? true : false;
    }
    // redirectUser() {
    //   // this method is called on button click
    //   if (1 == 1) {
    //     router.push("/homepage");
    //     //this.$router.push('/places');
    //   }
    // }
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
  }

  .name-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
