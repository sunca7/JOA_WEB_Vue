<template>
  <div class="Home">
    <Nav />
    <!-- <div class="title-container">
      <p id="title">Joa - Paris Korea</p>
    </div>-->
    <Categories v-bind:categories="categories" />
  </div>
</template>

<script>
import Nav from "./Nav";
import Categories from "./Categories";
import db from "@/db";

export default {
  name: "Home",
  components: {
    Categories,
    Nav
  },
  data() {
    return {
      categories: []
    };
  },
  created() {
    db.collection("categories")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.categories.push(doc.data());
        });
      });
  },
  methods: {
    log(item) {
      console.log(item);
    }
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
.title-container {
  height: 150px;
  line-height: 150px;
  vertical-align: middle;
  text-align: center;

  #title {
    display: inline-block;
    height: 30vh;
    font-size: calc(1rem + 3vw);
  }
}
</style>
