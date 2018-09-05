import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// routes
export const ROUTES: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: 'home', loadChildren: './home/home.module#HomeModule' },
    { path: 'customer', loadChildren: './customer/customer.module#CustomerModule' }
  ];
@NgModule({
  imports: [RouterModule.forRoot(ROUTES,{ enableTracing: true , useHash :true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }