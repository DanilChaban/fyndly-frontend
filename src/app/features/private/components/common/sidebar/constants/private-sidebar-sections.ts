import { Sidebar } from '@private/components/common/sidebar/types/sidebar';

export const SIDEBAR_SECTIONS: Sidebar[] = [
  {
    title: 'global.private.sidebar.sections.menu',
    items: [
      {
        label: 'global.private.sidebar.items.home',
        icon: 'home',
        route: 'home',
        exact: true,
      },
      {
        label: 'global.private.sidebar.items.calendar',
        icon: 'calendar',
        route: 'calendar',
        exact: true,
      },
    ],
  },
  {
    title: 'global.private.sidebar.sections.account',
    items: [
      {
        label: 'global.private.sidebar.items.settings',
        icon: 'settings',
        route: 'settings',
        exact: true,
      },
    ],
  },
];
