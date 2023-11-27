<template>
  <q-page>
    <q-container>
      <q-card>
        <q-card-section>
          <q-form @submit="submitForm">
            <q-input
              v-model="user.name"
              label="Name"
              outlined
              dense
            />
            <q-input
              v-model="user.email"
              label="Email"
              type="email"
              outlined
              dense
            />
            <q-input
              v-model="user.password"
              label="Password"
              type="password"
              outlined
              dense
            />
            <q-btn
              type="submit"
              label="Create Account"
              color="primary"
              :disable="isFormInvalid"
            />
          </q-form>
        </q-card-section>
      </q-card>
    </q-container>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      user: {
        name: '',
        email: '',
        password: ''
      }
    };
  },
  computed: {
    isFormInvalid() {
      return !(this.user.name && this.user.email && this.user.password);
    }
  },
  methods: {
    submitForm() {
      // You can dispatch an action to handle the form submission in Vuex
      this.$store.dispatch('createUser', this.user);

      // Optionally, you can redirect to another page after successful submission
      // this.$router.push('/some-other-page');
    }
  }
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
