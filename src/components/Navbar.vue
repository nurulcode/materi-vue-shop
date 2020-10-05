<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <router-link class="nav-link" to="/">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link class="nav-link" to="/foods">Foods</router-link>
          </li>
        </ul>

        <ul class="navbar-nav ml-auto">
          <li class="nav-item inline">
            <router-link class="nav-link" to="/carts">
              <b-icon-bag></b-icon-bag>
              <span class="badge badge-success ml-2">{{ updateCarts ? updateCarts.length : carts.length }}</span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
// @ is an alias to /src
export default {
  name: "Navbar",
  props:['updateCarts'],
  data() {
    return {
      carts: [],
    };
  },
  methods: {
    setCart(data) {
      this.carts = data;
    },
  },
  mounted() {
    this.axios
      .get( "/keranjangs")
      .then((response) => {
        this.setCart(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
