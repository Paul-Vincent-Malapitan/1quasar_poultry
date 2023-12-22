<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Customer
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-list>
        <q-item to="/product_list" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Product List</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>

        <q-list>
        <q-item to="/order" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Order</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>

        <q-list>
        <q-item to="/notif" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Notification</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>

        <q-list>
        <q-item to="/chat" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Chat</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>


    </q-drawer>


    <q-page-container>
      <router-view />
    </q-page-container>

  </q-layout>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const leftDrawerOpen = ref(false)

    return {
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  },
  methods: {
    navigateTo(routes) {
      this.$router.push(routes);
      this.leftDrawerOpen = false; // Close the drawer after navigation
    },
  },

}
</script>
