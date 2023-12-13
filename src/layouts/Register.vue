<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold">Sign up</div>
            <div class="text-grey-8">Create an account to get started</div>
          </q-card-section>
          <q-card-section>
            <q-input v-model="name" label="Name" outlined></q-input>
            <q-input v-model="email" label="Email Address" outlined class="q-mt-md"></q-input>
            <q-input v-model="password" type="password" label="Password" outlined class="q-mt-md"></q-input>
            <q-input v-model="contact" label="Contact" outlined class="q-mt-md"></q-input>
            <q-input v-model="address" label="Address" outlined class="q-mt-md"></q-input>
          </q-card-section>
          <q-card-section>
            <q-btn v-ripple style="border-radius: 8px;" color="dark" rounded size="md" label="Sign up" no-caps class="full-width"></q-btn>
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-grey-8">Already have an account?
              <q-btn class="float-right text-blue-9 text-capitalize"
              size="sm" style="width:75px;border: 3px solid #080809;"
              dense label="SignIn"
                           @click="goToLogin" type="button"/>Sign In.

            </div>
          </q-card-section>
        </q-card>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<style>
.my_card {
  width: 25rem;
  border-radius: 8px;
  box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
}
</style>

<script>
import { ref } from 'vue'
import { useQuasar } from 'quasar'

export default {
  setup() {
    const $q = useQuasar()
    const name = ref('')
    const email = ref('')
    const password = ref('')
    const contact = ref('')
    const address = ref('')

    return {
      $q,
      name,
      email,
      password,
      contact,
      address
    }
  },
  methods: {
    goToLogin(routes) {
      this.$router.push('/login')
    },
  },
}
</script>
