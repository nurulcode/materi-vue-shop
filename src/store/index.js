import Vue from "vue";
import Vuex from "vuex";
// Import one of available themes
// import toast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import product from "./product";
import cart from "./cart";
import toast from "./toast";
// Vue.use(VueToast);
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    product,
    cart,
    toast
  },
});
