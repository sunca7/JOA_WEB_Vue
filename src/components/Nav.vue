<template>
    <div class="container">
      <div class="logo">
        <a href="#">
          <img src="../assets/logo.png" alt="logo" />
        </a>
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
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
      </div>
    </div>
</template>

<script>

export default {
  name: "Nav",
  components: {
  },
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
.container {
  height: 60px;
  // background-color: $accent-color;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  overflow: hidden;

  .logo {
    max-width: 250px;
    padding: 0 10px;
    overflow: hidden;

    a {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      -webkit-box-align: center;
      -ms-flex-align: center;
      align-items: center;
      height: 60px;

      img {
        max-width: 100%;
        max-height: 60px;
      }
    }
  }

  .navbar {
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    -webkit-box-flex: 1;
    -ms-flex: 1;
    flex: 1;
    padding: 0 10px;

    ul {
      display: -webkit-box;
      display: -ms-flexbox;
      display: flex;
      -ms-flex-wrap: wrap;
      flex-wrap: wrap;
      list-style: none;
      margin: 0;
      padding: 0;
    }

    a {
      text-decoration: none;
      color: #999999;
      font-size: 14px;
      text-transform: uppercase;
      display: block;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      padding: 0 10px;

      &:hover {
        color: #ffffff;
        background-color: rgba(23, 23, 23, 0.9);
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
      -webkit-box-orient: vertical;
      -webkit-box-direction: normal;
      -ms-flex-direction: column;
      flex-direction: column;
      -webkit-box-pack: justify;
      -ms-flex-pack: justify;
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
  .container {
    -webkit-box-pack: justify;
    -ms-flex-pack: justify;
    justify-content: space-between;

    .logo {
      -webkit-box-flex: 1;
      -ms-flex: 1;
      flex: 1;
    }

    .navbar {
      -webkit-box-flex: 0;
      -ms-flex: 0;
      flex: 0;

      ul {
        -ms-flex-wrap: nowrap;
        flex-wrap: nowrap;
        position: fixed;
        left: 100%;
        -webkit-box-orient: vertical;
        -webkit-box-direction: normal;
        -ms-flex-direction: column;
        flex-direction: column;
        background: #ffffff;
        width: 100%;
        height: 100%;
        overflow: auto;
        -webkit-transition: left 0.3s;
        -o-transition: left 0.3s;
        transition: left 0.3s;

        a {
          padding: 10px;
          font-size: 16px;
          height: auto;
          line-height: normal;
          color: #555555;
        }

        .close {
          display: block;
        }
      }

      .icon-bar {
        display: flex;
      }

      ._Menus-show {
        left: 0;
      }
    }
  }
}

</style>
