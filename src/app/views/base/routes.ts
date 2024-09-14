import { Routes } from '@angular/router';
import { TablesComponent } from './clients-list/tables.component';
import { ProduitsEtServicesComponent } from './addproduitsetservices/produits-et-services.component';
import { ListeproductComponent } from 'src/app/Mycomponents/listeproduct/listeproduct.component';

export const routes: Routes = [
  {
    path: '',
    data: {
      title: 'Base'
    },
    children: [
      {
        path: '',
        redirectTo: 'cards',
        pathMatch: 'full'
      },
     
      {
        path: 'breadcrumbs',
        loadComponent: () => import('./addclient/breadcrumbs.component').then(m => m.BreadcrumbsComponent),
        data: {
          title: 'Breadcrumbs'
        }
      },
      {
        path: 'cards',
        loadComponent: () => import('./clientcards/cards.component').then(m => m.CardsComponent),
        data: {
          title: 'Cards'
        }
      },
      { path: 'client-list', component: TablesComponent },
      { path: 'produits-et-services', component: ProduitsEtServicesComponent },
      { path: 'listeproduct', component: ListeproductComponent},
      {
        path: 'carousel',
        loadComponent: () => import('./carousels/carousels.component').then(m => m.CarouselsComponent),
        data: {
          title: 'Carousel'
        }
      },
      {
        path: 'collapse',
        loadComponent: () => import('./collapses/collapses.component').then(m => m.CollapsesComponent),
        data: {
          title: 'Collapse'
        }
      },
      {
        path: 'list-group',
        loadComponent: () => import('./list-groups/list-groups.component').then(m => m.ListGroupsComponent),
        data: {
          title: 'List Group'
        }
      },
      {
        path: 'navs',
        loadComponent: () => import('./navs/navs.component').then(m => m.NavsComponent),
        data: {
          title: 'Navs & Tabs'
        }
      },
      {
        path: 'pagination',
        loadComponent: () => import('./paginations/paginations.component').then(m => m.PaginationsComponent),
        data: {
          title: 'Pagination'
        }
      },
      {
        path: 'placeholder',
        loadComponent: () => import('./placeholders/placeholders.component').then(m => m.PlaceholdersComponent),
        data: {
          title: 'Placeholder'
        }
      },
      {
        path: 'popovers',
        loadComponent: () => import('./popovers/popovers.component').then(m => m.PopoversComponent),
        data: {
          title: 'Popovers'
        }
      },
      {
        path: 'progress',
        loadComponent: () => import('./commandes/progress.component').then(m => m.ProgressComponent),
        data: {
          title: 'Progress'
        }
      },
      {
        path: 'spinners',
        loadComponent: () => import('./Devis/spinners.component').then(m => m.SpinnersComponent),
        data: {
          title: 'Spinners'
        }
      },
      {
        path: 'tables',
        loadComponent: () => import('./clients-list/tables.component').then(m => m.TablesComponent),
        data: {
          title: 'Tables'
        }
      },
      {
        path: 'tabs',
        loadComponent: () => import('./listedesproduits/tabs.component').then(m => m.AppTabsComponent),
        data: {
          title: 'Tabs'
        }
      },
      {
        path: 'tooltips',
        loadComponent: () => import('./adddevis/tooltips.component').then(m => m.TooltipsComponent),
        data: {
          title: 'Tooltips'
        }
      }
    ]
  }
];


