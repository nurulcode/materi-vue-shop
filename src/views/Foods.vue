<template>
  <div class="foods">
    <Navbar></Navbar>
    <div class="container">
      <div class="row mb4">
        <div class="col">
          <h2>Pesan <strong>Food</strong></h2>
        </div>
      </div>

      <div class="row mt-3">
        <div class="col">
          <div class="input-group mb-3">
            <input
              v-model="search"
              type="text"
              class="form-control"
              placeholder="Recipient's username"
              @keyup="searchProduct"
            />
            <div class="input-group-append">
              <span class="input-group-text" id="basic-addon2">Search</span>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <div class="row" v-if="products.length">
        <div
          class="col-md-4 mb-4"
          v-for="product in products"
          :key="product.id"
        >
          <CardProduct :product="product"></CardProduct>
        </div>
      </div>

      <div class="container" v-else>
        <div class="text-center">
          <h1 class="font-weight-bold">Food not found</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import CardProduct from "@/components/CardProduct.vue";

import { mapActions, mapGetters } from "vuex";

export default {
  name: "foods",
  components: {
    Navbar,
    CardProduct,
  },
  data() {
    return {
      search: "",
    };
  },
  computed: {
    ...mapGetters({
      products: "product/products",
    }),
  },
  methods: {
    ...mapActions({
      getProducts: "product/get",
      getSearch: "product/search",
    }),

    searchProduct() {
      this.getSearch(this.search);
    },
  },

  mounted() {
    this.getProducts();
  },
};
</script>