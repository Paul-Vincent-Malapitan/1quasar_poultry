<template>
  <div class="q-pa-md">
    <q-table
      style="height: 400px"
      flat bordered
      title="Order Management"
      :rows="orders"
      :columns="columns"
      row-key="orderId"
      :rows-per-page-options="[10, 20, 30]"
      :pagination.sync="pagination"
    >
      <template v-slot:body="props">
        <q-tr :props="props">
          <q-td :props="props" auto-width>
            {{ props.row.orderId }}
          </q-td>
          <q-td :props="props" auto-width>
            {{ props.row.customerName }}
          </q-td>
          <q-td :props="props" auto-width>
            {{ props.row.totalAmount }}
          </q-td>
          <q-td :props="props" auto-width>
            {{ props.row.status }}
          </q-td>
          <q-td :props="props" auto-width>
            <q-btn-group>
              <q-btn label="Confirm" color="positive" @click="confirmOrder(props.row)" />
              <q-btn label="Decline" color="negative" @click="declineOrder(props.row)" />
            </q-btn-group>
          </q-td>
        </q-tr>
      </template>
    </q-table>
  </div>
</template>

<script>
import { ref } from 'vue';

const columns = [
  {
    name: 'orderId',
    label: 'Order ID',
    align: 'center',
    field: 'orderId'
  },
  {
    name: 'customerName',
    label: 'Customer Name',
    align: 'left',
    field: 'customerName'
  },
  {
    name: 'totalAmount',
    label: 'Total Amount',
    align: 'right',
    field: 'totalAmount'
  },
  {
    name: 'status',
    label: 'Status',
    align: 'center',
    field: 'status'
  },
  {
    name: 'actions',
    label: 'Actions',
    align: 'center'
  }
];

const orders = [
  {
    orderId: 1,
    customerName: 'John Doe',
    totalAmount: 50.0,
    status: 'Pending'
  },
  {
    orderId: 2,
    customerName: 'Jane Doe',
    totalAmount: 75.5,
    status: 'Pending'
  },
  {
    orderId: 3,
    customerName: 'Bob Smith',
    totalAmount: 120.0,
    status: 'Confirmed'
  },
  {
    orderId: 4,
    customerName: 'Alice Johnson',
    totalAmount: 30.5,
    status: 'Declined'
  },
  {
    orderId: 5,
    customerName: 'Charlie Brown',
    totalAmount: 90.0,
    status: 'Pending'
  },
  {
    orderId: 6,
    customerName: 'David White',
    totalAmount: 60.5,
    status: 'Confirmed'
  },
  {
    orderId: 7,
    customerName: 'Eva Black',
    totalAmount: 40.0,
    status: 'Pending'
  },
  // ... (more order entries)
];

export default {
  setup() {
    const pagination = ref({
      rowsPerPage: 10
    });

    const confirmOrder = (order) => {
      // Implement confirmation logic here
      console.log(`Order ${order.orderId} confirmed`);
    };

    const declineOrder = (order) => {
      // Implement decline logic here
      console.log(`Order ${order.orderId} declined`);
    };

    return {
      columns,
      orders,
      pagination,
      confirmOrder,
      declineOrder
    };
  }
};
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
