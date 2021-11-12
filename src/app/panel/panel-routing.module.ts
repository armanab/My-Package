
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CustomermanagementComponent } from '../customermanagement/customermanagement.component';
import { DashboardComponent } from '../dashboard/dashboard.component';

const routes: Routes = [
  {
    path: '',
    children: [{
      path: '',
      component: DashboardComponent,
      data: { title: 'dashboard', breadcrumb: 'dashboard' }
    },
    {
      path: 'customer-management/real-person-foreign-passport-inquiry',
      component: CustomermanagementComponent,
      data: { title: 'customer-management', breadcrumb: 'Customer-Management' }
    },
    {
      path: 'customer-management/inquiry-real-person',
      component: CustomermanagementComponent,
      data: { title: 'customer-management', breadcrumb: 'Customer-Management' }
    }
    ,
    {
      path: 'customer-management/inquiry-non-iranian-real-person-identification-no',
      component: CustomermanagementComponent,
      data: { title: 'customer-management', breadcrumb: 'Customer-Management' }
    }



  ]
    // ,
    // {
    //   path: 'map',
    //   component: MapComponent,
    //   data: { title: 'map', breadcrumb: 'MAP' }
    // }]
    
   
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PanelRoutingModule { }
