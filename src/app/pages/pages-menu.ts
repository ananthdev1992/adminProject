import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Dashboard',
    icon: 'home-outline',
    link: '/pages/dashboard',
    home: true,
  },
  {
    title: 'Settings',
    icon: 'layout-outline',
    children: [
      {
        title: 'General Settings',
        link: '/pages/settings/general-settings',
      },
      {
        title: 'Email Settings',
        link: '/pages/settings/email-settings',
      },
      {
        title: 'SMS Settings',
        link: '/pages/settings/sms-settings',
      },
      {
        title: 'Wallet Settings',
        link: '/pages/settings/wallet-settings',
      },
    ],
  },
  {
    title: 'MANAGEMENTS',
    group: true,
  },
  {
    title: 'User Management',
    icon: 'home-outline',
    link: '/pages/user-management',
    home: true,
  },
  {
    title: 'Bank Management',
    icon: 'home-outline',
    link: '/pages/bank-management',
    home: true,
  },
  {
    title: 'Country Management',
    icon: 'home-outline',
    link: '/pages/country-currency',
    home: true,
  },
  {
    title: 'HO & Branch Management',
    icon: 'home-outline',
    link: '/pages/branch-management',
  },
  {
    title: 'Bank Branch Management',
    icon: 'home-outline',
    link: '/pages/bankbranch-management',
  },
  {
    title: 'Commission Management',
    icon: 'home-outline',
    link: '/pages/commission-group',
  },
];
