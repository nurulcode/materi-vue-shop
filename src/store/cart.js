import axios from "axios";

const url = process.env.VUE_APP_URL;

export default {
  namespaced: true,
  state: {
    carts: [],
  },

  mutations: {
    insert: (state, payload) => {
      state.carts = payload;
    },
  },

  actions: {
    getCarts: ({ commit }) => {
      axios
        .get(url + "/keranjangs")
        .then((response) => {
          commit("insert", response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    },

    deleteCart: ({ dispatch }, payload) => {
      axios
        .delete(url + "/keranjangs/" + payload)
        .then(() => {
          dispatch('toast/toastSuccess', 'Data has been deleted', { root : true})
          dispatch("getCarts");
        })
        .catch((error) => {
          dispatch('toast/toastError', 'Failed delete data', { root : true})
          console.log(error);
        });
    },
  },

  getters: {
    carts: (state) => state.carts,
  },
};
