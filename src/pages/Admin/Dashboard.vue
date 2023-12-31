<template>
  <q-card class="bg-transparent no-shadow no-border" bordered>
    <q-card-section class="q-mb-md q-pa-md">
      <div class="row q-col-gutter-md">
        <div v-for="(item, index) in items" :key="index" class="col-md-3 col-sm-12 col-xs-12 q-mb-md">
          <q-item :style="`background-color: ${item.color1}; border-radius: 8px;`" class="q-pa-none">
            <q-item-section v-if="icon_position === 'left'" side :style="`background-color: ${item.color2}; border-radius: 8px 0 0 8px;`"
                            class="q-pa-lg q-mr-none text-white">
              <q-icon :name="item.icon" color="white" size="24px"></q-icon>
            </q-item-section>
            <q-item-section class="q-pa-md q-ml-none text-white">
              <q-item-label class="text-white text-h6 text-weight-bolder">{{ item.value }}</q-item-label>
              <q-item-label>{{ item.title }}</q-item-label>
            </q-item-section>
            <q-item-section v-if="icon_position === 'right'" side class="q-mr-md text-white">
              <q-icon :name="item.icon" color="white" size="44px"></q-icon>
            </q-item-section>
          </q-item>
        </div>
      </div>
    </q-card-section>
  </q-card>

  <div >
    <q-page  class="q-page row q-mb-md">
         <q-container class="col">
              <chart-component :chartData="chartData" :chartOptions="chartOptions"></chart-component>
          </q-container>

          <q-container class="col-md-6 col-sm-12 col-xs-12">
            <chart-component :chart-data="barChartData" :chart-options="barChartOptions"></chart-component>
          </q-container>
    </q-page>
  </div>

    <q-table
      :rows="tableData"
      :columns="columns"
      row-key="prod_id"
      class="q-ma-md"
    >
      <template v-slot:body-cell-image="props">
        <q-td :props="props">
          <q-img :src="props.row.image" />
        </q-td>
      </template>
    </q-table>

</template>

<!-- Rest of your code remains unchanged -->


<script>

import { defineComponent } from 'vue';
import ChartComponent from 'components/charts/Chart.vue';
import BarChart from 'components/charts/Chart2.vue';

export default defineComponent({
  name: "CardSocial",
  components: {
    BarChart,
    ChartComponent,
  },
  props: {
    icon_position: {
      required: false,
      default: "left",
    },
  },
  data() {
    return {
      barChartData: {
        labels: ['Monday', 'Tuesday', 'Thursday', 'Friday', 'Saturday'],
        datasets: [
          {
            type: 'doughnut',
            label: 'Number of Deceased Chicken',
            backgroundColor: 'rgba(80, 190, 189, 0.2)',
            borderColor: 'rgba(78, 190, 195, 2)',
            borderWidth: 1,
            data: [35, 45, 70, 98, 8],
          },
        ],
      },
      barChartOptions: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            type: 'line',
            label: 'Dressed Chicken',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [1, 59, 80, 81, 200],
            fill: false, // Important for a line chart
          },
        ],
      },
      chartOptions: {
        responsive: true,
        maintainAspectRatio: false,
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
       barChartOptions: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },

      columns: [
        { name: 'prod_name', label: 'Product Name', align: 'left', field: 'prod_name', sortable: true },
        { name: 'category', label: 'Category', align: 'left', field: 'category', sortable: true },
        { name: 'price', label: 'Price', align: 'right', field: 'price', sortable: true },
        { name: 'quantity', label: 'Quantity', align: 'right', field: 'quantity', sortable: true },
        { name: 'image', label: 'Image', align: 'left', field: 'image', sortable: false },
        // You can add more columns if needed
      ],
    };
  },
  methods:
  {
    addProduct() {
      // Your existing addProduct method
    },
  },

  computed: {
    items: function () {
      return this.icon_position === "left"
        ? [
          {
            title: "Daily Sales",
            icon: "person",
            value: "200",
            color1: "#5064b5",
            color2: "#3e51b5",
          },
          {
            title: "Weekly Sales",
            icon: "fab fa-twitter",
            value: "500",
            color1: "#f37169",
            color2: "#f34636",
          },
          {
            title: "Monthly Sales",
            icon: "fab fa-google",
            value: "50",
            color1: "#ea6a7f",
            color2: "#ea4b64",
          },
          {
            title: "Expected Yearly Sale",
            icon: "bar_chart",
            value: "1020",
            color1: "#a270b1",
            color2: "#9f52b1",
          },
        ]
        : [
          {
            title: "Monthly Income",
            icon: "fas fa-dollar-sign",
            value: "$ 20k",
            color1: "#546bfa",
            color2: "#3e51b5",
          },
          {
            title: "Weekly Sales",
            icon: "fas fa-chart-bar",
            value: "20",
            color1: "#3a9688",
            color2: "#3e51b5",
          },
          {
            title: "New Customers",
            icon: "fas fa-chart-line",
            value: "321",
            color1: "#7cb342",
            color2: "#3e51b5",
          },
          {
            title: "Active Users",
            icon: "person",
            value: "82",
            color1: "#f88c2b",
            color2: "#3e51b5",
          },
        ];
    },
  },
});
</script>

<style scoped>
/* Add the following styles to ensure charts have the same size */
:host {
  display: block;
  width: 100%;
  height: 100%;
}
</style>
