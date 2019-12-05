<template>
  <div class="Home">
    <nav>
      <div class="nav-wrapper">
        <div class="joa-logo"></div>
      </div>
    </nav>
    <p id="title">Joa - Paris Korea</p>
    <Categories />
  </div>
</template>

<script>
import Categories from "./Categories";

export default {
  name: "Home",
  components: {
    Categories
  }
};
</script>

<style lang="scss" scoped>
nav {
  width: 100%;
  height: calc(1rem + 6vw);
  background: black;
}

#title {
    padding-top: 10vh;
    height: 30vh;
  font-size: calc(1rem + 6vw);
  text-align: center;
}
</style>