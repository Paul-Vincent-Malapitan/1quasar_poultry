<template>
  <div>
    <q-card>
      <q-card-title>
        Create User Account
      </q-card-title>

      <q-card-section>
        <q-form @submit.prevent>
          <q-field label="Name">
            <q-input v-model="user.name" required />
          </q-field>

          <q-field label="Email Address">
            <q-input v-model="user.email" required type="email" />
          </q-field>

          <q-field label="Password">
            <q-input v-model="user.password" required type="password" />
          </q-field>

          <q-field label="Contact Number">
            <q-input v-model="user.contact" required />
          </q-field>

          <q-field label="Address">
            <q-input v-model="user.address" required />
          </q-field>

          <q-field label="Role">
            <q-select v-model="user.role" required :options="roles" />
          </q-field>

          <q-btn type="submit" color="primary" label="Create User" />
        </q-form>
      </q-card-section>

      <q-card-actions>
        <q-btn flat label="Cancel" @click="cancel" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: '',
        contact: '',
        address: '',
        role: '',
      },
      roles: [
        { label: 'Admin', value: 'admin' },
        { label: 'Staff', value: 'staff' },
        { label: 'Customer', value: 'customer' },
      ],
    };
  },
  methods: {
    cancel() {
      // Implement logic to cancel user creation and redirect to previous page
    },
    createUser() {
      // Implement logic to send user data to server for account creation
      // After successful creation, redirect to user management page
    },
  },
};
</script>
