<template>
  <q-layout view="hHh lpR fFf">

    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="toggleLeftDrawer" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo-v2/svg/logo-mono-white.svg">
          </q-avatar>
          Admin
        </q-toolbar-title>
      </q-toolbar>
    </q-header>

    <q-drawer show-if-above v-model="leftDrawerOpen" side="left" bordered>
      <!-- drawer content -->
      <q-list>
        <q-item to="/dashboard" active-class="q-item-no-link-highlighting">
          <q-item-section avatar>
            <q-icon name="dashboard"/>
              </q-item-section>
                <q-item-section>
                  <q-item-label>Dashboard</q-item-label>
              </q-item-section>
          </q-item>
        </q-list>

      <q-expansion-item
          icon="people"
          label="User Management"
        >
          <q-list class="q-pl-lg">
            <q-item to="/user" active-class="">
              <q-item-section avatar>
                <q-icon name="add"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Create</q-item-label>
              </q-item-section>
            </q-item>

            <q-item to="/update" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="edit"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Update</q-item-label>
              </q-item-section>
            </q-item>

            <q-item to="/delete" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="delete"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Delete</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-expansion-item>

        <q-expansion-item
          icon="people"
          label="Branch Management"
        >
          <q-list class="q-pl-lg">
            <q-item to="/branch_list" active-class="">
              <q-item-section avatar>
                <q-icon name="add"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Branch List</q-item-label>
              </q-item-section>
            </q-item>

            <q-item to="/add_branch" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="edit"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Add Branch</q-item-label>
              </q-item-section>
            </q-item>

            <q-item to="/edit_branch" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="delete"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Edit Branch</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-expansion-item>



        <q-expansion-item
          icon="people"
          label="Inventory Management"
        >
          <q-list class="q-pl-lg">
            <q-item to="/branch_list" active-class="">
              <q-item-section avatar>
                <q-icon name="add"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Stock Level</q-item-label>
              </q-item-section>
            </q-item>

            <q-item to="/add_branch" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="edit"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Add Stocks</q-item-label>
              </q-item-section>
            </q-item>

            <q-item to="/edit_branch" active-class="q-item-no-link-highlighting">
              <q-item-section avatar>
                <q-icon name="delete"/>
              </q-item-section>
              <q-item-section>
                <q-item-label>Deceased Chicken</q-item-label>
              </q-item-section>
            </q-item>

          </q-list>
        </q-expansion-item>
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
