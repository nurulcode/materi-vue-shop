import toast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

export default {
  namespaced: true,
  state: {
    position: "topRight",
    timeout: 2000
  },

  actions: {
    toastSuccess: ({ state }, payload) => {
      toast.success({
        title: "Success",
        message: payload,
        timeout: state.timeout,
        position: state.position,
      });
    },
    toastInfo: ({ state }, payload) => {
      toast.info({
        title: "Info",
        message: payload,
        timeout: state.timeout,
        position: state.position,
      });
    },
    toastWarning: ({ state }, payload) => {
      toast.warning({
        title: "Warning",
        message: payload,
        timeout: state.timeout,
        position: state.position,
      });
    },
    toastError: ({ state }, payload) => {
      toast.error({
        title: "Error",
        message: payload,
        timeout: state.timeout,
        position: state.position,
      });
    },
  },
};
