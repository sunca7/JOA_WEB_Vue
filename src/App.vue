<template>
  <div id="app">
    <Home />
  </div>
</template>

<script>
import Home from "./components/Home";

export default {
  name: "app",
  components: {
    Home
  }
};
</script>

<style lang="scss">
@import url("https://fonts.googleapis.com/css?family=Roboto+Slab:200,300,400,500,600,700,800,900&display=swap");

$primary-color: #003366;

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html, body {
  background: $primary-color;
  font-family: "Roboto Slab", serif;
  color: white;
  width: 100%;
  min-height: 100vh;
}

</style>
