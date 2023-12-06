<!-- src/components/ChartComponent.vue -->

<template>
  <q-card>
    <q-card-section class="q-pa-md">
      <div class="chart-container">
        <canvas ref="myChart"></canvas>
      </div>
    </q-card-section>
  </q-card>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  props: {
    chartData: {
      type: Object,
      required: true,
    },
    chartOptions: {
      type: Object,
      default: () => ({}),
    },
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.myChart.getContext('2d');
      new Chart(ctx, {
        type: 'line', // Change to 'line' for a line chart
        data: this.chartData,
        options: this.chartOptions,
      });
    },
  },
};
</script>

<style scoped>
.chart-container {
  position: relative;
  height: 300px; /* Set the height according to your design */
}

canvas {
  width: 100%;
  height: 100%;
  border-radius: 10px; /* Optional: add border-radius for a more modern look */
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Optional: add box-shadow for depth */
}
</style>
