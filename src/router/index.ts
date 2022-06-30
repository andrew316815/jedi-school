import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/LoginPage.vue' ),
  },
  {
    path: '/profile',
    name: 'basic',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import( /* webpackChunkName: "about" */ '../views/BasicPage.vue' ),
    children: [
      {
        path: '/profile',
        name: 'profile',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/Account/ProfilePage.vue' ),
      },
      {
        path: '/chats',
        name: 'chats',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/Account/ChatsPage/ChatsPage.vue' ),
      },
      {
        path: '/timetable',
        name: 'timetable',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/Account/Timetable/TimetablePage.vue' ),
        children: [
          {
            path: '/timetable',
            name: 'classes',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
              import( /* webpackChunkName: "about" */ '../views/Account/Timetable/parts/ClassesPage.vue' ),
          },
          {
            path: '/timetable/missions',
            name: 'missions',
            // route level code-splitting
            // this generates a separate chunk (about.[hash].js) for this route
            // which is lazy-loaded when the route is visited.
            component: () =>
              import( /* webpackChunkName: "about" */ '../views/Account/Timetable/parts/MissionsPage.vue' ),
          },
        ]
      },
      {
        path: '/subjects',
        name: 'subjects',
        // route level code-splitting
        // this generates a separate chunk (about.[hash].js) for this route
        // which is lazy-loaded when the route is visited.
        component: () =>
          import( /* webpackChunkName: "about" */ '../views/Account/SubjectsPage.vue' ),
      },
    ]
  },
]

const router = createRouter({
  history: createWebHistory( process.env.BASE_URL ),
  routes,
})

export default router
