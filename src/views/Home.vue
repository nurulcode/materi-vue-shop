<template>
  <div class="home">
    <Navbar></Navbar>
    <div class="container">
      <Hero></Hero>
      <div class="row">
        <div class="col">
          <h2>Best <strong>Foods</strong></h2>
        </div>

        <div class="col">
          <router-link to="/foods" class="btn btn-success float-right">
            <b-icon-eye></b-icon-eye> See All</router-link
          >
        </div>
      </div>
      <hr />
      <div class="row">
        <div
          class="col-md-4 mb-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product"></CardProduct>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Hero from "@/components/Hero.vue";
import CardProduct from "@/components/CardProduct.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Home",
  components: {
    Navbar,
    Hero,
    CardProduct,
  },
  computed: {
    ...mapGetters({
      products: "product/products",
    }),
  },

  methods: {
    ...mapActions({
      getProducts: "product/get",
    }),
  },
  mounted() {
    this.getProducts();
  },
};
</script>
