<template>
  <section id="categories">
    <div
      v-for="category in categories"
      v-bind:key="category.order"
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
export default {
  name: "Category",
  props: ["categories"]
};
</script>

<style lang="scss" scoped>
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
    font-size: calc(3rem + 1vw);
    color: white;
    position: absolute;
    top: 40%;
    left: 20%;
  }
}
</style>
