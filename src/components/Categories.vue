<template>
  <div class="bottom">
    <div class="categories-container">
      <Category v-bind:categories="categories" v-on:select-category="selectCategory" />
    </div>
    <div class="places-container">
      <Places v-bind:places="places" v-bind:categoryId="this.categoryId" />
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
      places: [],
      categoryId: ""
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
  },
  methods: {
    selectCategory(id) {
      this.categoryId = id;
      console.log("Categories " + this.categoryId);
    }
  }
};
</script>

<style lang="scss" scoped>
$header: 60px;

.categories-container {
  height: calc(100vh - $header);
}
</style>
