  <template>
    <div>
      <q-table
        :rows="tableData"
        :columns="columns"
        row-key="prod_id"
      ></q-table>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        tableData: [
          { prod_name: 'Chicken', category: 'Category 1', price: 10.99, quantity: 50, image: 'image1.jpg' },
          // Add more data as needed
        ],
        columns: [
          { name: 'prod_name', label: 'Product Name', align: 'left', field: 'prod_name', sortable: true },
          { name: 'category', label: 'Category', align: 'left', field: 'category', sortable: true },
          { name: 'price', label: 'Price', align: 'left', field: 'price', sortable: true },
          { name: 'quantity', label: 'Quantity', align: 'left', field: 'quantity', sortable: true },
          { name: 'image', label: 'Image', align: 'left', field: 'image' },
        ],
      };
    },
  };
  </script>
