<!-- StaticPoultryBranchMonitor.vue -->

<template>
  <q-page>
    <q-container>
      <q-card>
        <q-card-section>
          <q-table
            :rows="poultryBranches"
            :columns="columns"
            row-key="id"
            :pagination.sync="pagination"
            :rows-per-page-label="['10', '20', '30']"
          >
            <template v-slot:body-cell-name="props">
              {{ props.row.branchName }}
            </template>
            <template v-slot:body-cell-location="props">
              {{ props.row.branchLocation }}
            </template>
            <!-- Add more slots for other properties of your poultry branches -->
          </q-table>
        </q-card-section>
      </q-card>
    </q-container>
  </q-page>

  <div>
    <bar-chart :chart-data="chartData" />
  </div>

</template>

<script>
import BarChart from 'components/charts/BarChart.vue';

export default {
  components: {
    BarChart,
  },
  data() {
    return {
      chartData: {
        labels: ['Label 1', 'Label 2', 'Label 3'],
        datasets: [
          {
            label: 'Dataset 1',
            data: [10, 20, 30],
            backgroundColor: 'rgba(255, 99, 132, 0.2)', // Change color here
            borderColor: 'rgba(255, 99, 132, 1)', // Change color here
            borderWidth: 1,
          },
          // Add more datasets as needed
        ],
      },
      poultryBranches: [
        { id: 1, branchName: 'Branch 1', branchLocation: 'Sta. Isabel' },
        { id: 2, branchName: 'Branch 2', branchLocation: 'Bayanan' },
        { id: 3, branchName: 'Branch 3', branchLocation: 'Masipit' },
        // Add more hardcoded data for other poultry branches
      ],
      columns: [
        { name: 'branchName', label: 'Branch Name', align: 'left', field: 'branchName', sortable: true },
        { name: 'branchLocation', label: 'Location', align: 'left', field: 'branchLocation', sortable: true },
        // Add more columns for other properties of your poultry branches
      ],
      pagination: {
        page: 1,
        rowsPerPage: 10,
        sortBy: 'branchName',
      },
    };
  },
};
</script>

<style scoped>
/* Add custom styles for your component */
</style>
