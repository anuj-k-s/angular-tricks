import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineHtmlComponent } from './inline-html/inline-html.component';
import { TemplateBasicComponent } from './template-basic/template-basic.component';
import { HttpClientModule } from '@angular/common/http';
import { Java8Component } from './java8/java8.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineHtmlComponent,
    TemplateBasicComponent,
    Java8Component,
    NavigationBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
