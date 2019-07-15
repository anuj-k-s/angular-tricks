import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TemplateBasicComponent } from './template-basic/template-basic.component';
import { Java8Component } from './java8/java8.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { DataTableComponent } from './data-table/data-table.component';

const routes: Routes = [
  // {path:'',pathMatch:'full',redirectTo:'java8'},
  {path : 'basic-template' , component : TemplateBasicComponent},
  {path : 'java8' , component : Java8Component},
  {path : 'navbar' , component : NavigationBarComponent},
  {path : 'data-table' , component : DataTableComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
