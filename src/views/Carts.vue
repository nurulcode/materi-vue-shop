<template>
  <div>
    <Navbar :updateCarts="carts"></Navbar>
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
              <strong>Detail Carts</strong>
            </li>
          </ol>
        </nav>
      </div>

      <h2>Keranjang Saya</h2>
      <div class="row">
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr class="text-center">
                <th scope="col">#</th>
                <th scope="col">Foto</th>
                <th scope="col">Makanan</th>
                <th scope="col">Keterangan</th>
                <th scope="col">Jumlah</th>
                <th scope="col">Herga</th>
                <th scope="col">Harga Total</th>
                <th scope="col">Hapus</th>
              </tr>
            </thead>
            <tbody>
              <tr v-for="(cart, index) in carts" :key="cart.id">
                <th scope="row">{{ index + 1 }}</th>
                <td class="text-center">
                  <img
                    :src="'../assets/images/' + cart.product.gambar"
                    class="img-fluid shadow"
                    width="250px"
                  />
                </td>
                <td>{{ cart.product.nama }}</td>
                <td>{{ cart.keterangan ? cart.keterangan : "-" }}</td>
                <td class="text-center">{{ cart.jumlah_pesanan }}</td>
                <td class="text-center">{{ cart.product.harga }}</td>
                <td class="text-center">
                  {{ cart.product.harga * cart.jumlah_pesanan }}
                </td>
                <td class="text-center text-danger">
                  <b-icon-trash @click="deleteCart(cart.id)"></b-icon-trash>
                </td>
              </tr>
              <tr class="font-weight-bold">
                <td colspan="6" class="text-right">Total Harga Rp.</td>
                <td colspan="2" class="text-center">
                  {{ totalHarga }}
                </td>
              </tr>
              <tr>
                <td colspan="6"></td>
                <td colspan="2">
                  <form @submit.prevent="onSubmit" v-if="carts.length">
                    <div class="form-group">
                      <label>Nama</label>
                      <input
                        v-model="pesan.nama"
                        type="text"
                        class="form-control"
                      />
                      <label for="nomor_meja">Nomor Meja</label>
                      <input
                        v-model="pesan.nomor_meja"
                        type="number"
                        class="form-control"
                      />
                    </div>
                    <hr />
                    <button class="btn btn-success">
                      <b-icon-check-all></b-icon-check-all> Checkout
                    </button>
                  </form>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "Carts",
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
      getCarts: "cart/getCarts",
      delete: "cart/deleteCart",
    }),

    deleteCart(id) {
      this.delete(id)
    },
    onSubmit() {
      if (!this.pesan.nama && !this.pesan.nomor_meja) {
        return this.$store.dispatch('toast/toastError', 'Data tidak boleh kosong')
      }
      this.pesan.carts = this.carts;
console.log(this.pesan);
      this.axios.post("/pesanans", this.pesan).then(() => {
        this.$store.dispatch('toast/toastSuccess', 'Silahkan tunggu pesanan')
        this.$router.push("/success");

        this.carts.map((x) => {
          console.log(x);
          return this.axios.delete("/keranjangs/" + x.id).then(() => {});
        });
      });
    },
  },
  computed: {
    ...mapGetters({
      carts: "cart/carts",
    }),
    totalHarga() {
      return this.carts.reduce((items, cart) => {
        return items + cart.product.harga * Number(cart.jumlah_pesanan);
      }, 0);
    },
  },
  mounted() {
    this.getCarts();
  },
};
</script>
