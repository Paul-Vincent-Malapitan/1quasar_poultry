<!-- src/components/BarChart.vue -->

<template>
  <div>
    <canvas ref="barChart"></canvas>
  </div>
</template>

<script>
import Chart from 'chart.js/auto';

export default {
  data() {
    return {
      chart: null,
    };
  },
  props: {
    chartData: {
      type: Object,
      required: true,
    },
  },
  mounted() {
    this.renderChart();
  },
  methods: {
    renderChart() {
      const ctx = this.$refs.barChart.getContext('2d');
      this.chart = new Chart(ctx, {
        type: 'bar',
        data: this.chartData,
        options: {
          responsive: true,
          maintainAspectRatio: false,
          // Additional Chart.js options go here
        },
      });
    },
  },
  watch: {
    chartData: {
      handler() {
        if (this.chart) {
          this.chart.destroy();
        }
        this.renderChart();
      },
      deep: true,
    },
  },
};
</script>

<style scoped>
/* Add your custom styles here */
</style>
