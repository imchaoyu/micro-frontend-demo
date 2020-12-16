export default [
  {
    path: '/user',
    layout: false,
    routes: [
      {
        name: 'login',
        path: '/user/login',
        component: './user/login/index',
      },
    ],
  },
  {
    path: '/',
    routes: [
      {
        path: '/',
        redirect: '/home',
      },
    ]
  },
  {
    path: '/home',
    name: '欢迎',
    component: '@/pages/Home/index',
  },
  {
    path: '/admin',
    name: '管理页',
    component: '@/pages/Child/index',
    routes: [
      {
        path: '/admin/sub-page1',
        name: '一级页面',
        component: '@/pages/Child/index',
      },
      {
        path: '/admin/sub-page2',
        name: '二级页面',
        component: '@/pages/Child/index',
      },
      {
        path: '/admin/sub-page3',
        name: '三级页面',
        component: '@/pages/Child/index',
      },
    ],
  },
  {
    name: '列表页',
    path: '/list',
    component: '@/pages/Home/index',
    routes: [
      {
        path: '/list/sub-page',
        name: '一级列表页面',
        component: '@/pages/Child/index',
      },
      {
        path: '/list/sub-page2',
        name: '二级列表页面',
        component: '@/pages/Home/index',
      },
      {
        path: '/list/sub-page3',
        name: '三级列表页面',
        component: '@/pages/Home/index',
      },
    ],
  },
];
