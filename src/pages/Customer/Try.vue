<template>
  <q-page>
    <q-table
      :rows="tableData"
      :columns="columns"
      row-key="id"
      :loading="loading"
    >
      <template v-slot:body-cell-name="props">
        {{ props.row.name }}
      </template>
      <template v-slot:body-cell-email="props">
        {{ props.row.email }}
      </template>
      <!-- Add more slots for other fields as needed -->

      <!-- You can customize the default slots for actions, etc. -->
    </q-table>
  </q-page>
</template>

<script>
import {api} from 'src/boot/axios';

export default {
  data() {
    return {
      tableData: [],
      loading: true,
      columns: [
        {
          name: 'name',
          required: true,
          label: 'Name',
          align: 'left',
          field: 'name',
          sortable: true,
        },
        {
          name: 'email',
          required: true,
          label: 'Email',
          align: 'left',
          field: 'email',
          sortable: true,
        },
        // Add more columns for other fields as needed
      ],
    };
  },
  mounted() {
    this.loadData();
  },
  methods: {
    async loadData() {
      try {
        const response = await api.get('/getData');
        this.tableData = response.data;
      } catch (error) {
        console.error('Error loading data:', error);
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Add custom styles here if needed */
</style>
