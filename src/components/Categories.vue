<template>
  <div class="bottom">
    <div class="categories-container">
      <Category class="categories" v-bind:categories="categories" />
    </div>
    <div class="places-container">
      <Places v-bind:places="places" />
    </div>
  </div>
</template>

<script>
import Category from "./Category";
import Places from "./Places";
import db from "@/db";

export default {
  name: "Categories",
  props: ["categories"],
  components: {
    Category,
    Places
  },
  data() {
    return {
      places: []
    };
  },
  created() {
    db.collection("places")
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.places.push(doc.data());
        });
      });
  }
};
</script>

<style lang="scss" scoped>
.categories-container {
  height: calc(100vh - 60px);
}

.categories {
  height: calc(100vh - 60px);
}
</style>
