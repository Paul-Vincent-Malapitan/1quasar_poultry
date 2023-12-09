<template>

<div class="q-pa-md">
  <!-- Removed q-option-group for separator -->

  <q-markup-table flat bordered>
    <thead>
      <tr>
        <th class="text-left">ID</th>
        <th class="text-right">Name</th>
        <th class="text-right"> Email</th>
        <th class="text-right"> Password</th>
        <th class="text-right">Contact</th>
        <th class="text-right">Address</th>
        <th class="text-right">Role</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-left">1</td>
        <td class="text-right">Paul Vinzent</td>
        <td class="text-right">paul.vinzent@gmail.com</td>
        <td class="text-right">pau.vinzent</td>
        <td class="text-right">0987654321</td>
        <td class="text-right">Dito Lang Sa Amin</td>
        <td class="text-right">Admin</td>
      </tr>
    </tbody>
  </q-markup-table>
</div>


  <div class="create-user-container">
    <q-card class="create-user-card">
      <q-card-section>
        <q-card-title>
          <h5 class="text-h6">Create User</h5>
        </q-card-title>
        <q-form @submit.prevent>
          <q-row>
            <q-col v-for="field in formFields" :key="field.label" cols="12" sm="6" class="q-mb-md">
              <q-input
                v-if="field.type === 'text' || field.type === 'email' || field.type === 'password'"
                v-model="user[field.model]"
                :label="field.label"
                :type="field.type"
                :required="field.required"
              />
              <q-select
                v-else-if="field.type === 'select' && field.model === 'role'"
                v-model="user.role"
                :options="roles"
                :label="field.label"
                use-input
                hide-selected
                fill-input
                outlined
                required
              />
            </q-col>
          </q-row>

          <q-btn type="submit" color="primary" label="Create User" class="q-mt-md" />
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script>

export default {
  setup () {
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
        { label: 'User', value: 'user' },
        { label: 'Admin', value: 'admin' },
        { label: 'Staff', value: 'staff' },
      ],
      formFields: [
        { label: 'Name', model: 'name', type: 'text', required: true },
        { label: 'Email Address', model: 'email', type: 'email', required: true },
        { label: 'Password', model: 'password', type: 'password', required: true },
        { label: 'Contact Number', model: 'contact', type: 'text', required: true },
        { label: 'Address', model: 'address', type: 'text', required: true },
        { label: 'Role', model: 'role', type: 'select', required: true },
      ],
    }
  },
  methods: {
    createUser() {
      // Implement logic to send user data to the server for account creation
      // After successful creation, redirect to the user management page
    },
  },
}
</script>


<style scoped>
.create-user-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.create-user-card {
  max-width: 95%;  /* Set the maximum width as a percentage of the screen width */
  width: 100%;     /* Take full width within the container */
  border: 2px solid #2196F3;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.q-markup-table {
  width: 100%;     /* Take full width within the container */
  margin: 0 auto;  /* Center the table */
}

.q-card-title {
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
}
</style>
