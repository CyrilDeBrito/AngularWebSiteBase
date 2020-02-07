import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { CardComponent } from './card/card.component';

import { DeveloperService } from './service/developer-service';
import { FormsModule } from '@angular/forms';
import { BindingComponent } from './binding/binding.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    BindingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule
  ],
  providers: [DeveloperService],
  bootstrap: [AppComponent]
})
export class AppModule { }
