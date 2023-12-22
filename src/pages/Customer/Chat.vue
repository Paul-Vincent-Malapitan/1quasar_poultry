<template>
  <div class="chat-container">
    <div class="chat-messages">
      <div v-for="message in messages" :key="message.id" class="message-container">
        <div v-if="message.type === 'user'" class="user-message message">
          <q-avatar icon="person" text-color="white" style="background-color: #0084ff;" />
          {{ message.text }}
        </div>
        <div v-else class="bot-message message">
          <q-avatar icon="android" text-color="#000" style="background-color: #e5e5ea;" />
          {{ message.text }}
        </div>
      </div>
    </div>
    <div class="chat-input">
      <input v-model="newMessage" @keyup.enter="sendMessage" placeholder="Type your message..." />
      <q-btn icon="send" @click="sendMessage" flat round color="primary" class="action-button" />
      <q-btn icon="insert_emoticon" @click="showEmojiPicker" flat round color="primary" class="action-button" />
      <q-btn icon="attach_file" @click="attachFile" flat round color="primary" class="action-button" />
      <q-btn icon="mic" @click="startRecording" flat round color="primary" class="action-button" />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      messages: [
        { id: 1, type: 'user', text: 'Hello, Bot!' },
        { id: 2, type: 'bot', text: 'Hi there! How can I help you today?' },
        { id: 3, type: 'user', text: 'I have a question about your services.' },
        { id: 4, type: 'bot', text: 'Sure, go ahead and ask. I\'m here to assist you.' }
        // Add more messages as needed
      ],
      newMessage: '',
    };
  },
  methods: {
    sendMessage() {
      if (this.newMessage.trim() !== '') {
        this.messages.push({ id: Date.now(), type: 'user', text: this.newMessage.trim() });
        // Simulate bot response
        this.messages.push({ id: Date.now() + 1, type: 'bot', text: 'Bot response: This is just a sample message.' });
        this.newMessage = ''; // Clear the input field
      }
    },
    showEmojiPicker() {
      // Placeholder function for showing emoji picker
      console.log('Show emoji picker');
    },
    attachFile() {
      // Placeholder function for attaching files
      console.log('Attach file');
    },
    startRecording() {
      // Placeholder function for starting audio recording
      console.log('Start recording');
    },
  },
};
</script>

<style scoped>
.chat-container {
  display: flex;
  flex-direction: column;
  height: 400px; /* Fixed height for the chat container */
  border: 1px solid #ccc;
  border-radius: 5px;
}

.chat-messages {
  flex: 1;
  overflow-y: auto;
  padding: 10px;
}

.message-container {
  display: flex;
  justify-content: flex-start; /* Align user messages to the left */
  margin-bottom: 10px;
}

.message {
  display: flex;
  align-items: center;
  padding: 8px;
  border-radius: 10px;
  max-width: 70%;
}

.user-message {
  background-color: #0084ff;
  color: white;
}

.bot-message {
  background-color: #e5e5ea;
  color: #000;
}

.chat-input {
  display: flex;
  align-items: center;
  padding: 10px;
  background-color: #f0f0f0;
}

input {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-right: 10px;
}

.action-button {
  margin-left: 5px;
}
</style>
