import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout';
import { AllemployeesComponent } from './Mycomponents/allemployees/allemployees.component'; 
import { SomePageComponent } from './Mycomponents/some-page/some-page.component';
import { AddClientComponent  } from './Mycomponents/add-client/add-client.component'
import { TablesComponent } from './views/base/clients-list/tables.component';
import { ProduitsEtServicesComponent } from './views/base/addproduitsetservices/produits-et-services.component'
import { ListeproductComponent } from './Mycomponents/listeproduct/listeproduct.component';
import { TooltipsComponent } from './views/base/adddevis/tooltips.component';
import { BreadcrumbsComponent } from './views/base/addclient/breadcrumbs.component';
import { CardsComponent } from './views/base/clientcards/cards.component';
import { AppTabsComponent } from  './views/base/listedesproduits/tabs.component'
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  
  {
    path: '',
    component: DefaultLayoutComponent,
    data: {
      title: 'Home'
    },
    children: [
      {
        path: 'dashboard',
        loadChildren: () => import('./views/dashboard/routes').then((m) => m.routes)
      },
      {
        path: 'Company/all',
        component : AllemployeesComponent
      },
      {
        path: 'theme',
        loadChildren: () => import('./views/theme/routes').then((m) => m.routes)
      },
      {
        path: 'base',
        loadChildren: () => import('./views/base/routes').then((m) => m.routes)
      },
      {
        path: 'buttons',
        loadChildren: () => import('./views/buttons/routes').then((m) => m.routes)
      },
      {
        path: 'forms',
        loadChildren: () => import('./views/forms/routes').then((m) => m.routes)
      },
      {
        path: 'icons',
        loadChildren: () => import('./views/icons/routes').then((m) => m.routes)
      },
      {
        path: 'notifications',
        loadChildren: () => import('./views/notifications/routes').then((m) => m.routes)
      },
      {
        path: 'widgets',
        loadChildren: () => import('./views/widgets/routes').then((m) => m.routes)
      },
      {
        path: 'charts',
        loadChildren: () => import('./views/charts/routes').then((m) => m.routes)
      },
      { path: 'some-page', component: SomePageComponent },
      {
        path: 'add-client',
        component: AddClientComponent
      },
      { path: 'carta', component: CardsComponent },
      { path: 'client-list', component: TablesComponent },
      { path: 'produits-et-services', component: ProduitsEtServicesComponent },
      { path: 'listeproduct', component: ListeproductComponent },
      { path: 'tooltips', component: TooltipsComponent },
      { path: 'listproduit', component: TablesComponent },
      { path: 'client', component: BreadcrumbsComponent },
      {path:'productcard',component:AppTabsComponent},

      {
        path: 'pages',
        loadChildren: () => import('./views/pages/routes').then((m) => m.routes)
      }
    ]
  },
  {
    path: '404',
    loadComponent: () => import('./views/pages/page404/page404.component').then(m => m.Page404Component),
    data: {
      title: 'Page 404'
    }
  },
  {
    path: '500',
    loadComponent: () => import('./views/pages/page500/page500.component').then(m => m.Page500Component),
    data: {
      title: 'Page 500'
    }
  },
  {
    path: 'login',
    loadComponent: () => import('./views/pages/login/login.component').then(m => m.LoginComponent),
    data: {
      title: 'Login Page'
    }
  },
  {
    path: 'register',
    loadComponent: () => import('./views/pages/register/register.component').then(m => m.RegisterComponent),
    data: {
      title: 'Register Page'
    }
  },
  { path: '**', redirectTo: 'dashboard' }
];
