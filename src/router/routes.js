
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      { path: '/user', component: () => import('pages/Admin/CreateUser.vue') },
      { path: '/', component: () => import('pages/Admin/Dashboard.vue') },
      { path: '/dashboard', component: () => import('pages/Admin/Dashboard.vue') },
      { path: '/delete', component: () => import('pages/Admin/Delete.vue') },
      { path: '/update', component: () => import('pages/Admin/Update.vue') },
      { path: '/branch_list', component: () => import('pages/Admin/BranchList.vue') },
      { path: '/add_branch', component: () => import('pages/Admin/AddBranch.vue') },
      { path: '/edit_branch', component: () => import('pages/Admin/EditBranch.vue') },

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
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
