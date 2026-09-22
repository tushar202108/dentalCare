import { lazy } from 'react';

export const LINKS = {
  HOME: '/',
  ABOUT_US: '/about-us',
  WHY_US: '/#why-us',
} as const;

export const ROUTES = [
  {
    key: 'home',
    path: LINKS.HOME,
    component: lazy(() => import('../pages/Home/home')),
  },
  {
    key: 'about-us',
    path: LINKS.ABOUT_US,
    component: lazy(() => import('../pages/About Us/index')),
  },
];