<template>
  <div class="Categories">
    <Category id="category" v-bind:categories="categories" />
    <Places id="places" v-bind:places="places" />
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
#category {
  padding-top: 5vh;
  height: 60vh;
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  flex-wrap: wrap;
  color: red;
}

#places {
  width: 30vw;
}
</style>
