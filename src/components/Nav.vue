<template>
  <div class="nav-container">
    <div class="logo">
      <router-link to="/">
        <img src="../assets/logo.png" alt="logo" />
      </router-link>
    </div>
    <div class="navbar">
      <div class="icon-bar" id="bar" v-on:click="Show">
        <i></i>
        <i></i>
        <i></i>
      </div>
      <ul id="nav-lists">
        <li class="close">
          <span id="close" v-on:click="Hide">×</span>
        </li>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/contact">Contact</router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: "Nav",
  components: {},
  data() {
    return {
      navList: ""
    };
  },
  mounted() {
    this.navList = document.getElementById("nav-lists");
  },
  methods: {
    Show: function() {
      this.navList.classList.add("_Menus-show");
    },
    Hide: function() {
      this.navList.classList.remove("_Menus-show");
    }
  }
};
</script>

<style lang="scss" scoped>
.nav-container {
  width: 100vw;
  height: 60px;
  background-color: $accent-color;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  overflow: hidden;

  .logo {
    max-width: 250px;
    padding: 0 10px;
    overflow: hidden;

    img {
      max-width: 100%;
      max-height: 60px;
    }
  }

  .navbar {
    display: flex;
    flex-wrap: wrap;
    flex: 1;
    padding: 0 10px;

    ul {
      display: flex;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
      font-weight: map-get($map: $font-weights, $key: bold);
      font-family: "Titillium Web", sans-serif;
      color: $text-color;
      font-size: 20px;
      text-transform: uppercase;
      display: block;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      padding: 0 10px;

      &:hover {
        background-color: $primary-color;
      }
    }

    .close {
      display: none;
      text-align: right;
      padding: 10px;

      span {
        font-size: 40px;
        display: inline-block;
        border: 1px solid #cccccc;
        padding: 0 10px;
        cursor: pointer;
      }
    }

    .icon-bar {
      padding: 18px 8px;
      width: 50px;
      height: 60px;
      display: none;
      flex-direction: column;
      justify-content: space-between;
      cursor: pointer;

      i {
        background-color: #ffffff;
        height: 2px;
      }
    }
  }
}

@media only screen and (max-width: 650px) {
  .nav-container {
    justify-content: space-between;

    .logo {
      flex: 1;
    }

    .navbar {
      width: 50vw;
      flex: 0;

      ul {
        flex-wrap: nowrap;
        position: fixed;
        left: 100%;
        flex-direction: column;
        background: #ffffff;
        width: 100%;
        height: 100%;
        overflow: auto;
        transition: left 0.3s;

        li {
          border: #cccccc 1px solid;
        }

        a {
          padding: 10px;
          font-size: 16px;
          height: auto;
          line-height: normal;
          color: $text-color;
        }

        .close {
          display: block;
        }
      }

      .icon-bar {
        display: flex;
      }

      ._Menus-show {
        background: $primary-color;
        left: 0;
      }
    }
  }
}
</style>
