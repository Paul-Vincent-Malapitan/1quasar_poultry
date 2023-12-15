<template>
  <div class="q-pa-md">
    <q-card class="q-mb-md">
      <q-card-section>
        <q-form @submit="submitForm">
          <q-field label="Product Name">
            <q-input v-model="formData.prod_name" type="text" required />
          </q-field>

          <q-field label="Category">
            <q-input v-model="formData.category" type="text" required />
          </q-field>

          <q-field label="Price">
            <q-input v-model="formData.price" type="number" required />
          </q-field>

          <q-field label="Quantity">
            <q-input v-model="formData.quantity" type="number" required />
          </q-field>

          <q-field label="Image">
            <q-file v-model="formData.image" accept="image/*" :max-size="5000000" />
          </q-field>

          <q-btn type="submit" label="Submit" color="primary" />
        </q-form>
      </q-card-section>
    </q-card>

    <!-- Your existing table or other components can go here -->

  </div>
</template>

<script>
export default {
  data() {
    return {
      formData: {
        prod_id: null,
        prod_name: '',
        category: '',
        price: null,
        quantity: null,
        image: '',
      },
      editMode: false, // Set to true if editing an existing record
    };
  },
  methods: {
    submitForm() {
      // Handle form submission logic
    },
  },
};
</script>
