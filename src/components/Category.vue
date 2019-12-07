<template>
  <section id="categories">
    <div
      v-for="category in categories"
      v-bind:key="category.id"
      class="category"
    >
      <a href="#" class="places darken">
        <img :src="category.picture" alt="category-img" />
        <div class="category-name">
          <h1>{{ category.name.en }}</h1>
        </div>
      </a>
    </div>
  </section>
</template>

<script>
import db from "@/db";

export default {
  name: "Category",
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
  }
};
</script>

<style lang="scss" scoped>
.categories {
  width: 100vw;
}

.category {
  position: relative;

  &:hover {
    .category-name {
      opacity: 0.9;
      transition: 0.3s;
    }

    img {
      opacity: 0.3;
    }
  }

  img {
    display: block;
    margin: 0 auto;
    opacity: 1;
    transition: 0.3s;
  }
}

.category-name {
  width: 100%;
  text-align: center;
  opacity: 0;
  transition: 0.3s;

  h1 {
    color: white;
    position: absolute;
    top: 50%;
    left: 45%;
  }
}
</style>
