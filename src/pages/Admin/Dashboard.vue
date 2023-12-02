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
  <q-page class="row">
    <q-container class="col">
      <chart-component :chartData="chartData" :chartOptions="chartOptions" />
    </q-container>
    <q-container class="col">
      <chart-component :chartData="chartData" :chartOptions="chartOptions" />
    </q-container>
  </q-page>
  </div>


</template>

<!-- Rest of your code remains unchanged -->


<script>
import { defineComponent } from 'vue';
import ChartComponent from 'components/charts/Chart.vue';

export default defineComponent({
  name: "CardSocial",
  components: {
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
      chartData: {
        labels: ['January', 'February', 'March', 'April', 'May'],
        datasets: [
          {
            type: '',

            label: 'Sample Data',
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: [65, 59, 80, 81, 56],
            fill: false, // Important for a line chart
          },
          {
            type: '',

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

