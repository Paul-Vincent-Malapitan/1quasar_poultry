<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Staff
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-list>
        <q-item to="/staff_dash" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Dashboard</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>

        <q-list>
        <q-item to="order_management" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Order Management</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>

        <q-list>
        <q-item to="delivery" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Delivery</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>

        <q-list>
        <q-item to="inventory" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Inventory</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>

        <q-list>
        <q-item to="chat_s" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Chat</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>

        <q-list>
        <q-item to="inquiries" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Inquiries</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>

        <q-list>
        <q-item to="notifications" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Notifications</q-item-label>
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
