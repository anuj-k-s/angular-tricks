import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InlineHtmlComponent } from './inline-html/inline-html.component';
import { TemplateBasicComponent } from './template-basic/template-basic.component';

@NgModule({
  declarations: [
    AppComponent,
    InlineHtmlComponent,
    TemplateBasicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
