import React from 'react';

import * as AiIcons from 'react-icons/ai';

export const SidebarData = [
  {
    title: 'DASHBOARD',
    path: '/home',
    cName: 'nav-text',
    allowed: 'public'
  },
  {
    title: 'CUSTOMER',
    path: '/customer',
    cName: 'nav-text',
    allowed: 'public'
  },
  {
    title: 'HISTORY',
    path: '/history',
    cName: 'nav-text',
    allowed: 'manager'
  },
  {
    title: 'ADD TEAM',
    path: '/create',
    cName: 'nav-text',
    allowed: 'admin'
  }
];