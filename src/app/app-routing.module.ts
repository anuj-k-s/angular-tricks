import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineHtmlComponent } from './inline-html/inline-html.component';
import { TemplateBasicComponent } from './template-basic/template-basic.component';
import { Java8Component } from './java8/java8.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';

const routes: Routes = [
  {path : 'inline-html' , component : InlineHtmlComponent},
  {path : 'basic-template' , component : TemplateBasicComponent},
  {path : 'java8' , component : Java8Component},
  {path : 'navbar' , component : NavigationBarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
