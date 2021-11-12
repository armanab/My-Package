import { DisneyComponent } from './disney/disney.component';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{
  path: '',
  redirectTo: 'panel',
  pathMatch: 'full'
},
  {
    path: '',
   
    children: [
      {
        path: 'panel',
        loadChildren: () => import('./panel/panel.module').then(mod => mod.PanelModule)
      },
      {
        path: 'disney',
        component: DisneyComponent
      }


      // {
      //   path: 'about-us',
      //   component: AboutUsComponent
      // },
      // {
      //   path: 'contact-us',
      //   component: ContactUsComponent
      // },
      // {
      //   path: 'rules',
      //   component: RulesPageComponent
      // },
      // {
      //   path: 'help',
      //   component: HelpComponent
      // }
    ]
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
