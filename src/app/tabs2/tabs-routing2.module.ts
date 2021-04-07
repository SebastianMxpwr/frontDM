import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage2 } from './tabs.page2';

const routes: Routes = [
  {
    path: 'tabs2',
    component: TabsPage2,
    children: [
      {
        path: 'tab4',
        loadChildren: () => import('../tab4/tab4.module').then(m => m.Tab4PageModule)
      },
      {
        path: 'tab5',
        loadChildren: () => import('../tab5/tab5.module').then(m => m.Tab5PageModule)
      },
      {
        path: 'tab6',
        loadChildren: () => import('../tab6/tab6.module').then(m => m.Tab6PageModule)
      },
      {
        path: 'tab7',
        loadChildren: () => import('../tab7/tab7.module').then(m => m.Tab7PageModule)
      },
      {
        path: '',
        redirectTo: '/tabs2/tab4',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs2/tab4',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPage2RoutingModule {}
