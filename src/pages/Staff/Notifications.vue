<template>
  <div class="notification-container">
    <q-btn @click="showOrderNotification" label="Order Purchased" color="primary" />
    <q-btn @click="showRatingNotification" label="Rating Notification" color="positive" />

    <!-- Notification component -->
    <q-notification
      v-model="notification.visible"
      :message="notification.message"
      :caption="notification.caption"
      :type="notification.type"
      :timeout="3000"
      position="top-right"
    >
      <template v-slot:info>
        <q-item-section side top>
          <q-item-label caption>Static Information</q-item-label>
          <q-item-label caption>Additional details can be added here.</q-item-label>
        </q-item-section>
      </template>
    </q-notification>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      notification: {
        visible: false,
        message: '',
        caption: '',
        type: '',
      },
    };
  },
  methods: {
    showOrderNotification() {
      const message = 'Order Purchased';
      const staticInfo = 'Your order has been successfully processed.';
      const caption = 'Thank you for your purchase!';
      const type = 'positive';

      this.showNotification(message, caption, type, staticInfo);
    },
    showRatingNotification() {
      const message = 'Rating Notification';
      const staticInfo = 'You received a new rating!';
      const caption = 'Rating Notification';
      const type = 'info';

      this.showNotification(message, caption, type, staticInfo);
    },
    showNotification(message, caption, type, staticInfo) {
      this.notification = {
        visible: true,
        message: `${message}\n${staticInfo}`, // Concatenate static info with the message
        caption,
        type,
      };

      setTimeout(() => {
        this.notification.visible = false;
      }, 3000); // Hide the notification after 3 seconds (adjust as needed)
    },
  },
};
</script>

<style scoped>
.notification-container {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  padding: 20px;
}
</style>
