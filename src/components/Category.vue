<template>
  <div class="categories">
    <div v-for="category in categories" v-bind:key="category.order" class="category">
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

//   &:hover {
//     .category-name {
//       opacity: 0.9;
//       transition: 0.3s;
//     }

//     img {
//       opacity: 0.3;
//     }
//   }

//   img {
//     display: block;
//     margin: 0 auto;
//     opacity: 1;
//     transition: 0.3s;
//   }
// }

//   h1 {
//     font-size: calc(3rem + 1vw);
//     color: white;
//     position: absolute;
//     top: 40%;
//     left: 20%;
//   }
</style>
