
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [

      { path: '/user', component: () => import('pages/Admin/CreateUser.vue') },
      { path: '/', component: () => import('pages/Admin/Dashboard.vue') },
      { path: '/delete', component: () => import('pages/Admin/Delete.vue') },
      { path: '/update', component: () => import('pages/Admin/Update.vue') },
      { path: '/branch_list', component: () => import('pages/Admin/BranchList.vue') },
      { path: '/add_branch', component: () => import('pages/Admin/AddBranch.vue') },
      { path: '/edit_branch', component: () => import('pages/Admin/EditBranch.vue') },
      { path: '/chart', component: () => import('pages/Admin/Chart.vue') },


    ]
  },
{
  path: '/customer',
  component: () => import('layouts/CustomerLayout.vue'),
  children: [
    { path: '/product_list', component: () => import('pages/Customer/ProductList.vue') },
    { path: '/order', component: () => import('pages/Customer/Order.vue') },
    { path: '/chat', component: () => import('pages/Customer/Chat.vue') },
    { path: '/notif', component: () => import('pages/Customer/Notification.vue') },
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
