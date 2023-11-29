<template>
  <div>
    <q-card>
      <q-card-title>
        Update User Account
      </q-card-title>

      <q-card-section>
        <q-form @submit.prevent="updateUser">
          <q-field label="Name">
            <q-input v-model="user.name" required />
          </q-field>

          <q-field label="Email Address">
            <q-input v-model="user.email" required type="email" :readonly="updateMode" />
          </q-field>

          <q-field label="Password">
            <q-input v-model="user.password" type="password" />
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

          <q-btn type="submit" color="primary" label="Update User" />
        </q-form>
      </q-card-section>

      <q-card-section>
        <q-card>
          <q-card-title>
            User List
          </q-card-title>

          <q-card-section>
            <q-table
              :rows="users"
              :columns="columns"
              row-key="email"
              @row-click="selectUser"
            />
          </q-card-section>
        </q-card>
      </q-card-section>

      <q-card-actions>
        <q-btn flat label="Cancel" @click="cancel" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
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
      users: [
        // Dummy data for the user list, replace this with your actual data
        { name: 'John Doe', email: 'john@example.com', role: 'admin' },
        { name: 'Jane Smith', email: 'jane@example.com', role: 'customer' },
      ],
      columns: [
        { name: 'name', label: 'Name', align: 'left', field: 'name' },
        { name: 'email', label: 'Email', align: 'left', field: 'email' },
        { name: 'role', label: 'Role', align: 'left', field: 'role' },
      ],
      updateMode: false, // Flag to indicate whether the form is in update mode
    };
  },
  methods: {
    cancel() {
      // Implement logic to cancel and redirect to the previous page
    },
    updateUser() {
      // Implement logic to update the user on the server
      // After successful update, reset the form and updateMode
      this.resetForm();
    },
    selectUser(selectedUser) {
      // Populate the update form with the selected user's information
      this.user = Object.assign({}, selectedUser); // Use Object.assign to create a new object
      this.updateMode = true; // Set update mode to true
    },
    resetForm() {
      // Reset the form and updateMode
      this.user = {
        name: '',
        email: '',
        password: '',
        contact: '',
        address: '',
        role: '',
      };
      this.updateMode = false;
    },
  },
};
</script>
