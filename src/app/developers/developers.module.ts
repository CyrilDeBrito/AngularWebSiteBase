import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';

import { DeveloperService } from './service/developer-service';
import { CardComponent } from './card/card.component';
import { AppRoutingModule } from '../app-routing.module';
import { BindingComponent } from './binding/binding.component';




@NgModule({
  declarations: [
    CardComponent,
    BindingComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
  ],
  exports: [
    CardComponent,
    BindingComponent,
  ],

  providers: [DeveloperService],
})
export class DevelopersModule { }
