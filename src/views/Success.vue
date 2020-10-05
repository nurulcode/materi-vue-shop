<template>
  <div>
    <Navbar></Navbar>
    <div class="container">
      <div class="text-center">
        <img
          src="../assets/images/undraw_eating_together_tjhx.svg"
          width="300px"
        />
        <h1 class="text-success mt-5 mb-5">Silahkan Tunggu</h1>
      </div>
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";

export default {
  name: "product",
  components: {
    Navbar,
  },
};
</script>
