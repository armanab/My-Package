import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomermanagementComponent } from '../customermanagement/customermanagement.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { PanelRoutingModule } from './panel-routing.module';


const components = [
  CustomermanagementComponent,
  DashboardComponent

];

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    PanelRoutingModule
  ],
  exports:components
})
export class PanelModule { }
