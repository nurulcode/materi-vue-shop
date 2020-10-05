<template>
  <div class="product">
    <Navbar></Navbar>

    <div class="container">
      <div class="row">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb">
            <li class="breadcrumb-item">
              <router-link to="/">Home</router-link>
            </li>
            <li class="breadcrumb-item">
              <router-link to="/foods">Foods</router-link>
            </li>
            <li class="breadcrumb-item active" aria-current="page">
              <strong>Detail Product</strong>
            </li>
          </ol>
        </nav>
      </div>

      <div class="row">
        <div class="col-md-6">
          <img
            :src="'../assets/images/' + product.gambar"
            class="img-fluid shadow"
          />
        </div>

        <div class="col-md-6">
          <h1>{{ product.nama }}</h1>
          <hr />
          <p>
            Harga : <strong>Rp. {{ product.harga }}</strong>
          </p>

          <form @submit.prevent="onSubmit">
            <div class="form-group">
              <label for="pesan">Jumlah Pesanan</label>
              <input
                v-model="pesan.jumlah_pesanan"
                type="number"
                name="pesan"
                id="pesan"
                class="form-control"
                placeholder=""
                aria-describedby=""
              />
              <label for="keterangan">Keterangan</label>
              <input
                v-model="pesan.keterangan"
                type="text"
                name="keterangan"
                id="keterangan"
                class="form-control"
                placeholder="Pedas, Nasi Setengan Dst..."
                aria-describedby=""
              />
            </div>
            <hr />
            <button class="btn btn-success">
              <b-icon-cart></b-icon-cart> Pesan
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "product",
  components: {
    Navbar,
  },
  data() {
    return {
      pesan: {},
    };
  },
  methods: {
    ...mapActions({
      getProduct: "product/getProduct",
    }),
    onSubmit() {
      if (!this.pesan.jumlah_pesanan) {
        return this.$store.dispatch('toast/toastError', 'Jumlah pesanan tidak boleh kosong')
      }

      this.pesan.product = this.product;
      this.axios
        .post("/keranjangs/", this.pesan)
        .then(() => {
          this.$router.push("/carts");
          this.$store.dispatch('toast/toastSuccess', 'Berhasil di masukan barang ke keranjang')
        })
        .catch((error) => {
          this.$store.dispatch('toast/toastError', 'Gagal di masukan barang ke keranjang')
          console.log(error);
        });
    },
  },
  computed: {
    ...mapGetters({
      product: "product/product",
    }),
  },
  mounted() {
    this.getProduct(this.$route.params.id);
  },
};
</script>
