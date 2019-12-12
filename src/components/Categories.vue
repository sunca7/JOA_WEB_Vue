<template>
  <div class="bottom">
    <div class="categories-container">
      <Category v-bind:categories="categories" v-on:select-category="selectCategory" />
    </div>
    <div class="places-container">
      <Places v-bind:places="selected" />
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
      selected: [],
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
      this.selected = this.places.filter(
        i => i.category_id === this.categoryId
      );
    }
  }
};
</script>

<style lang="scss" scoped>
$header: 60px;

.categories-container {
  height: calc(100vh - $header);
}

// .places-container {
//   width: 100vw;
//   display: flex;
//   flex-direction: row;
// }
</style>