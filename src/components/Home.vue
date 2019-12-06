<template>
  <div class="Home">
    <Nav />
    <p id="title">Joa - Paris Korea</p>
    <Categories />
  </div>
</template>

<script>
import Nav from "./Nav";
import Categories from "./Categories";

export default {
  name: "Home",
  components: {
    Categories,
    Nav
  },
  data() {
    return {
    };
  },
  mounted() {
    
  },
  methods: {

  }
};
</script>


<style lang="scss">
html,
body {
  background: $primary-color;
  font-weight: map-get($map: $font-weights, $key: bold);
  font-family: "Roboto Slab", serif;
  color: white;
  width: 100%;
  min-height: 100vh;
}
</style>

<style lang="scss" scoped>
#title {
  padding-top: 10vh;
  height: 30vh;
  font-size: calc(1rem + 6vw);
  text-align: center;
}
</style>
