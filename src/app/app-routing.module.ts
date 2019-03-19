import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineHtmlComponent } from './inline-html/inline-html.component';
import { TemplateBasicComponent } from './template-basic/template-basic.component';

const routes: Routes = [
  {path : 'inline-html' , component : InlineHtmlComponent},
  {path : 'basic-template' , component : TemplateBasicComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
