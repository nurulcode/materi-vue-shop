<template>
  <div id="app">
    <div id="nav">
      <transition>
        <router-view></router-view>
      </transition>
    </div>
    <div>
      <Footer></Footer>
    </div>
  </div>
</template>

<script>
import Footer from "@/components/Footer.vue";
// import NotificationList from "@/components/NotificationList.vue";
export default {
  components: {
    Footer,
  },
};
</script>