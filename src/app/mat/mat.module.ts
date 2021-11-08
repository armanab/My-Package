import { NgModule } from '@angular/core';
import { MatSliderModule  } from '@angular/material/slider';
import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule} from '@angular/material/button';
import { MatFormFieldModule} from '@angular/material/form-field';
import {  MatInputModule  } from '@angular/material/input';
import {  MatToolbarModule  } from '@angular/material/toolbar';
import { MatTreeModule } from '@angular/material/tree';



@NgModule({
  declarations: [],
  exports: [
    MatSliderModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatTreeModule
  ]
})
export class MatModule { }
