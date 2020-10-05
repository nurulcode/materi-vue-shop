<template>
  <div class="notification-list">
    <NotificationMessage></NotificationMessage>
  </div>
</template>

<script>
import NotificationMessage from "@/components/NotificationMessage.vue";

export default {
  name: "NotificationList",
  components: {
    NotificationMessage,
  },
};
</script>

<style scoped>
.notification-list {
  position: fixed;
  top: 0;
  right: 0;
  margin: 10px;
  width: 320px;
}
</style>