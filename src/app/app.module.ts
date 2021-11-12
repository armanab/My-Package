import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MenuComponent } from './menu/menu.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MatModule } from './mat/mat.module';
import { DisneyComponent } from './disney/disney.component';
import { PanelModule } from './panel/panel.module';




@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    DisneyComponent
    
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    PanelModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
