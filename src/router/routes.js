
const routes = [
  {
    path: '/admin',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      { path: '/admin', component: () => import('pages/Admin/Dashboard.vue') },
      { path: '/dashboard', component: () => import('pages/Admin/Dashboard.vue') },
      { path: '/user_manage', component: () => import('pages/Admin/UserManagement.vue') },
      { path: '/branch_manage', component: () => import('pages/Admin/BranchManagement.vue') },
      { path: '/inventory_manage', component: () => import('pages/Admin/InventoryManagement.vue') },
      { path: '/add_products', component: () => import('pages/Admin/AddProducts.vue') },

    ]
  },
{
  path: '/customer',
  component: () => import('layouts/CustomerLayout.vue'),
  children: [
    { path: '/customer', component: () => import('pages/Customer/ProductList.vue') },
    { path: '/product_list', component: () => import('pages/Customer/ProductList.vue') },
    { path: '/order', component: () => import('pages/Customer/Order.vue') },
    { path: '/chat', component: () => import('pages/Customer/Chat.vue') },
    { path: '/notif', component: () => import('pages/Customer/Notification.vue') },
    { path: '/try', component: () => import('pages/Customer/Try.vue') },
  ]
  },

  {
    path: '/staff',
    component: () => import('layouts/StaffLayout.vue'),
    children: [
      { path: '/staff', component: () => import('pages/Staff/StaffDash.vue') },
      { path: '/chat_s', component: () => import('pages/Staff/Chat.vue') },
      { path: '/delivery', component: () => import('pages/Staff/Delivery.vue') },
      { path: '/inquiries', component: () => import('pages/Staff/Inquiries.vue') },
      { path: '/inventory', component: () => import('pages/Staff/Inventory.vue') },
      { path: '/notifications', component: () => import('pages/Staff/Notifications.vue') },
      { path: '/order_management', component: () => import('pages/Staff/OrderManagement.vue') },
      { path: '/staff_dash', component: () => import('pages/Staff/StaffDash.vue') },

    ]
    },
    {
    path: '/login',
    component: () => import('layouts/Login.vue'),
    children: [

    ]
    },

    {
      path: '/register',
      component: () => import('layouts/Register.vue'),
      children: [

      ]
      },

      {
        path: '/tryuser',
        component: () => import('layouts/TryUsers.vue'),
        children: [

        ]
        },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
