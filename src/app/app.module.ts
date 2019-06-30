import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateBasicComponent } from './template-basic/template-basic.component';
import { HttpClientModule } from '@angular/common/http';
import { Java8Component } from './java8/java8.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DropDownDirective } from './directive/dropdown.directive';
import { DataTableComponent } from './data-table/data-table.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateBasicComponent,
    Java8Component,
    NavigationBarComponent,
    DropDownDirective,
    DataTableComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
