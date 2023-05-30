import { createRouter, createWebHistory } from "vue-router";

import Layout from "../layout/Layout.vue";

const routes = [
  {
    path: "/",
    component: Layout,
    children: [
      { path: "/", redirect: "/homePage" },
      {
        path: "/user-management",
        component: () => import("../pages/UserManagementPage.vue"),
        meta: {
          title: "User management",
          description: "Add and manage users your company here",
        },
      },
      {
        path: "/homePage",
        component: () => import("../pages/HomePage.vue"),
        meta: {
          title: "Home",
          description: "Add and home Page your company here",
        },
      },
      {
        path: "/map",
        component: () => import("../pages/MapPage.vue"),
        meta: {
          title: "Map",
          description: "Add and Map Page your company here",
        },
      },
      {
        path:'/assessment',
        component: () => import('../pages/AssessmentPage.vue'),
        meta: {
          title:'Assessment Page',
          description: 'Add and Assessment Page your company here'
        }
      },
      {
        path: '/workerSurvey',
        component: () => import('../pages/WorkerSurveyPage.vue'),
        meta: {
          title: "workerSurvey",
          description: 'Add and worker Survey your company here'
        }
      },
      {
        path: '/analysis',
        component: () => import('../pages/WorkerSurveyPage.vue'),
        meta: {
          title: "analysis",
          description: 'Add and analysis your company here'
        }
      },
      {
        path: '/reporting',
        component: () => import('../pages/ReportingPage.vue'),
        meta: {
          title: "reporting",
          description: 'Add and reporting your company here'
        }
      },
      {
        path: '/notifications',
        component: () => import('../pages/NotificationsPage.vue'),
        meta: {
          title: "Notifications",
          description: 'Add and Notifications your company here'
        }
      },
      {
        path: '/help',
        component: () => import('../pages/HelpPage.vue'),
        meta: {
          title: "Help",
          description: 'Add and Help your company here'
        }
      },
      {
        path: '/accountSettings',
        component: () => import('../pages/AccountSettingsPage.vue'),
        meta: {
          title: "Account Settings",
          description: 'Add and Account Settings your company here'
        }
      },
      {
        path: '/logOut',
        component: () => import('../pages/LogOutPage.vue'),
        meta: {
          title: "logOut",
          description: 'Add and logOut your company here'
        }
      }
    ],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
