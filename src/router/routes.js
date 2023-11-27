
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/IndexPage.vue') },
      { path: '/user', component: () => import('pages/Admin/CreateUser.vue') },
      { path: '/dashboard', component: () => import('pages/Admin/Dashboard.vue') },
      { path: '/delete', component: () => import('pages/Admin/Delete.vue') },
      { path: '/update', component: () => import('pages/Admin/Update.vue') },
      { path: '/branch_list', component: () => import('pages/Admin/BranchList.vue') },
      { path: '/add_branch', component: () => import('pages/Admin/AddBranch.vue') },
      { path: '/edit_branch', component: () => import('pages/Admin/EditBranch.vue') },

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
