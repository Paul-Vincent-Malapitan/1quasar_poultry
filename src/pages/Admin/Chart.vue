<!-- src/pages/Index.vue -->

<template>
  <q-page>
    <q-container>
      <chart-component :chartData="chartData" :chartOptions="chartOptions" />
    </q-container>
  </q-page>
</template>

<script>
import ChartComponent from 'components/charts/Chart.vue';

export default {
  components: {
    ChartComponent,
  },
  data() {
    return {
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            label: 'Sample Data',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
            fill: false, // Important for a line chart
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
      },
    };
  },
};
</script>
