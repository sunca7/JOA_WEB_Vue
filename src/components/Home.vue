<template>
  <div class="Home">
    <nav>
      <div class="nav-wrapper">
        <img id="logo" src="../assets/logo.png" alt="logo">
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
  padding: auto;
  width: 100%;
  height: calc(1rem + 6vw);
  background: black;
}

#logo {
padding: 0.3vw;
margin-left: 2vw;
width: 7vw;
 line-height: calc(1rem + 6vw);
vertical-align: middle;
}

#title {
    padding-top: 10vh;
    height: 30vh;
  font-size: calc(1rem + 6vw);
  text-align: center;
}
</style>