import appMenus from './appMenus'

const routes = [
  {
    name: 'login',
    path: '/login',
    component: () => import('@/views/login')
  },
  ...appMenus,
  // {
  //   path: '/:pathMatch(.*)*',
  //   name: 'notFound',
  //   component: () => import('@/views/not-found/index.vue'),
  // },
];

export default routes