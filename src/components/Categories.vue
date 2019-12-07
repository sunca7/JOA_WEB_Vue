<template>
  <div class="Categories">
    <Category id="category" />
  </div>
</template>

<script>
import Category from "./Category";

export default {
  name: "Categories",
  components: {
    Category
  },
  data() {
    return {
      categories: []
    };
  }
};
</script>

<style lang="scss" scoped>
#category {
  padding-top: 5vh;
  height: 60vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  flex-wrap: wrap;
  color: red;
}
</style>
