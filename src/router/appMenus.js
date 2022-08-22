import MenuPageLayout from '@/layout/menu-page-layout';

const appRoutes = [
  {
    path: '/question',
    name: 'question',
    component: MenuPageLayout,
    children: [
      {
        path: 'list',
        name: 'QuestionList',
        component: () => import('@/views/question/list'),
      },
      {
        path: 'create',
        name: 'create',
        component: () => import('@/views/question/create'),
      },
    ],
  },
  {
    path: '/user',
    name: 'UserList',
    component: MenuPageLayout,
    children: [
      {
        path: 'list',
        component: () => import('@/views/user/list'),
      },
    ],
  },
];

export default appRoutes