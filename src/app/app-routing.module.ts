import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InlineHtmlComponent } from './inline-html/inline-html.component';

const routes: Routes = [
  {path : 'inline-html' , component : InlineHtmlComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
