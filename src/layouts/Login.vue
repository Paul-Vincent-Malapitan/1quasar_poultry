<template>
  <q-layout view="lHh Lpr lFf">
    <q-page-container>
      <q-page class="flex flex-center bg-grey-2">
        <q-card class="q-pa-md shadow-2 my_card" bordered>
          <q-card-section class="text-center">
            <div class="text-grey-9 text-h5 text-weight-bold">Sign in</div>
            <div class="text-grey-8">Sign in below to access your account</div>
          </q-card-section>
          <q-card-section>
            <q-input v-model="email" label="Email Address" outlined></q-input>
            <q-input v-model="password" type="password" label="Password" outlined class="q-mt-md"></q-input>
          </q-card-section>
          <q-card-section>
            <q-btn v-ripple style="border-radius: 8px;" color="dark" rounded size="md" label="Sign in" no-caps class="full-width"></q-btn>
          </q-card-section>
          <q-card-section class="text-center q-pt-none">
            <div class="text-grey-8">Don't have an account yet?
              <q-btn class="float-right text-blue-9 text-capitalize"
              size="sm" style="width:75px;border: 3px solid #080809;"
              dense label="SignUp"
                           @click="goToRegister" type="button"/>Sign up.

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
    const email = ref('')
    const password = ref('')



    return {
      $q,
      email,
      password
    }
  },

  methods: {
    goToRegister(routes) {
      this.$router.push('/register')
    },
  },
}
</script>
