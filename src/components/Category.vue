<template>
  <div class="categories">
    <div
      v-for="category in categories"
      v-bind:key="category.order"
      class="category"
      @click="$emit('select-category', category.id)"
    >
      <a href="#">
        <img :src="category.picture" alt="category-img" class="category-img" />
      </a>
      <h1 class="name-center">{{ category.name.en }}</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: "Category",
  props: ["categories"]
};
</script>

<style lang="scss" scoped>
.categories {
  display: grid;
  grid-template-columns: 1fr 1fr;
}

.category {
  position: relative;
  text-align: center;
  color: white;

  img {
    opacity: 0.3;
    width: 100%;
    height: 100%;
  }

  &:hover {
    img {
      opacity: 1;
    }
  }

  .name-center {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
