import axios from "axios";
const url = process.env.VUE_APP_URL;



export default {
  namespaced: true,
  state: {
    products: [],
    product: {}
  },

  mutations: {
    set: (state, payload) => {
      state.products = payload;
    },
    setProduct: (state, payload) => {
      state.product = payload;
    },
  },
  actions: {
    get: ({ commit }) => {
      axios
        .get(url + "/products")
        .then((response) => {
          commit("set", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
    getProduct: ({ commit }, payload) => {
      axios
        .get(url + "/products/" + payload)
        .then((response) => {
          commit("setProduct", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    search: ({commit }, payload) => {
      axios
        .get(url + "/products?q=" + payload)
        .then((response) => {
          commit("set", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
  getters: {
    products: (state) => state.products,
    product: (state) => state.product,
  },
};
