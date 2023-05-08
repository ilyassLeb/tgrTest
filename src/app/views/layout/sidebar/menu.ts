import { MenuItem } from './menu.model';

export const MENU: MenuItem[] = [
  {
    label: 'Main',
    isTitle: true
  },



  {
    label: 'Formulaire Citoyens',
    icon: 'file-text',
    subItems: [

      {
        label: 'Citoyens',
        link: '/form-elements/citoyen'
      },
    ]
  },

  {
    label: 'Pages',
    isTitle: true
  },

  {
    label: 'Authentification',
    icon: 'unlock',
    subItems: [
      {
        label: 'Se connecter ',
        link: '/auth/login',
      },
      {
        label: 'Sinscrire',
        link: '/auth/register',
      },
    ]
  },

];
