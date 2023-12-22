<!-- Inbox.vue -->
<template>
  <div class="inbox-container">
    <div v-for="message in messages" :key="message.id" class="inbox-message">
      <div v-if="message.type === 'user'" class="user-inbox-message">
        <q-avatar icon="person" text-color="white" style="background-color: #0084ff;" />
        {{ message.text }}
      </div>
      <div v-else class="bot-inbox-message">
        <q-avatar icon="android" text-color="#000" style="background-color: #e5e5ea;" />
        {{ message.text }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    messages: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style scoped>
.inbox-container {
  max-width: 300px;
  border: 1px solid #ccc;
  border-radius: 5px;
  overflow-y: auto;
}

.inbox-message {
  padding: 10px;
  border-bottom: 1px solid #ccc;
}

.user-inbox-message {
  display: flex;
  align-items: center;
  background-color: #0084ff;
  color: white;
}

.bot-inbox-message {
  display: flex;
  align-items: center;
  background-color: #e5e5ea;
  color: #000;
}
</style>
