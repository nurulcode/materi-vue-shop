<template>
  <div class="card shadow mt-5">
    <img
      class="card-img-top"
      :src="'./assets/images/' + product.gambar"
      alt="Card image cap"
    />
    <div class="card-body">
      <h5 class="card-title">{{ product.gambar }}</h5>
      <p class="card-text">Harga : Rp. {{ product.harga }}</p>

      <router-link :to="'/products/' + product.id" class="btn btn-success">
        <b-icon-cart></b-icon-cart> Pesan
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardProduct",
  props: ["product"],
};
</script>
