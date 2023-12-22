<template>
  <div class="q-pa-md">
    <q-list bordered>
      <q-item
        v-for="user in users"
        :key="user.id"
        clickable
        v-ripple
        @click="selectUser(user)"
        :active="selectedUser && selectedUser.id === user.id"
      >
        <q-item-section avatar>
          <q-avatar>
            <!-- Use q-icon instead of img for icon -->
            <q-icon :name="user.icon" size="2em" />
          </q-avatar>
        </q-item-section>

        <q-item-section>
          <q-item-label>{{ user.name }}</q-item-label>
          <q-item-label caption>{{ user.lastMessage.content }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>{{ user.lastMessage.time }}</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>

    <div v-if="selectedUser">
      <div class="message-container">
        <div v-for="message in selectedUser.messages" :key="message.id" class="message">
          <div class="message-content" :class="{ 'own-message': message.sender === 'You' }">
            <div>{{ message.sender }}:</div>
            <div>{{ message.content }}</div>
            <div class="message-time">{{ message.time }}</div>
          </div>
        </div>
      </div>

      <!-- Input area for sending messages -->
      <div class="input-area">
        <q-input v-model="newMessage" placeholder="Type your message..." dense />
        <q-btn @click="sendMessage" label="Send" color="primary" dense />
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  data() {
    return {
      users: [
        {
          id: 1,
          name: 'John Doe',
          icon: 'mdi-account',
          messages: [
            { id: 1, sender: 'John Doe', content: 'Do you have stocks?!', time: '10:00 AM' },
            // ... (more messages for John Doe)
          ],
          lastMessage: { content: 'Do you have stocks?!', time: '10:00 AM' },
        },
        {
          id: 2,
          name: 'Jane Doe',
          icon: 'mdi-account-circle',
          messages: [
            { id: 1, sender: 'You', content: 'Is this chicken available for pickup?', time: '10:30 AM' },
            // ... (more messages for Jane Doe)
          ],
          lastMessage: { content: 'Is this chicken available for pickup?', time: '10:30 AM' },
        },
        {
          id: 3,
          name: 'Alice Smith',
          icon: 'mdi-account-heart',
          messages: [
            { id: 1, sender: 'Alice Smith', content: 'The products are good.', time: '11:00 AM' },
            // ... (more messages for Alice Smith)
          ],
          lastMessage: { content: 'The products are good.', time: '11:00 AM' },
        },
        {
          id: 4,
          name: 'Bob Johnson',
          icon: 'mdi-account-multiple',
          messages: [
            { id: 1, sender: 'Bob Johnson', content: 'Im good for pickup', time: '11:30 AM' },
            // ... (more messages for Bob Johnson)
          ],
          lastMessage: { content: 'Im good for pickup', time: '11:30 AM' },
        },
        // ... (more users)
      ],
      selectedUser: null,
      newMessage: '',
    };
  },
  methods: {
    selectUser(user) {
      this.selectedUser = user;
    },
    sendMessage() {
      if (this.newMessage.trim() !== '' && this.selectedUser) {
        const currentTime = new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
        this.selectedUser.messages.push({
          id: this.selectedUser.messages.length + 1,
          sender: 'You',
          content: this.newMessage,
          time: currentTime,
        });
        this.selectedUser.lastMessage = {
          content: this.newMessage,
          time: currentTime,
        };
        this.newMessage = ''; // Clear the input field after sending
      }
    },
  },
};
</script>

<style scoped>
/* Add your component-specific styles here */
.message-container {
  max-height: 300px;
  overflow-y: auto;
  border: 1px solid #ccc;
  padding: 10px;
  margin-bottom: 10px;
}

.message {
  margin-bottom: 10px;
}

.message-content {
  display: flex;
  flex-direction: column;
}

.own-message {
  align-items: flex-end;
}

.input-area {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
</style>
